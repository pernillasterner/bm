# 📘 Compileit Kodtest – Boka Rum

## 🎨 Färgpalett & Design

- **Bakgrundsfärg:** `#ECECEC`
- **Primär färg (grön):** `#00695C`
- **Textfärger:**
  - Kalender (mötesrum): `#1C1B1F`
  - Dropdown/datum: `#212121`
  - Rubrik: `#000`
- **Border:** `#212121`
- **Knappar:**
  - Bakgrund: `#1D1D1D`
  - Text: `#fff`
  - Border: `rgba(255,255,255,0.1)`

### 🎨 CSS-variabler
```css
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
```

---

## 🧱 Teknisk Stack

- Next.js (Page Router)
- TypeScript
- Tailwind CSS
- Google Fonts (Roboto)
- Prisma + SQLite
- Netlify

---

## ✅ Steg för Steg

### 0. 🔧 Förberedelser

- [x] Github repo
- [x] Installation av alla paket
- [x] Setup av frontend & backend
- [x] Prisma init, konfigurera db & testdata

### 1. ♻️ Återanvändbara komponenter

- [x] `Button`
- [x] `Heading` (rubrikkomponent med storleksvarianter)
- [x] `RoomBox` (ruta per mötesrum)
- [x] Färgsystem och typsnitt

### 2. 🧠 Att tänka på

- [x] Responsivitet
- [x] Tillgänglighet
- [x] Lighthouse-test
- [x] Ikoner: mötesrum + navigering

---

## 🗂️ Sidor och Funktioner

### 📄 Layout

- [x] Gemensam layout-komponent för sidor
- [x] Dynamisk `<head>` med titel via props

### 🏠 Startsida

- [x] Rubrik: "Boka ett rum"
- [x] Knapp: "Boka" → navigerar till "Välj en tid"

### 📅 Välj en tid

- [x] Rubrik: "Välj en tid"
- [x] Dropdown med mötesrum:
  - [x] Data från `/api/rooms`
  - [x] Sortering efter kapacitet
  - [x] Checkboxar för val
  - [x] Label uppdateras beroende på val:
    - "Mötesrum"
    - "1 valt rum"
    - "3 valda rum"
  - [x] Knappar: "Välj" & "Avmarkera"
  - [x] Pil-ikon till höger

- [x] Kalender:
  - [x] Tre kolumner (dagar)
  - [x] Visa mötesrum under varje datum
  - [x] Tider & rum visas korrekt sorterat
  - [x] Möjlighet att välja tid & rum
  - [x] Nästa-knapp → "Vem bokar?"

- [x] Navigering:
  - [x] Höger/Vänster-pilknappar
  - [x] Visar datumspann (ex. "18 okt – 20 okt")

### 👤 Vem bokar?

- [x] Rubrik: "Vem bokar?"
- [x] Input: "Skriv ditt fullständiga namn här"

### ✅ Bekräftelse

- [x] Visar bekräftelse (id just nu)
- [ ] Visa namn, datum, rum (TODO)

---

## ✨ Om Jag Hinner (Bonus)

- [ ] Dark/light mode
- [ ] Deployment till Netlify
- [ ] Färdig bekräftelsevy (namn, datum, rum)
- [ ] Validera formulär

---

## 📌 Mini-Todos

- [ ] Uppdatera README – förklara databas
- [ ] Bättre UI på dropdown – stäng med kryss/label
- [ ] Datumlogik: använd statisk lista istället för db-datum
- [ ] Visa även tomma dagar i kalender

---

## 🐛 Problem & Lösningar

- **Problem:** Prisma hämtar inte data från `/api/rooms`
  - **Lösning:** Prisma genererade klient till `src/generated/prisma`, ta bort override i lib

- **Problem:** Checkbox ger `TypeError: Cannot read properties of undefined (reading 'findMany')`
  - **Lösning:** Kör `npx prisma generate` igen

---

## 📦 Installerade Paket

- `prisma`, `@prisma/client`
- `clsx`, `tailwind-merge`

---