# AI-assistent — miljøer og produksjonskontroll

**Internt notat (Oppdrag 06B).** Beskriver ønsket oppsett; endrer ikke Vercel- eller lokal `.env.local`.

## Feature flags

| Variabel | Betydning |
|----------|-----------|
| `CHAT_UI_ENABLED=true` | Widget **kan** vises dersom GET også rapporterer `enabled: true`. |
| `CHAT_ENABLED=true` + `ANTHROPIC_API_KEY` | POST `/api/assistant` kan kalle modell (med rate limit i prod). |

Widgeten vises kun når **begge** er oppfylt (`shouldShowAssistantChat` mot GET `/api/assistant`).

## Lokal utvikling

- UI og API kan være aktivert i `.env.local` (gitignored).
- Rate limiting mangler lokalt — akseptert for utvikling; ikke eksponer nøkkel.

## Vercel Preview

- **Anbefaling:** `CHAT_ENABLED=false` og/eller `CHAT_UI_ENABLED=false` på Preview til WAF-regel og tilgang er kontrollert.
- Unngå at preview-deployments bruker produksjonsnøkkel uten firewall.

## Produksjon — aktiver chat først når

1. **Vercel Firewall** er konfigurert og testet (se `assistant-vercel-rate-limiting.md`).
2. **Anthropic** månedlig forbruksgrense og varsler er **verifisert** i Console.
3. **Personvernerklæring** er oppdatert (egen oppdrag).
4. Sikkerhet og funksjon er kvalitetssikret (eval + manuell røyktest).
5. Marius **godkjenner** publisering eksplisitt.

Inntil da: `CHAT_ENABLED=false` og `CHAT_UI_ENABLED=false` i Production environment.