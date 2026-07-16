# Siste skjermbilde (/ss)

Hent og analyser det nyeste skjermbildet. Brukeren skal **ikke** lime inn bilde manuelt.

## Steg (gjør dette først)

1. Kjør i terminal:
   ```powershell
   powershell -NoProfile -ExecutionPolicy Bypass -File "$env:USERPROFILE\.cursor\scripts\update-latest-screenshot.ps1"
   ```
2. Les filen `.cursor/latest-screenshot.png` med Read-verktøyet.
3. Beskriv kort hva som vises, og hjelp med det brukeren ber om.

## Kilder scriptet sjekker

- Utklippstavle (Win+Shift+S)
- `Bilder\Screenshots`
- Cursor chat-assets og workspaceStorage

## Ekstra instruks fra bruker

Hvis meldingen inneholder tekst etter `/ss`, følg den etter at du har sett skjermbildet.
