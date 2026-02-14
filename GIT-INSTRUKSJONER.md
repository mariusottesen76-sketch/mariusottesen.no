# Git-instruksjoner (PowerShell)

Kjør kommandoene i rekkefølge i PowerShell. Du kan kopiere og lime inn.

---

## Oppdatere prosjektet og sende til GitHub/GitLab

**Alternativ 1 – én linje (alle operasjoner på én gang):**

Kopier og lim inn denne linjen i PowerShell. Den bytter mappe, legger til endringer, committer og pusher:

```powershell
cd "C:\Users\mariu\OneDrive\Desktop\marius-side"; git add .; git commit -m "Oppdatert Consulting og logoer"; git push
```

*(Hvis du allerede står i prosjektmappen, kan du droppe `cd`-delen og bare kjøre:*
```powershell
git add .; git commit -m "Oppdatert Consulting og logoer"; git push
```
*)*

---

**Alternativ 2 – steg for steg (én kommando om gangen):**

```powershell
cd "C:\Users\mariu\OneDrive\Desktop\marius-side"
git status
git add .
git commit -m "Oppdatert Consulting og logoer"
git push
```

---

## Første gang (hvis repo ikke er satt opp)

```powershell
cd "C:\Users\mariu\OneDrive\Desktop\marius-side"
git init
git add .
git commit -m "Første commit"
git remote add origin <din-repo-URL>
git push -u origin main
```

Bytt ut `<din-repo-URL>` med adressen til repoet ditt (f.eks. `https://github.com/brukernavn/marius-side.git`).

---

## Korte forklaringer

| Kommando        | Betydning                          |
|----------------|-------------------------------------|
| `git status`   | Viser hvilke filer som er endret    |
| `git add .`    | Legger alle endringer til staging   |
| `git commit -m "..."` | Lagrer med en melding        |
| `git push`     | Sender commits til remote (f.eks. GitHub) |

---

*Filen ligger i prosjektmappen slik at du enkelt kan åpne den når du skal oppdatere Git.*
