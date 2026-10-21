
"use strict";

/* ==========================================================
   COFICITO — VISIT US I18N
   English / Español
   BEMA Studios
   ========================================================== */

(() => {
  const copy = {
    en: {
      "hero-eyebrow": "THE WORLD OF COFICITO",
      "hero-title": [
        "Your little corner",
        "of ",
        "comfort."
      ],
      "hero-description": "Imagined in Round Rock, Texas.",

      "notice-label": "CONCEPT SPACE",
      "notice-description":
        "A concept café by BEMA Studios. Not an operating location.",

      "welcome-eyebrow": "01 / WELCOME TO COFICITO",
      "welcome-title": [
        "A place to",
        "",
        "feel at home."
      ],
      "welcome-p1":
        "A little warmth. A little quiet. A place imagined for slow mornings, familiar faces and coffee worth savoring.",
      "welcome-p2":
        "Nothing complicated. Just thoughtful details and moments that feel like yours.",

      "space-eyebrow": "02 / THE SPACE",
      "space-title": [
        "A space",
        "to ",
        "stay."
      ],
      "space-description":
        "Warm wood, soft light and the kind of atmosphere that invites you to linger.",

      "gallery-one": "01 / A LITTLE ROOM TO SLOW DOWN",
      "gallery-two": "02 / THOUGHTFUL DETAILS",
      "gallery-three": "03 / A MOMENT OF QUIET",

      "rituals-eyebrow": "03 / MADE FOR LITTLE RITUALS",
      "rituals-title": [
        "The little things",
        "",
        "matter most."
      ],
      "rituals-p1":
        "The first sip. A familiar conversation. A few extra minutes with nowhere else to be.",
      "rituals-p2":
        "Coficito is imagined around the beauty of everyday rituals.",

      "atmosphere-eyebrow": "04 / THE ATMOSPHERE",
      "atmosphere-title": [
        "Soft mornings.",
        "Warm cups.",
        "Lovely company."
      ],

      "detail-one-title": "Natural light",
      "detail-one-description":
        "Gentle mornings and an unhurried feeling.",

      "detail-two-title": "Thoughtful textures",
      "detail-two-description":
        "Oak, ceramics and quiet earthy tones.",

      "detail-three-title": "Everyday comfort",
      "detail-three-description":
        "A little space for moments that matter.",

      "closing-eyebrow": "05 / EXPLORE THE RITUAL",
      "closing-title": [
        "The feeling starts",
        "with a ",
        "little cup."
      ],
      "closing-shop": "Explore Our Coffee ↗",
      "closing-food": "Food & Brunch ↗",
      "closing-disclaimer":
        "Coficito is a fictional brand and café concept, created as a design project by BEMA Studios.",

      "footer-tagline": "A little coffee. A lot of feeling.",
      "footer-one":
        "Coficito. · A little coffee. A lot of feeling.",
      "footer-two":
        "Fictional concept café · Round Rock, Texas",
      "footer-three":
        "A brand concept by BEMA Studios."
    },

    es: {
      "hero-eyebrow": "EL MUNDO DE COFICITO",
      "hero-title": [
        "Tu pequeño rincón",
        "de ",
        "tranquilidad."
      ],
      "hero-description": "Imaginado en Round Rock, Texas.",

      "notice-label": "ESPACIO CONCEPTUAL",
      "notice-description":
        "Una cafetería conceptual de BEMA Studios. No es un establecimiento en funcionamiento.",

      "welcome-eyebrow": "01 / BIENVENIDO A COFICITO",
      "welcome-title": [
        "Un lugar para",
        "",
        "sentirte en casa."
      ],
      "welcome-p1":
        "Un poquito de calidez. Un poquito de calma. Un lugar imaginado para mañanas sin apuro, caras conocidas y café para saborear.",
      "welcome-p2":
        "Nada complicado. Solo detalles pensados con cariño y momentos que se sienten tuyos.",

      "space-eyebrow": "02 / NUESTRO ESPACIO",
      "space-title": [
        "Un lugar",
        "para ",
        "quedarte."
      ],
      "space-description":
        "Madera cálida, luz suave y un ambiente que te invita a quedarte un ratito más.",

      "gallery-one": "01 / UN RINCÓN PARA BAJAR UN CAMBIO",
      "gallery-two": "02 / DETALLES CON INTENCIÓN",
      "gallery-three": "03 / UN MOMENTO DE CALMA",

      "rituals-eyebrow": "03 / HECHO PARA PEQUEÑOS RITUALES",
      "rituals-title": [
        "Las pequeñas cosas",
        "",
        "son las que importan."
      ],
      "rituals-p1":
        "El primer sorbo. Una charla conocida. Unos minutos extra sin tener que estar en otro lugar.",
      "rituals-p2":
        "Coficito nace de la belleza de los pequeños rituales cotidianos.",

      "atmosphere-eyebrow": "04 / EL AMBIENTE",
      "atmosphere-title": [
        "Mañanas tranquilas.",
        "Tazas calentitas.",
        "Linda compañía."
      ],

      "detail-one-title": "Luz natural",
      "detail-one-description":
        "Mañanas suaves y una sensación de calma.",

      "detail-two-title": "Texturas con intención",
      "detail-two-description":
        "Roble, cerámica y tonos tierra que transmiten tranquilidad.",

      "detail-three-title": "Comodidad cotidiana",
      "detail-three-description":
        "Un pequeño espacio para los momentos que importan.",

      "closing-eyebrow": "05 / EXPLORÁ EL RITUAL",
      "closing-title": [
        "Todo comienza",
        "con una ",
        "tacita de café."
      ],
      "closing-shop": "Explorá nuestros cafés ↗",
      "closing-food": "Comida y brunch ↗",
      "closing-disclaimer":
        "Coficito es una marca y cafetería ficticia, creada como proyecto de diseño por BEMA Studios.",

      "footer-tagline": "Un poco de café. Muchas emociones.",
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
      `[data-visit="${key}"]`
    );

    if (element) {
      element.textContent = value;
    }
  }

  function setEditorialHeading(key, parts) {
    const element = document.querySelector(
      `[data-visit="${key}"]`
    );

    if (!element) return;

    const [firstLine, secondPrefix, accent] = parts;
    const em = document.createElement("em");

    em.textContent = accent;

    element.replaceChildren(
      document.createTextNode(firstLine),
      document.createElement("br"),
      document.createTextNode(secondPrefix),
      em
    );
  }

  function setAtmosphereHeading(parts) {
    const element = document.querySelector(
      '[data-visit="atmosphere-title"]'
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

  function applyTranslations() {
    const language = getLanguage();
    const data = copy[language];

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "string") {
        setText(key, value);
      }
    });

    [
      "hero-title",
      "welcome-title",
      "space-title",
      "rituals-title",
      "closing-title"
    ].forEach(key => {
      setEditorialHeading(key, data[key]);
    });

    setAtmosphereHeading(data["atmosphere-title"]);

    document.title = language === "es"
      ? "Visítanos — Coficito."
      : "Visit Us — Coficito.";

    const description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.content = language === "es"
        ? "Descubrí el mundo imaginario de Coficito, una cafetería conceptual ficticia ubicada en Round Rock, Texas."
        : "Step inside the imagined world of Coficito, a fictional specialty coffee concept set in Round Rock, Texas.";
    }

    const notice = document.querySelector(
      ".visit-concept-notice"
    );

    if (notice) {
      notice.setAttribute(
        "aria-label",
        language === "es"
          ? "Aviso de cafetería conceptual"
          : "Concept café disclosure"
      );
    }

    const galleryAlt = {
      en: [
        "Warm café interior with natural light and wood finishes",
        "Conceptual café seating and interior architecture",
        "Coffee and warm café details",
        "Warm minimalist café atmosphere",
        "Coffee being enjoyed in a warm setting"
      ],
      es: [
        "Interior de cafetería cálido con luz natural y acabados de madera",
        "Asientos y arquitectura interior de una cafetería conceptual",
        "Café y detalles cálidos de una cafetería",
        "Ambiente cálido y minimalista de cafetería",
        "Café disfrutado en un ambiente acogedor"
      ]
    };

    const images = document.querySelectorAll(
      ".visit-hero-image img, .visit-gallery img, .visit-rituals-image img"
    );

    images.forEach((image, index) => {
      if (galleryAlt[language][index]) {
        image.alt = galleryAlt[language][index];
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

  window.CoficitoVisitI18n = {
    getLanguage,
    translate: applyTranslations
  };
})();
