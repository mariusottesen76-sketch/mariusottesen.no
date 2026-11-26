import type { KnowledgeManifest, KnowledgeManifestEntry } from "./types";
import { buildKnowledgeManifest } from "./build-manifest";

let cachedManifest: KnowledgeManifest | null = null;

/** Deterministic manifest derived from approved content registers (computed once per process). */
export function getKnowledgeManifest(): KnowledgeManifest {
  if (!cachedManifest) {
    cachedManifest = buildKnowledgeManifest();
  }
  return cachedManifest;
}

export function getKnowledgeManifestEntryById(id: string): KnowledgeManifestEntry | undefined {
  return getKnowledgeManifest().entries.find((e) => e.id === id);
}

export function listKnowledgeManifestEntries(): readonly KnowledgeManifestEntry[] {
  return getKnowledgeManifest().entries;
}