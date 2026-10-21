
/* ==========================================================
   COFICITO — SHOP TRANSLATION INTEGRATION
   BEMA Studios
   ========================================================== */

(() => {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  const bindings = [
    [".shop-hero .eyebrow", "shop.eyebrow"],
    [".shop-hero p", "shop.subtitle"],

    ["#coffee-beans .eyebrow", "shop.coffee.eyebrow"],
    ["#coffee-beans .chapter-description", "shop.coffee.description"],

    ["#essentials .eyebrow", "shop.essentials.eyebrow"],
    ["#essentials .chapter-description", "shop.essentials.description"],

    ["#merch .eyebrow", "shop.merch.eyebrow"],
    ["#merch .chapter-description", "shop.merch.description"],

    [".shop-closing .eyebrow", "shop.closing.eyebrow"],
    [".shop-closing p", "shop.closing.description"],
    [".shop-closing a", "common.back"],

    ["#cart-title", "cart.title"],
    [".cart-footer .concept-note", "cart.disclaimer"],
    [".quick-view-content .concept-note", "cart.productDisclaimer"]
  ];

  function getTranslator() {
    return window.CoficitoI18n || null;
  }

  function applyText(element, key, t) {
    if (!element) return;
    element.textContent = t(key);
  }

  function translateEditorialTitle(selector, key, t) {
    const element = $(selector);
    if (!element) return;

    const text = t(key);
    const lastSpace = text.lastIndexOf(" ");

    if (lastSpace === -1) {
      element.textContent = text;
      return;
    }

    const firstPart = text.slice(0, lastSpace);
    const lastPart = text.slice(lastSpace + 1);

    element.replaceChildren(
      document.createTextNode(firstPart + " ")
    );

    const emphasis = document.createElement("em");
    emphasis.textContent = lastPart;

    element.appendChild(emphasis);
  }

  function translateProductCards(t) {
    $$("[data-product]").forEach((card) => {
      const id = card.dataset.product;

      const title = card.querySelector("h3");
      const description = card.querySelector("p");
      const button = card.querySelector(".quick-view-button");

      applyText(title, `product.${id}.name`, t);
      applyText(description, `product.${id}.short`, t);
      applyText(button, "common.quickview", t);
    });
  }

  function translateNavigation(t) {
    const navKeys = [
      "home",
      "shop",
      "food",
      "recipes",
      "visit",
      "story",
      "contact"
    ];

    const hrefs = [
      "index.html",
      "shop.html",
      "food.html",
      "recipes.html",
      "visit.html",
      "story.html",
      "contact.html"
    ];

    $$(".desktop-nav a, .mobile-nav a, .footer-links a")
      .forEach((link) => {
        const href = link.getAttribute("href") || "";

        const index = hrefs.findIndex((item) =>
          href.endsWith(item)
        );

        if (index !== -1) {
          applyText(link, `nav.${navKeys[index]}`, t);
        }
      });
  }

  function translateQuickViewForm(t) {
    const weightLabel = document.querySelector(
      'label[for="product-weight"]'
    );

    const grindLabel = document.querySelector(
      'label[for="product-grind"]'
    );

    const quantityLabel = document.querySelector(
      'label[for="product-quantity"]'
    );

    applyText(weightLabel, "common.weight", t);
    applyText(grindLabel, "common.grind", t);
    applyText(quantityLabel, "common.quantity", t);

    const grindSelect = $("#product-grind");

    if (grindSelect) {
      const optionKeys = {
        "Whole Bean": "grind.whole",
        "Espresso": "grind.espresso",
        "Pour Over": "grind.pourover",
        "French Press": "grind.frenchpress"
      };

      Array.from(grindSelect.options).forEach((option) => {
        const key = optionKeys[option.value];

        if (key) {
          option.textContent = t(key);
        }
      });
    }

    const addButton = document.querySelector(
      '#quick-view-form button[type="submit"]'
    );

    applyText(addButton, "common.add", t);
  }

  function translateShop() {
    const i18n = getTranslator();
    if (!i18n) return;

    const t = i18n.translate;

    bindings.forEach(([selector, key]) => {
      applyText($(selector), key, t);
    });

    translateEditorialTitle(
      ".shop-hero h1",
      "shop.title",
      t
    );

    translateEditorialTitle(
      "#coffee-title",
      "shop.coffee.title",
      t
    );

    translateEditorialTitle(
      "#essentials-title",
      "shop.essentials.title",
      t
    );

    translateEditorialTitle(
      "#merch-title",
      "shop.merch.title",
      t
    );

    translateEditorialTitle(
      ".shop-closing h2",
      "shop.closing.title",
      t
    );

    translateProductCards(t);
    translateNavigation(t);
    translateQuickViewForm(t);
  }

  document.addEventListener(
    "coficito:languagechange",
    translateShop
  );

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      translateShop,
      { once: true }
    );
  } else {
    translateShop();
  }
})();
