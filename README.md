# Mclarans Cakes 🎂

Online cake ordering website for Mclarans Cakes — browse the menu, add cakes
to your cart, and place orders for pickup or delivery.

Built with [React](https://react.dev/) + [Vite](https://vite.dev/) and
[React Router](https://reactrouter.com/).

## Pages

- **Home** — hero, customer favourites, and how ordering works
- **Cake Menu** — full catalogue with category filters, sizes, and add-to-cart
- **Custom Cakes** — request form for themed / occasion cakes with a quote
- **Cart** — review items, enter pickup/delivery details, and place the order
- **About** — the story behind the bakery
- **Contact** — WhatsApp, email, and a message form

## How orders reach you

There is no server — when a customer places an order, the site builds an
order summary (items, total, customer details, and an order reference) and
opens WhatsApp or email with the message pre-filled, addressed to you.

⚠️ **Before going live**, update your real contact details in
[`src/data/shop.js`](src/data/shop.js):

- `whatsapp` — your WhatsApp number (digits only, with country code)
- `whatsappDisplay` — how the number is shown on the site
- `email`, `address`, `hours`

Cake names, prices, and sizes live in
[`src/data/cakes.js`](src/data/cakes.js) — edit that file to change the menu.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the development server       |
| `npm run build`   | Build for production into `dist/`  |
| `npm run preview` | Preview the production build       |
| `npm run lint`    | Lint the codebase with oxlint      |
