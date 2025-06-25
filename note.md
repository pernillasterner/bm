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
- Lägg till head för att kunna lägga till title - tänk på att den ska vara dynamisk. Kunna skicka in props. ✅

### Startsida

- H1: "Boka ett rum" - KOMPONENT!! ✅
- Knapp: "Boka" → länkas till "Välj en tid"-vyn ✅


### Sida: Välj en tid

- H1: "Välj en tid" ✅

- Intallera Prisma ✅
  - npm install prisma --save-dev
  - npm install @prisma/client
- Initiera Prisma ✅
  - npx prisma init --datasource-provider sqlite
- Skapa tabellerna i db och lägg till testdata ✅
  - npx prisma migrate dev --name init + npx prisma studio
  - namn: sträng
  - capacity: int
  - created_at
- Migrera databasen ✅


- Skapa en Dropdown komponent
- Dropdown med fem olika mötesrum (checkboxar)
  - Testa att hämta data ✅
  - Skapa checkboxar ✅
  - Visa data i rätt ordning. minst antal personer först ✅
  - Select label - Uppdateras när klienten väljer alt. ✅
    - Mötesrum när inget är valt
    - ett valt rum
    - 3 valda rum när det är fler än 1
  - Knappar: "Välj" & "Avmarkera" ✅
  - Lägga till pilikon till höger om label ✅

- Installera clsx för att kombinera klasser - tailwind-merge ✅
[https://akhilaariyachandra.com/blog/using-clsx-or-classnames-with-tailwind-merge]


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



Info about Prisma
Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and a managed serverless Postgres database. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started


## Mini todos
- Uppdatera readme - lägga till beskrivning gällande db
- När man avmarkerar alla checkboxar bör man antingen ändra text på "välj" till stäng eller ha ett kryss för att stänga


## Problem
- problem med prisma. lyckas inte hämta data från db /api/rooms 
Lösning: Prisma genererar klienten till src/generated/prisma istället för till @prisma/client. Ta bort den raden från prisma filen i lib.
- får fel när jag klickar i checkbox i ett mötesrum