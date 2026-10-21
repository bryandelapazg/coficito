
/* ==========================================================
   COFICITO — HOME BILINGUAL CONTENT
   English / Español
   BEMA Studios
   ========================================================== */

(() => {
  "use strict";

  const STORAGE_KEY = "coficito-language";

  const content = {
    en: {
      /* HERO */
      "hero.eyebrow": "COFICITO / DAILY RITUALS",
      "hero.title": "Your daily",
      "hero.titleAccent": "little ritual.",
      "hero.button": "Explore Our Coffee",
      "hero.bottomLeft": "01 / THE LITTLE RITUAL",
      "hero.bottomRight": "SCROLL TO EXPLORE ↓",

      /* FEATURED COFFEE */
      "coffee.eyebrow": "THE COFFEE COLLECTION",
      "coffee.title": "Little cups.",
      "coffee.titleAccent": "Big feelings.",
      "coffee.link": "Explore all coffee",
      "coffee.colombia.name": "Colombia Huila",
      "coffee.colombia.notes":
        "Caramel · Citrus · Milk chocolate",
      "coffee.ethiopia.name": "Ethiopia Sidama",
      "coffee.ethiopia.notes":
        "Floral · Red berries · Black tea",
      "coffee.brazil.name": "Brazil Cerrado",
      "coffee.brazil.notes":
        "Dark chocolate · Hazelnut · Brown sugar",
      "coffee.from": "From",

      /* BRUNCH */
      "brunch.eyebrow": "THE BRUNCH CLUB",
      "brunch.title": "A little brunch.",
      "brunch.accent": "A lovely day.",
      "brunch.link": "Discover Food & Brunch ↗",

      /* OUR RITUAL */
      "ritual.eyebrow": "A MOMENT FOR YOURSELF",
      "ritual.title": "Slow down.",
      "ritual.accent": "Stay a little.",
      "ritual.description":
        "Some moments are worth savoring.",
      "ritual.link": "Our Story ↗",

      /* OUR SPACE */
      "space.eyebrow": "OUR LITTLE SPACE",
      "space.title": "A little corner",
      "space.accent": "of comfort.",
      "space.description":
        "A quiet space imagined for slow mornings, good coffee and everyday moments.",
      "space.disclaimer":
        "A concept café imagined in Round Rock, Texas. Not an operating location.",
      "space.link": "Discover Our Space ↗",

      /* BREW JOURNAL */
      "journal.eyebrow": "THE BREW JOURNAL",
      "journal.title": "Made slowly.",
      "journal.accent": "Enjoyed fully.",
      "journal.link": "Explore Recipes ↗",
      "journal.guide1": "BREW GUIDE / 01",
      "journal.guide2": "BREW GUIDE / 02",
      "journal.v60": "The V60 Ritual",
      "journal.french": "The French Press Ritual",
      "journal.guideLink": "Explore the guide ↗",

      /* NEWSLETTER */
      "newsletter.eyebrow": "THE LITTLE LETTER",
      "newsletter.title": "A little note,",
      "newsletter.accent": "now and then.",
      "newsletter.description":
        "Coffee notes, little stories and lovely things.",
      "newsletter.disclaimer":
        "Concept newsletter only. No emails are sent or stored. Any welcome offer is illustrative and cannot be redeemed.",
      "newsletter.label": "Email address",
      "newsletter.placeholder": "Your email address",
      "newsletter.button": "Join the Letter ↗",

      /* FOOTER */
      "footer.tagline":
        "A little coffee. A lot of feeling.",
      "footer.brandline":
        "Coficito. · A little coffee. A lot of feeling.",
      "footer.location":
        "Fictional concept café · Round Rock, Texas",
      "footer.credit":
        "A brand concept by BEMA Studios.",

      /* ACCESSIBILITY */
      "a11y.bag": "Shopping bag — coming soon",
      "a11y.menu": "Open navigation",
      "a11y.video": "Hero video controls",
      "a11y.pause": "Pause videos",
      "a11y.scene": "Play scene"
    },

    es: {
      /* HERO */
      "hero.eyebrow": "COFICITO / RITUALES COTIDIANOS",
      "hero.title": "Tu pequeño",
      "hero.titleAccent": "ritual diario.",
      "hero.button": "Descubrí nuestros cafés",
      "hero.bottomLeft": "01 / EL PEQUEÑO RITUAL",
      "hero.bottomRight": "DESLIZÁ PARA EXPLORAR ↓",

      /* FEATURED COFFEE */
      "coffee.eyebrow": "LA COLECCIÓN DE CAFÉ",
      "coffee.title": "Pequeñas tazas.",
      "coffee.titleAccent": "Grandes emociones.",
      "coffee.link": "Explorá todos nuestros cafés",
      "coffee.colombia.name": "Colombia Huila",
      "coffee.colombia.notes":
        "Caramelo · Cítricos · Chocolate con leche",
      "coffee.ethiopia.name": "Etiopía Sidama",
      "coffee.ethiopia.notes":
        "Flores · Frutos rojos · Té negro",
      "coffee.brazil.name": "Brasil Cerrado",
      "coffee.brazil.notes":
        "Chocolate amargo · Avellanas · Azúcar morena",
      "coffee.from": "Desde",

      /* BRUNCH */
      "brunch.eyebrow": "EL CLUB DEL BRUNCH",
      "brunch.title": "Un rico brunch.",
      "brunch.accent": "Un día especial.",
      "brunch.link": "Descubrí nuestro brunch ↗",

      /* OUR RITUAL */
      "ritual.eyebrow": "UN MOMENTO PARA VOS",
      "ritual.title": "Bajá un cambio.",
      "ritual.accent": "Quedate un ratito.",
      "ritual.description":
        "Hay momentos que merecen disfrutarse sin apuro.",
      "ritual.link": "Nuestra historia ↗",

      /* OUR SPACE */
      "space.eyebrow": "NUESTRO PEQUEÑO ESPACIO",
      "space.title": "Un rinconcito",
      "space.accent": "para sentirte bien.",
      "space.description":
        "Un espacio imaginado para mañanas tranquilas, buen café y momentos cotidianos.",
      "space.disclaimer":
        "Una cafetería conceptual imaginada en Round Rock, Texas. No es un local en funcionamiento.",
      "space.link": "Descubrí nuestro espacio ↗",

      /* BREW JOURNAL */
      "journal.eyebrow": "EL DIARIO DEL CAFÉ",
      "journal.title": "Preparado con calma.",
      "journal.accent": "Disfrutado al máximo.",
      "journal.link": "Explorá las recetas ↗",
      "journal.guide1": "GUÍA DE PREPARACIÓN / 01",
      "journal.guide2": "GUÍA DE PREPARACIÓN / 02",
      "journal.v60": "El ritual del V60",
      "journal.french": "El ritual de la prensa francesa",
      "journal.guideLink": "Explorá la guía ↗",

      /* NEWSLETTER */
      "newsletter.eyebrow": "NUESTRAS PEQUEÑAS NOTAS",
      "newsletter.title": "Un mensajito,",
      "newsletter.accent": "de vez en cuando.",
      "newsletter.description":
        "Novedades de café, pequeñas historias y cosas lindas.",
      "newsletter.disclaimer":
        "Newsletter conceptual. No se envían ni almacenan correos. Cualquier oferta de bienvenida es ilustrativa y no puede canjearse.",
      "newsletter.label": "Correo electrónico",
      "newsletter.placeholder": "Tu correo electrónico",
      "newsletter.button": "Sumate a nuestras notas ↗",

      /* FOOTER */
      "footer.tagline":
        "Un poco de café. Muchas emociones.",
      "footer.brandline":
        "Coficito. · Un poco de café. Muchas emociones.",
      "footer.location":
        "Cafetería conceptual ficticia · Round Rock, Texas",
      "footer.credit":
        "Un concepto de marca de BEMA Studios.",

      /* ACCESSIBILITY */
      "a11y.bag": "Bolsa de compras — próximamente",
      "a11y.menu": "Abrir navegación",
      "a11y.video": "Controles del video principal",
      "a11y.pause": "Pausar videos",
      "a11y.scene": "Reproducir escena"
    }
  };

  /* ========================================================
     HELPERS
     ======================================================== */

  function getLanguage() {
    const current = document.documentElement.lang;

    if (current === "en" || current === "es") {
      return current;
    }

    try {
      return localStorage.getItem(STORAGE_KEY) === "es"
        ? "es"
        : "en";
    } catch {
      return "en";
    }
  }

  function t(key, language) {
    return content[language]?.[key] ??
      content.en[key] ??
      key;
  }

  function setText(selector, key, language) {
    const element = document.querySelector(selector);

    if (!element) return;

    element.textContent = t(key, language);
  }

  function setAllText(selector, key, language) {
    document.querySelectorAll(selector).forEach(element => {
      element.textContent = t(key, language);
    });
  }

  function setAttribute(selector, attribute, key, language) {
    document.querySelectorAll(selector).forEach(element => {
      element.setAttribute(
        attribute,
        t(key, language)
      );
    });
  }

  /* ========================================================
     HERO
     ======================================================== */

  function translateHero(language) {
    setText(
      ".hero-eyebrow",
      "hero.eyebrow",
      language
    );

    setText(
      ".coficito-hero-subtitle [data-i18n='hero.title']",
      "hero.title",
      language
    );

    setText(
      ".coficito-hero-subtitle [data-i18n='hero.titleAccent']",
      "hero.titleAccent",
      language
    );

    setText(
      ".coficito-video-button [data-i18n='hero.button']",
      "hero.button",
      language
    );

    const bottom = document.querySelector(
      ".coficito-video-bottom"
    );

    if (bottom) {
      const directSpans = Array.from(
        bottom.children
      ).filter(element => element.tagName === "SPAN");

      if (directSpans[0]) {
        directSpans[0].textContent =
          t("hero.bottomLeft", language);
      }

      if (directSpans[1]) {
        directSpans[1].textContent =
          t("hero.bottomRight", language);
      }
    }

    setAttribute(
      ".coficito-video-controls",
      "aria-label",
      "a11y.video",
      language
    );

    setAttribute(
      ".coficito-video-pause",
      "aria-label",
      "a11y.pause",
      language
    );

    document.querySelectorAll(
      ".coficito-scene-dot"
    ).forEach((button, index) => {
      button.setAttribute(
        "aria-label",
        `${t("a11y.scene", language)} ${index + 1}`
      );
    });
  }

  /* ========================================================
     FEATURED COFFEE
     ======================================================== */

  function translateCoffee(language) {
    const keys = [
      ["coffee.eyebrow", "coffee.eyebrow"],
      ["coffee.title", "coffee.title"],
      ["coffee.titleAccent", "coffee.titleAccent"],
      ["coffee.link", "coffee.link"],
      ["coffee.from", "coffee.from"],
      ["coffee.colombia.notes", "coffee.colombia.notes"],
      ["coffee.ethiopia.notes", "coffee.ethiopia.notes"],
      ["coffee.brazil.notes", "coffee.brazil.notes"]
    ];

    keys.forEach(([attribute, key]) => {
      setAllText(
        `.featured-section [data-i18n="${attribute}"]`,
        key,
        language
      );
    });

    const names = [
      "coffee.colombia.name",
      "coffee.ethiopia.name",
      "coffee.brazil.name"
    ];

    document.querySelectorAll(
      ".featured-section .product-card h3"
    ).forEach((heading, index) => {
      if (names[index]) {
        heading.textContent = t(names[index], language);
      }
    });
  }

  /* ========================================================
     BRUNCH
     ======================================================== */

  function translateBrunch(language) {
    setText(
      ".brunch-section .eyebrow",
      "brunch.eyebrow",
      language
    );

    const heading = document.querySelector(
      "#brunch-title"
    );

    if (heading) {
      heading.replaceChildren(
        document.createTextNode(
          t("brunch.title", language)
        ),
        document.createElement("br")
      );

      const emphasis = document.createElement("em");
      emphasis.textContent = t("brunch.accent", language);
      heading.appendChild(emphasis);
    }

    setText(
      ".brunch-section .text-link",
      "brunch.link",
      language
    );
  }

  /* ========================================================
     OUR RITUAL
     ======================================================== */

  function translateRitual(language) {
    setText(
      ".ritual-section .eyebrow",
      "ritual.eyebrow",
      language
    );

    const heading = document.querySelector(
      "#ritual-title"
    );

    if (heading) {
      heading.replaceChildren(
        document.createTextNode(
          t("ritual.title", language)
        ),
        document.createElement("br")
      );

      const emphasis = document.createElement("em");
      emphasis.textContent = t("ritual.accent", language);
      heading.appendChild(emphasis);
    }

    setText(
      ".ritual-section p",
      "ritual.description",
      language
    );

    setText(
      ".ritual-section .button",
      "ritual.link",
      language
    );
  }

  /* ========================================================
     OUR SPACE
     ======================================================== */

  function translateSpace(language) {
    setText(
      ".space-content .eyebrow",
      "space.eyebrow",
      language
    );

    const heading = document.querySelector(
      "#space-title"
    );

    if (heading) {
      heading.replaceChildren(
        document.createTextNode(
          t("space.title", language)
        ),
        document.createElement("br")
      );

      const emphasis = document.createElement("em");
      emphasis.textContent = t("space.accent", language);
      heading.appendChild(emphasis);
    }

    setText(
      ".space-content > p:not(.concept-note)",
      "space.description",
      language
    );

    setText(
      ".space-content .concept-note",
      "space.disclaimer",
      language
    );

    setText(
      ".space-content .text-link",
      "space.link",
      language
    );
  }

  /* ========================================================
     BREW JOURNAL
     ======================================================== */

  function translateJournal(language) {
    setText(
      ".journal-section .section-heading .eyebrow",
      "journal.eyebrow",
      language
    );

    const heading = document.querySelector(
      "#journal-title"
    );

    if (heading) {
      heading.replaceChildren(
        document.createTextNode(
          t("journal.title", language)
        ),
        document.createElement("br")
      );

      const emphasis = document.createElement("em");
      emphasis.textContent = t("journal.accent", language);
      heading.appendChild(emphasis);
    }

    setText(
      ".journal-section .section-heading .text-link",
      "journal.link",
      language
    );

    const cards = document.querySelectorAll(
      ".journal-card"
    );

    cards.forEach((card, index) => {
      const eyebrow = card.querySelector(".eyebrow");
      const title = card.querySelector("h3");
      const link = card.querySelector(".text-link");

      if (eyebrow) {
        eyebrow.textContent = t(
          index === 0
            ? "journal.guide1"
            : "journal.guide2",
          language
        );
      }

      if (title) {
        title.textContent = t(
          index === 0
            ? "journal.v60"
            : "journal.french",
          language
        );
      }

      if (link) {
        link.textContent = t(
          "journal.guideLink",
          language
        );
      }
    });
  }

  /* ========================================================
     NEWSLETTER
     ======================================================== */

  function translateNewsletter(language) {
    setText(
      ".newsletter-section .eyebrow",
      "newsletter.eyebrow",
      language
    );

    const heading = document.querySelector(
      "#newsletter-title"
    );

    if (heading) {
      heading.replaceChildren(
        document.createTextNode(
          t("newsletter.title", language)
        ),
        document.createElement("br")
      );

      const emphasis = document.createElement("em");
      emphasis.textContent = t(
        "newsletter.accent",
        language
      );

      heading.appendChild(emphasis);
    }

    setText(
      ".newsletter-inner > p:not(.newsletter-disclaimer)",
      "newsletter.description",
      language
    );

    setText(
      ".newsletter-disclaimer",
      "newsletter.disclaimer",
      language
    );

    setText(
      'label[for="newsletter-email"]',
      "newsletter.label",
      language
    );

    const input = document.querySelector(
      "#newsletter-email"
    );

    if (input) {
      input.placeholder = t(
        "newsletter.placeholder",
        language
      );
    }

    setText(
      ".newsletter-form button[type='submit']",
      "newsletter.button",
      language
    );
  }

  /* ========================================================
     FOOTER
     ======================================================== */

  function translateFooter(language) {
    setText(
      ".footer-brand > p",
      "footer.tagline",
      language
    );

    const footerItems = document.querySelectorAll(
      ".footer-bottom > span"
    );

    const keys = [
      "footer.brandline",
      "footer.location",
      "footer.credit"
    ];

    footerItems.forEach((element, index) => {
      if (keys[index]) {
        element.textContent = t(
          keys[index],
          language
        );
      }
    });
  }

  /* ========================================================
     APPLY ALL HOME TRANSLATIONS
     ======================================================== */

  function translateHome() {
    const language = getLanguage();

    translateHero(language);
    translateCoffee(language);
    translateBrunch(language);
    translateRitual(language);
    translateSpace(language);
    translateJournal(language);
    translateNewsletter(language);
    translateFooter(language);

    setAttribute(
      ".menu-toggle",
      "aria-label",
      "a11y.menu",
      language
    );

    setAttribute(
      ".header-actions .icon-button[disabled]",
      "aria-label",
      "a11y.bag",
      language
    );

    setAttribute(
      ".header-actions .icon-button[disabled]",
      "title",
      "a11y.bag",
      language
    );
  }

  /* ========================================================
     INITIALIZE
     ======================================================== */

  document.addEventListener(
    "coficito:languagechange",
    translateHome
  );

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      translateHome,
      { once: true }
    );
  } else {
    translateHome();
  }

})();
