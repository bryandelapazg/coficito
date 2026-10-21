
"use strict";

/* ==========================================================
   COFICITO — OUR STORY I18N
   English / Español
   BEMA Studios
   ========================================================== */

(() => {

  const copy = {
    en: {
      "hero-eyebrow": "THE STORY OF COFICITO",
      "hero-title": [
        "Some moments",
        "deserve to last",
        "a little longer."
      ],
      "hero-description":
        "A little story about noticing the beauty in everyday moments.",

      "intro-eyebrow": "OUR LITTLE PHILOSOPHY",
      "intro-title": [
        "It was never",
        "just about ",
        "coffee."
      ],
      "intro-p1":
        "It is about the moments around it.",
      "intro-p2":
        "The warmth between your hands. The quiet before the day begins. The conversations you wish would last.",
      "intro-p3":
        "Coficito is a celebration of the little things.",

      "chapter-one-eyebrow": "01 / THE BEGINNING",
      "chapter-one-title": [
        "Every little thing",
        "begins ",
        "somewhere."
      ],
      "chapter-one-description":
        "Before the first sip, a moment of stillness.",
      "chapter-one-caption": "A MOMENT TO BEGIN",

      "chapter-two-eyebrow": "02 / THE DISCOVERY",
      "chapter-two-title": [
        "There's beauty",
        "in ",
        "noticing."
      ],
      "chapter-two-description":
        "The warmth. The aroma. The little things.",
      "chapter-two-caption": "A MOMENT TO NOTICE",

      "quote-eyebrow": "A LITTLE REMINDER",
      "quote": [
        "“The loveliest moments",
        "are often the ",
        "smallest.”"
      ],

      "chapter-three-eyebrow": "03 / THE CRAFT",
      "chapter-three-title": [
        "Care is a quiet",
        "kind of ",
        "love."
      ],
      "chapter-three-description":
        "Made with intention, enjoyed slowly.",
      "chapter-three-caption": "A MOMENT TO CREATE",

      "chapter-four-eyebrow": "04 / THE RITUAL",
      "chapter-four-title": [
        "A little moment,",
        "just ",
        "for you."
      ],
      "chapter-four-description":
        "Some moments are meant to be yours.",
      "chapter-four-caption": "A MOMENT TO ENJOY",

      "ending-eyebrow": "THE STORY CONTINUES",
      "ending-title": [
        "Your daily",
        "little ritual."
      ],
      "ending-description":
        "A little coffee. A lot of feeling.",
      "ending-shop": "Explore Our Coffee ↗",
      "ending-visit": "Discover Our Space ↗",
      "ending-disclaimer":
        "Coficito is a fictional brand and café concept developed by BEMA Studios.",

      "footer-tagline":
        "A little coffee. A lot of feeling.",
      "footer-one":
        "Coficito. · A little coffee. A lot of feeling.",
      "footer-two":
        "Fictional concept café · Round Rock, Texas",
      "footer-three":
        "A brand concept by BEMA Studios."
    },

    es: {
      "hero-eyebrow": "LA HISTORIA DE COFICITO",
      "hero-title": [
        "Hay momentos",
        "que merecen durar",
        "un poquito más."
      ],
      "hero-description":
        "Una pequeña historia sobre encontrar belleza en los momentos de todos los días.",

      "intro-eyebrow": "NUESTRA PEQUEÑA FILOSOFÍA",
      "intro-title": [
        "Nunca se trató",
        "solo del ",
        "café."
      ],
      "intro-p1":
        "Se trata de todo lo que sucede a su alrededor.",
      "intro-p2":
        "El calor de una taza entre tus manos. La calma antes de comenzar el día. Esas conversaciones que no querés que terminen.",
      "intro-p3":
        "Coficito celebra la belleza de las pequeñas cosas.",

      "chapter-one-eyebrow": "01 / EL COMIENZO",
      "chapter-one-title": [
        "Toda pequeña historia",
        "comienza en ",
        "algún lugar."
      ],
      "chapter-one-description":
        "Antes del primer sorbo, un instante de calma.",
      "chapter-one-caption": "UN MOMENTO PARA COMENZAR",

      "chapter-two-eyebrow": "02 / EL DESCUBRIMIENTO",
      "chapter-two-title": [
        "Hay belleza",
        "en ",
        "prestar atención."
      ],
      "chapter-two-description":
        "El calor. El aroma. Los pequeños detalles.",
      "chapter-two-caption": "UN MOMENTO PARA DESCUBRIR",

      "quote-eyebrow": "UN PEQUEÑO RECORDATORIO",
      "quote": [
        "“Los momentos más lindos",
        "suelen ser los más ",
        "pequeños.”"
      ],

      "chapter-three-eyebrow": "03 / EL ARTE DE HACER CAFÉ",
      "chapter-three-title": [
        "Cuidar también",
        "es una forma de ",
        "amar."
      ],
      "chapter-three-description":
        "Preparado con intención, disfrutado sin apuro.",
      "chapter-three-caption": "UN MOMENTO PARA CREAR",

      "chapter-four-eyebrow": "04 / EL RITUAL",
      "chapter-four-title": [
        "Un pequeño momento,",
        "solo ",
        "para vos."
      ],
      "chapter-four-description":
        "Hay momentos que merecen ser solo tuyos.",
      "chapter-four-caption": "UN MOMENTO PARA DISFRUTAR",

      "ending-eyebrow": "LA HISTORIA CONTINÚA",
      "ending-title": [
        "Tu pequeño",
        "ritual diario."
      ],
      "ending-description":
        "Un poco de café. Muchas emociones.",
      "ending-shop": "Explorá nuestros cafés ↗",
      "ending-visit": "Descubrí nuestro espacio ↗",
      "ending-disclaimer":
        "Coficito es una marca y cafetería ficticia desarrollada por BEMA Studios.",

      "footer-tagline":
        "Un poco de café. Muchas emociones.",
      "footer-one":
        "Coficito. · Un poco de café. Muchas emociones.",
      "footer-two":
        "Cafetería conceptual ficticia · Round Rock, Texas",
      "footer-three":
        "Un concepto de marca de BEMA Studios."
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
      `[data-story="${key}"]`
    );

    if (element) {
      element.textContent = value;
    }
  }

  function createEditorialHeading(key, parts) {
    const element = document.querySelector(
      `[data-story="${key}"]`
    );

    if (!element) return;

    const [first, prefix, accent] = parts;
    const em = document.createElement("em");

    em.textContent = accent;

    element.replaceChildren(
      document.createTextNode(first),
      document.createElement("br"),
      document.createTextNode(prefix),
      em
    );
  }

  function createThreeLineHeading(key, parts) {
    const element = document.querySelector(
      `[data-story="${key}"]`
    );

    if (!element) return;

    const em = document.createElement("em");
    em.textContent = parts[2];

    element.replaceChildren(
      document.createTextNode(parts[0]),
      document.createElement("br"),
      document.createTextNode(parts[1]),
      document.createElement("br"),
      em
    );
  }

  function createTwoLineHeading(key, parts) {
    const element = document.querySelector(
      `[data-story="${key}"]`
    );

    if (!element) return;

    const em = document.createElement("em");
    em.textContent = parts[1];

    element.replaceChildren(
      document.createTextNode(parts[0]),
      document.createElement("br"),
      em
    );
  }

  function applyTranslations() {
    const language = getLanguage();
    const data = copy[language];

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "string") {
        setText(key, value);
      }
    });

    createThreeLineHeading(
      "hero-title",
      data["hero-title"]
    );

    [
      "intro-title",
      "chapter-one-title",
      "chapter-two-title",
      "quote",
      "chapter-three-title",
      "chapter-four-title"
    ].forEach(key => {
      createEditorialHeading(key, data[key]);
    });

    createTwoLineHeading(
      "ending-title",
      data["ending-title"]
    );

    document.title = language === "es"
      ? "Nuestra historia — Coficito."
      : "Our Story — Coficito.";

    const description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.content = language === "es"
        ? "Descubrí los pequeños momentos, los detalles y los rituales cotidianos detrás de Coficito."
        : "Discover the little moments, thoughtful details and everyday rituals behind the Coficito brand concept.";
    }

    const imageAlt = {
      en: [
        "Warm coffee ritual in soft natural light",
        "Coffee and morning light",
        "Fresh coffee and the beauty of small details",
        "Thoughtful preparation of specialty coffee",
        "Cozy café setting for an everyday coffee ritual"
      ],
      es: [
        "Ritual de café con luz natural suave",
        "Café y luz de la mañana",
        "Café recién preparado y pequeños detalles",
        "Preparación cuidadosa de café de especialidad",
        "Ambiente acogedor para disfrutar del café cotidiano"
      ]
    };

    document.querySelectorAll(
      ".story-hero-image img, .story-chapter-image img"
    ).forEach((image, index) => {
      if (imageAlt[language][index]) {
        image.alt = imageAlt[language][index];
      }
    });
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

  window.CoficitoStoryI18n = {
    getLanguage,
    translate: applyTranslations
  };

})();
