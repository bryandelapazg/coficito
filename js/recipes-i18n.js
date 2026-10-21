
"use strict";

/* ==========================================================
   COFICITO — RECIPES I18N
   English / Español
   BEMA Studios
   ========================================================== */

(() => {

  const translations = {
    en: {
      "hero-eyebrow": "THE BREW JOURNAL",
      "hero-title": [
        "Make a little",
        "moment."
      ],
      "hero-description":
        "Four ways to slow down and make something lovely.",
      "hero-link": "Explore the rituals ↘",

      "intro-eyebrow": "01 / THE LITTLE GUIDE",
      "intro-title": [
        "Every cup",
        "has a",
        "story."
      ],
      "intro-description":
        "Choose your favorite brewing method, adjust your cups, and follow along at your own pace.",

      "pairing": "PAIR IT WITH",
      "workspace-eyebrow": "YOUR LITTLE RITUAL",
      "workspace-title": [
        "Let's make",
        "coffee."
      ],
      "cups-title": "How many cups?",
      "cups-description": "Adjust your ingredients.",
      "progress-title": "Your progress",
      "reset": "Reset steps ↺",
      "disclaimer":
        "Illustrative brewing guides for a fictional brand. Adjust recipes to your equipment and preferences.",

      "ending-eyebrow": "A LITTLE MORE TO EXPLORE",
      "ending-title": [
        "Good coffee.",
        "Good little moments."
      ],
      "ending-recipes": "All Recipes ↗",
      "ending-shop": "Explore Our Coffee ↗",

      "footer-tagline": "A little coffee. A lot of feeling.",
      "footer-one": "Coficito. · A little coffee. A lot of feeling.",
      "footer-two": "Fictional concept café · Round Rock, Texas",
      "footer-three": "A brand concept by BEMA Studios.",

      methods: {
        v60: "V60 Pour Over",
        french: "French Press",
        aeropress: "AeroPress",
        espresso: "Espresso"
      },

      aria: {
        minus: "Decrease cups",
        plus: "Increase cups",
        cups: "Number of cups",
        menu: "Open menu",
        shop: "Explore the shop",
        experience: "Interactive coffee brewing guides",
        selector: "Choose brewing method",
        progress: "Recipe completion"
      }
    },

    es: {
      "hero-eyebrow": "EL DIARIO DEL CAFÉ",
      "hero-title": [
        "Creá un pequeño",
        "momento."
      ],
      "hero-description":
        "Cuatro formas de bajar un cambio y preparar algo especial.",
      "hero-link": "Explorá los rituales ↘",

      "intro-eyebrow": "01 / NUESTRA PEQUEÑA GUÍA",
      "intro-title": [
        "Cada taza",
        "tiene una",
        "historia."
      ],
      "intro-description":
        "Elegí tu método favorito, ajustá la cantidad de tazas y seguí cada paso a tu ritmo.",

      "pairing": "COMBINALO CON",
      "workspace-eyebrow": "TU PEQUEÑO RITUAL",
      "workspace-title": [
        "Preparemos un",
        "cafecito."
      ],
      "cups-title": "¿Cuántas tazas?",
      "cups-description": "Ajustá los ingredientes.",
      "progress-title": "Tu progreso",
      "reset": "Reiniciar pasos ↺",
      "disclaimer":
        "Guías de preparación ilustrativas para una marca ficticia. Adaptá las recetas a tu equipo y tus preferencias.",

      "ending-eyebrow": "UN POQUITO MÁS PARA DESCUBRIR",
      "ending-title": [
        "Buen café.",
        "Lindos momentos."
      ],
      "ending-recipes": "Todas las recetas ↗",
      "ending-shop": "Explorá nuestros cafés ↗",

      "footer-tagline": "Un poco de café. Muchas emociones.",
      "footer-one": "Coficito. · Un poco de café. Muchas emociones.",
      "footer-two": "Cafetería conceptual ficticia · Round Rock, Texas",
      "footer-three": "Un concepto de marca de BEMA Studios.",

      methods: {
        v60: "V60 filtrado",
        french: "Prensa francesa",
        aeropress: "AeroPress",
        espresso: "Espresso"
      },

      aria: {
        minus: "Disminuir tazas",
        plus: "Aumentar tazas",
        cups: "Número de tazas",
        menu: "Abrir menú",
        shop: "Explorar la tienda",
        experience: "Guías interactivas para preparar café",
        selector: "Elegir método de preparación",
        progress: "Progreso de la receta"
      }
    }
  };

  function getLanguage() {
    if (window.CoficitoI18n?.getLanguage) {
      return window.CoficitoI18n.getLanguage() === "es"
        ? "es"
        : "en";
    }

    return document.documentElement.lang === "es"
      ? "es"
      : "en";
  }

  function setText(key, value) {
    const element = document.querySelector(
      `[data-recipes="${key}"]`
    );

    if (element) {
      element.textContent = value;
    }
  }

  function setTwoLineHeading(key, first, accent) {
    const element = document.querySelector(
      `[data-recipes="${key}"]`
    );

    if (!element) return;

    const em = document.createElement("em");
    em.textContent = accent;

    element.replaceChildren(
      document.createTextNode(first),
      document.createElement("br"),
      em
    );
  }

  function setIntroHeading(parts) {
    const element = document.querySelector(
      '[data-recipes="intro-title"]'
    );

    if (!element) return;

    const em = document.createElement("em");
    em.textContent = parts[2];

    element.replaceChildren(
      document.createTextNode(parts[0]),
      document.createElement("br"),
      document.createTextNode(parts[1] + " "),
      em
    );
  }

  function setInlineHeading(key, first, accent) {
    const element = document.querySelector(
      `[data-recipes="${key}"]`
    );

    if (!element) return;

    const em = document.createElement("em");
    em.textContent = accent;

    element.replaceChildren(
      document.createTextNode(first + " "),
      em
    );
  }

  function translateMethods(data) {
    document.querySelectorAll(
      ".recipe-method"
    ).forEach(button => {
      const id = button.dataset.recipe;
      const name = data.methods[id];

      if (!name) return;

      let textNode = [
        ...button.childNodes
      ].find(node => node.nodeType === Node.TEXT_NODE);

      if (textNode) {
        textNode.textContent = " " + name;
      } else {
        button.append(
          document.createTextNode(" " + name)
        );
      }
    });
  }

  function translateAccessibility(data) {
    const selectors = {
      "#cups-minus": data.aria.minus,
      "#cups-plus": data.aria.plus,
      "#cups-value": data.aria.cups,
      ".recipes-menu-toggle": data.aria.menu,
      ".recipes-shop-link": data.aria.shop,
      ".recipes-experience": data.aria.experience,
      ".recipes-selector": data.aria.selector,
      "#recipe-progress-bar": data.aria.progress
    };

    Object.entries(selectors).forEach(
      ([selector, label]) => {
        const element = document.querySelector(selector);
        if (element) {
          element.setAttribute("aria-label", label);
        }
      }
    );
  }

  function applyTranslations() {
    const language = getLanguage();
    const data = translations[language];

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "string") {
        setText(key, value);
      }
    });

    setTwoLineHeading(
      "hero-title",
      ...data["hero-title"]
    );

    setIntroHeading(data["intro-title"]);

    setInlineHeading(
      "workspace-title",
      ...data["workspace-title"]
    );

    setTwoLineHeading(
      "ending-title",
      ...data["ending-title"]
    );

    translateMethods(data);
    translateAccessibility(data);

    document.title = language === "es"
      ? "Recetas — Coficito."
      : "Recipes — Coficito.";
  }

  document.addEventListener(
    "coficito:languagechange",
    applyTranslations
  );

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      applyTranslations,
      { once: true }
    );
  } else {
    applyTranslations();
  }

  window.CoficitoRecipesI18n = {
    getLanguage,
    translate() {
      applyTranslations();
    }
  };

})();
