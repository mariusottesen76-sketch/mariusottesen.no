# AI-assistent — anbefalt Vercel WAF rate limiting

**Internt notat (Oppdrag 06B).** Ikke aktivert i repo — konfigureres manuelt i Vercel før produksjonslansering.

## Anbefalt regel (utgangspunkt)

| Felt | Verdi |
|------|--------|
| **Endepunkt** | Request path **Equals** `/api/assistant` (POST-trafikk) |
| **Nøkkel** | IP-adresse (client IP) |
| **Strategi** | Fixed window |
| **Vindu** | **10 minutter** (600 s) |
| **Grense** | **20** forespørsler per nøkkel per vindu |
| **Ved overskridelse** | **HTTP 429** (Too Many Requests) |
| **Innføring** | Start med **Log**, verifiser treff i Firewall-oversikten, deretter **429** |

## Før aktivering

1. **Bekreft Vercel-plan** — rate limiting er tilgjengelig på Hobby/Pro, men antall regler og inkludert volum varierer. Se [Vercel WAF rate limiting](https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting) og [Usage & Pricing](https://vercel.com/docs/vercel-firewall/vercel-waf/usage-and-pricing).
2. **Husk per-region telling** — grensen gjelder per edge-region; svært fordelt trafikk kan teoretisk overskride intensjonen per IP.
3. **IP-begrensning er ikke full sikring** — VPN, botnett og mange kilder kan omgå enkel IP-kvote. Kombiner med **Anthropic månedlig forbruksgrense** og overvåking.

## UI

Nettsiden viser ved 429:

- NO: «Du har sendt mange spørsmål på kort tid. Vent litt før du prøver igjen.»
- EN: «You've sent several questions in a short time. Please wait a moment before trying again.»

Ingen automatisk retry i chat-widget.

## Ikke i scope

- In-memory rate limiting i Next.js (upålitelig på serverless).
- Redis, Upstash eller annen ekstern telle-tjeneste for MVP.