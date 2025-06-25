# Compileit kodtest – Boka rum

## Färgpalett

- Bakgrundsfärg: #ECECEC
- Primär färg: #00695C (grön)
- Färg på texten i kalendern, varje mötesrum: #1C1B1F
- Textfärg – mötesrum dropdown, datum samt datum i kalendern: #212121
- Rubrik: #000
- Border – dropdown och kalender: #212121
- Bakgrundsfärg till knapparna: #1D1D1D
- Textfärg knappar: #fff
- Borderfärg på knapparna: #FFF men 10% transparens (rgba 255,255,255,0.1)

## CSS-variabler

:root {
  --gray-50: #FAFAFA;
  --gray-100: #ECECEC;
  --gray-200: #E0E0E0;
  --gray-800: #1D1D1D;
  --gray-900: #1C1B1F;
  --black: #000000;
  --white: #ffffff;
  --teal-600: #00695C;
  --white-10: rgba(255, 255, 255, 0.1);
}

## Teknisk stack

- Next.js (Page Router)
- TypeScript
- Tailwind CSS
- Google Fonts
- Prisma + SQLite
- Netlify

## 0. Förberedelse

- Github repo ✅
- Installera alla nödvändiga paket ✅
- Frontend (Next.js, TailwindCSS, Typescript, Figma)
- Backend (API-routes, SQLite, Typescript, Prisma)

## 1. Återkommande komponenter

- Knappen
- Ruta för varje mötesrum i kalendern
- Sätta upp vilka färger som ska finnas med på designen + Font Roboto
- Heading – Sätta heading-variant samt storlekar

## 2. Tänka på

- Responsivitet
- Tillgänglighet
- Lighthouse
- Hämta ikoner till mötesrum dropdown, samt höger/vänster pilknappar

## 3. Sidor och funktion

### Preppa

- Skapa en layout som grund för alla sidor ✅
- Lägg till head för att kunna lägga till title - tänk på att den ska vara dynamisk. Kunna skicka in props.

### Startsida

- H1: "Boka ett rum"
- Knapp: "Boka" → länkas till "Välj en tid"-vyn

### Välj en tid

- H1: "Välj en tid"
- Dropdown med fem olika mötesrum (checkboxar)
  - Skapa testdata för att visa upp fem olika mötesrum (från db)
  - Knappar: "Välj" & "Avmarkera"
- Höger/Vänster pilknappar för att bläddra bland datum
- Visning av datumspann (ex. 18 okt – 20 okt)
- Kalender med tre kolumner (en per dag)
  - Visar mötesrum som är tillgängliga
  - Möjlighet att välja ett rum
  - Funktion för att spara bokningen (namn + tid → till db)
- Knapp till nästa vy: "Nästa"

### Vem bokar

- H1: "Vem bokar?"
- Inputfält: "Skriv ditt fullständiga namn här"

## OM JAG HINNER

- Dark and light mode
- Deployment till Netlify
- Bekräftelsemeddelande med:
  - Namn
  - Datum
  - Mötesrum

## Att komma ihåg

- Steg för steg
- Snyggt, mobilanpassat, tillgängligt
- Det ska kännas rätt