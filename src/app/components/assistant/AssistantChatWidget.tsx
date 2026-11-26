"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Send, X, ExternalLink } from "lucide-react";
import type { AssistantResponseBody } from "../../lib/assistant-knowledge/assistant-types";
import { getAssistantUiCopy } from "./assistant-copy";
import {
  type ChatMessage,
  chatOutcomeFromResponse,
  formatSourceLinkLabel,
  resolveSiteLang,
  shouldAcceptChatSubmit,
  isSafeSourceUrl,
} from "./assistant-chat-logic";
import {
  INITIAL_VISIBLE_SUGGESTIONS,
  isChatOnboardingPhase,
  messagesForDisplay,
  shouldStickScrollToBottom,
} from "./assistant-chat-ui-state";

const REQUEST_TIMEOUT_MS = 28_000;

export default function AssistantChatWidget({ maxQuestionChars }: { maxQuestionChars: number }) {
  const pathname = usePathname() ?? "/";
  const lang = resolveSiteLang(pathname);
  const copy = getAssistantUiCopy(lang);
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const messagesScrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const liveRef = useRef<HTMLDivElement>(null);
  const inFlightRef = useRef(false);
  const stickToBottomRef = useRef(true);

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [introShown, setIntroShown] = useState(false);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);
  const [extraSuggestionsOpen, setExtraSuggestionsOpen] = useState(false);
  const [suggestionsReopened, setSuggestionsReopened] = useState(false);

  useEffect(() => {
    if (open && !introShown) {
      setIntroShown(true);
      setMessages([{ id: "intro", role: "assistant", text: copy.intro }]);
    }
  }, [open, introShown, copy.intro]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const scrollMessagesToEnd = useCallback(() => {
    const el = messagesScrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    if (!open) return;
    if (!stickToBottomRef.current) return;
    requestAnimationFrame(() => scrollMessagesToEnd());
  }, [open, messages, loading, scrollMessagesToEnd]);

  const onboarding = isChatOnboardingPhase(messages);
  const displayMessages = messagesForDisplay(messages);
  const showSuggestionPanel =
    onboarding || suggestionsReopened;
  const primarySuggestions = copy.suggestions.slice(0, INITIAL_VISIBLE_SUGGESTIONS);
  const extraSuggestions = copy.suggestions.slice(INITIAL_VISIBLE_SUGGESTIONS);

  useEffect(() => {
    if (!open || !panelRef.current) return;
    const root = panelRef.current;
    const focusables = () =>
      Array.from(
        root.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    root.addEventListener("keydown", onTab);
    return () => root.removeEventListener("keydown", onTab);
  }, [open, messages.length, loading]);

  const sendQuestion = useCallback(
    async (question: string) => {
      const trimmed = question.trim();
      if (!shouldAcceptChatSubmit(trimmed, inFlightRef.current)) return;
      if (trimmed.length > maxQuestionChars) {
        setErrorBanner(copy.errors.tooLong);
        return;
      }
      setErrorBanner(null);
      const turnId = `turn-${Date.now()}`;
      const userMsg: ChatMessage = {
        id: `${turnId}-user`,
        role: "user",
        text: trimmed,
      };
      setMessages((prev) => [...prev, userMsg]);
      setDraft("");
      setSuggestionsReopened(false);
      setExtraSuggestionsOpen(false);
      stickToBottomRef.current = true;
      inFlightRef.current = true;
      setLoading(true);

      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

      try {
        const res = await fetch("/api/assistant", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: trimmed, lang }),
          signal: controller.signal,
        });
        let body: AssistantResponseBody | { error?: string } = { error: "unknown" };
        try {
          body = (await res.json()) as AssistantResponseBody;
        } catch {
          /* keep fallback */
        }
        const outcome = chatOutcomeFromResponse(res.ok, res.status, body, lang, turnId);
        setMessages((prev) => [...prev, outcome.message]);
        if (outcome.kind === "assistant" && liveRef.current) {
          liveRef.current.textContent = outcome.message.text.slice(0, 120);
        }
      } catch (err) {
        const isAbort = err instanceof DOMException && err.name === "AbortError";
        setMessages((prev) => [
          ...prev,
          {
            id: `${turnId}-err`,
            role: "assistant",
            text: isAbort ? copy.errors.timeout : copy.errors.generic,
          },
        ]);
      } finally {
        window.clearTimeout(timer);
        inFlightRef.current = false;
        setLoading(false);
      }
    },
    [copy.errors, lang, maxQuestionChars]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void sendQuestion(draft);
  };

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen(true)}
        tabIndex={open ? -1 : 0}
        aria-hidden={open}
        className={
          open
            ? "fixed w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
            : "fixed z-[55] bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 rounded-full border border-indigo-400/80 bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 hover:bg-indigo-500 hover:border-indigo-300/90 active:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-safe:transition-colors"
        }
        aria-expanded={open}
        aria-controls="assistant-chat-panel"
      >
        <MessageCircle className="h-5 w-5 text-indigo-100 shrink-0" aria-hidden />
        <span className={open ? "sr-only" : "hidden sm:inline"}>{copy.launcherLabel}</span>
        {!open && <span className="sr-only sm:hidden">{copy.launcherLabel}</span>}
      </button>

      {open && (
        <div
          ref={panelRef}
          id="assistant-chat-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed z-[60] inset-x-0 bottom-0 top-auto flex max-h-[min(88dvh,680px)] flex-col border-t border-slate-800/80 bg-slate-950/98 shadow-2xl shadow-black/50 backdrop-blur-md pb-[env(safe-area-inset-bottom,0px)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:left-auto sm:w-[min(100vw-1.5rem,26.5rem)] sm:max-h-[min(36rem,88dvh)] sm:rounded-2xl sm:border overflow-hidden"
        >
          <header className="flex shrink-0 items-start gap-3 border-b border-slate-800/60 px-4 py-3.5">
            <div className="min-w-0 flex-1">
              <h2 id={titleId} className="text-base font-bold text-white">
                {copy.title}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">{copy.subtitle}</p>
              <p className="text-[10px] uppercase tracking-wide text-slate-500 mt-1">{copy.aiDisclaimer}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                launcherRef.current?.focus();
              }}
              className="shrink-0 rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label={copy.close}
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </header>

          <div
            ref={messagesScrollRef}
            className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain px-4 py-4 space-y-3.5"
            aria-busy={loading}
            onScroll={() => {
              const el = messagesScrollRef.current;
              if (el) stickToBottomRef.current = shouldStickScrollToBottom(el);
            }}
          >
            {displayMessages.map((m) => (
              <AssistantMessageBubble key={m.id} message={m} copy={copy} lang={lang} />
            ))}
            {loading && (
              <p className="text-xs text-indigo-300/90 animate-pulse" role="status">
                {copy.sending}
              </p>
            )}
          </div>

          <div ref={liveRef} className="sr-only" aria-live="polite" aria-atomic="true" />

          {errorBanner && (
            <p className="px-4 text-xs text-amber-300/90" role="alert">
              {errorBanner}
            </p>
          )}

          {showSuggestionPanel && (
            <div className="shrink-0 border-t border-slate-800/60 px-3 py-2.5 space-y-2">
              <div className="flex flex-wrap gap-2">
                {(onboarding ? primarySuggestions : copy.suggestions).map((s) => (
                  <button
                    key={s}
                    type="button"
                    disabled={loading}
                    onClick={() => void sendQuestion(s)}
                    className="cursor-pointer text-left text-[11px] leading-snug rounded-xl border border-indigo-500/45 bg-indigo-950/50 px-3 py-2 text-indigo-100/95 hover:border-indigo-400/70 hover:bg-indigo-900/55 hover:text-white active:bg-indigo-800/60 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    {s}
                  </button>
                ))}
              </div>
              {onboarding && extraSuggestions.length > 0 && (
                <>
                  {extraSuggestionsOpen && (
                    <div className="flex flex-wrap gap-2">
                      {extraSuggestions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          disabled={loading}
                          onClick={() => void sendQuestion(s)}
                          className="cursor-pointer text-left text-[11px] leading-snug rounded-xl border border-indigo-500/45 bg-indigo-950/50 px-3 py-2 text-indigo-100/95 hover:border-indigo-400/70 hover:bg-indigo-900/55 hover:text-white active:bg-indigo-800/60 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => setExtraSuggestionsOpen((v) => !v)}
                    className="text-[11px] font-semibold text-indigo-300/90 hover:text-indigo-200 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
                  >
                    {extraSuggestionsOpen ? copy.hideExtraSuggestions : copy.showMoreSuggestions}
                  </button>
                </>
              )}
            </div>
          )}

          <form onSubmit={onSubmit} className="shrink-0 border-t border-slate-800/60 p-3.5 space-y-2.5">
            <label className="sr-only" htmlFor="assistant-chat-input">
              {copy.placeholder}
            </label>
            <textarea
              id="assistant-chat-input"
              ref={inputRef}
              rows={2}
              maxLength={maxQuestionChars}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void sendQuestion(draft);
                }
              }}
              placeholder={copy.placeholder}
              disabled={loading}
              className="w-full resize-none rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-60"
            />
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3 min-w-0">
                <Link
                  href={copy.contactHref}
                  className="text-xs font-semibold text-indigo-300 hover:text-indigo-200 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm shrink-0"
                >
                  {copy.contactCta}
                </Link>
                {!onboarding && (
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => setSuggestionsReopened((v) => !v)}
                    className="text-xs font-medium text-slate-400 hover:text-indigo-200 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm shrink-0"
                    aria-expanded={suggestionsReopened}
                  >
                    {copy.toggleSuggestions}
                  </button>
                )}
              </div>
              <button
                type="submit"
                disabled={loading || !draft.trim()}
                className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-indigo-500 active:bg-indigo-700 disabled:bg-slate-700 disabled:text-slate-400 disabled:hover:bg-slate-700 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                <Send className="h-3.5 w-3.5" aria-hidden />
                {copy.send}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

function AssistantMessageBubble({
  message,
  copy,
  lang,
}: {
  message: ChatMessage;
  copy: ReturnType<typeof getAssistantUiCopy>;
  lang: ReturnType<typeof resolveSiteLang>;
}) {
  const isUser = message.role === "user";
  const safeUrls = (message.urls ?? []).filter(isSafeSourceUrl);

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[92%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-indigo-600/90 text-white"
            : "bg-slate-800/80 text-slate-100 border border-slate-700/50"
        }`}
      >
        {message.text}
        {safeUrls.length > 0 && (
          <div className="mt-2 pt-2 border-t border-slate-600/40">
            <p className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">
              {copy.sourcesHeading}
            </p>
            <ul className="space-y-1">
              {safeUrls.map((url) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-indigo-300 hover:text-indigo-200 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm"
                  >
                    <span className="truncate max-w-[14rem]">{formatSourceLinkLabel(url, lang)}</span>
                    <ExternalLink className="h-3 w-3 shrink-0" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}