# GA4 — drift og oppsett (mariusottesen.no)

## Measurement ID

`G-LTLPQ27LQN` (overstyr med `NEXT_PUBLIC_GA_MEASUREMENT_ID` i Vercel ved behov).

## Google Analytics (Admin)

Anbefalt etter deploy:

1. **Data stream** — én web-strøm for `www.mariusottesen.no`.
2. **Enhanced measurement** — vurder å **slå av automatisk filnedlasting** hvis doble `file_download` oppstår (egne hendelser sendes fra nettsiden for CV/søknad-lenker).
3. **Google signals / annonser** — hold av (ingen remarketing i koden).
4. **Data retention** — sett ønsket periode (standard 2 måneder / valgfritt 14 måneder).
5. **Internal traffic** (valgfritt supplement til nettleser-opt-out) — IP-regel i GA4 Admin hvis ønskelig.
6. **Koble Search Console** — for søketrafikk (Google).

## Vercel

- Sett `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-LTLPQ27LQN` på **Production** (valgfri på Preview — koden sporer uansett ikke preview-hosts).
- Ikke aktiver Vercel Web Analytics parallelt med GA4 med mindre det er bevisst.

## Personlig opt-out (eier / utvikler)

| Handling | URL |
|----------|-----|
| Slå av GA4 i denne nettleseren | `https://www.mariusottesen.no/?analytics_opt_out=1` |
| Fjern opt-out | `https://www.mariusottesen.no/?analytics_opt_out=0` |

Lagres i `localStorage` (`marius_analytics_opt_out`). Uavhengig av cookiebanner.

## Samtykke

- Lagring: `localStorage` nøkkel `marius_cookie_consent_v1`, varighet **12 måneder** (se `consent-storage.ts`).
- Endre valg: «Endre cookievalg» i footer eller personvernside.
