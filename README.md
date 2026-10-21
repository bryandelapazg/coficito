# coficito. — Phase 3 development prototype

A fictional specialty coffee website concept by BEMA Studios.

## Run locally

Open `index.html` in a browser, or use VS Code's Live Server extension. No build tools required.

## Publish to GitHub Pages

1. Create a GitHub repository and upload `index.html`, `style.css`, and `script.js` to its root.
2. In repository Settings → Pages, select **Deploy from a branch**, `main`, `/ (root)`.
3. Open the generated GitHub Pages URL.

The app uses hash routes (`#/shop`, `#/recipes`, etc.) so refreshes work on static hosting.

## Features

- Seven bilingual sections (EN default, neutral Latin American Spanish).
- Responsive layouts and accessible navigation controls.
- Conceptual product catalog, coffee options, and bag in localStorage.
- Recipe steps with sessionStorage progress and cup scaling.
- Demo-only contact and newsletter forms, no data transmission.
- Product Quick View and menu details modal.

## Known limitations / next production tasks

- Unsplash-hosted photographs are temporary editorial references; replace with approved licensed brand images and custom packaging photography.
- The `coficito.` wordmark uses Manrope with CSS optical spacing; final custom vector artwork and `co.` favicon are pending.
- Coffee recipe ratios/timings and illustrative menu ingredients require editorial review before release.
- Allergens are not verified and must not be presented as food safety information.
- No actual checkout, orders, subscriptions, or operating cafe address.
- Test keyboard navigation, screen readers, performance, and device-specific layouts before launch.
- Demo bag is persisted locally; forms never send or store submitted data.
