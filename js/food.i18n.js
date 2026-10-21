
/* ==========================================================
   COFICITO — FOOD & BRUNCH LANGUAGE SYSTEM
   English / Español
   BEMA Studios
   ========================================================== */

(() => {
  "use strict";

  const copy = {
    en: {
      hero: [
        "COFICITO / FOOD & BRUNCH",
        "Little bites.",
        "Lovely moments.",
        "Something good for every little pause."
      ],
      categories: [
        "The Greens",
        "The Fluffy Ones",
        "The Crispy Ones",
        "The Coffee Bar"
      ],
      notice:
        "A fictional menu by BEMA Studios. Items, ingredients, allergens and prices are illustrative. No food orders are available.",
      chapters: {
        greens: [
          "01 / SOMETHING FRESH",
          "The",
          "Greens.",
          "Fresh, bright and made for slow mornings."
        ],
        fluffy: [
          "02 / SOFT & SWEET",
          "The",
          "Fluffy Ones.",
          "For the mornings that deserve a little extra."
        ],
        crispy: [
          "03 / GOLDEN & GOOD",
          "The",
          "Crispy Ones.",
          "Golden edges. Happy little mornings."
        ],
        "coffee-bar": [
          "04 / SOMETHING TO SIP",
          "The",
          "Coffee Bar.",
          "Your favorite little cup, just the way you like it."
        ]
      },
      discover: "Discover this dish ↗",
      products: {
        "classic-avo": [
          "The Classic Avo",
          "Sourdough, avocado and a little sunshine."
        ],
        "green-garden": [
          "The Green Garden",
          "A little more green, a lot more lovely."
        ],
        "smoked-avo": [
          "The Smoked Avo",
          "A familiar favorite with a savory twist."
        ],
        "cloud-nine": [
          "Cloud Nine",
          "Soft pancakes, berries and maple."
        ],
        "savory-stack": [
          "The Savory Stack",
          "A comforting little savory stack."
        ],
        "berry-waffle": [
          "Berry Little Waffle",
          "A golden waffle with berries and cream."
        ],
        "brunch-waffle": [
          "The Brunch Waffle",
          "The sweet-and-savory kind of morning."
        ],
        espresso: [
          "Espresso",
          "Small cup. Big character."
        ],
        cappuccino: [
          "Cappuccino",
          "Espresso, milk and a soft cloud of foam."
        ],
        "vanilla-latte": [
          "Vanilla Latte",
          "Soft, smooth and a little sweet."
        ],
        "iced-latte": [
          "Iced Latte",
          "A cool little coffee moment."
        ],
        "matcha-latte": [
          "Matcha Latte",
          "A gentle green ritual."
        ],
        "cold-brew": [
          "Cold Brew",
          "Slow brewed. Smoothly enjoyed."
        ]
      },
      closing: [
        "A LITTLE SOMETHING FOR HOME",
        "Take the ritual",
        "home.",
        "Meet Colombia Huila, a little everyday favorite.",
        "Explore Our Coffee ↗"
      ],
      modal: {
        ingredients: "What's inside",
        allergens: "Allergen information",
        pairing: "A LITTLE PAIRING",
        disclaimer:
          "Illustrative ingredients and allergens for a fictional menu. Not suitable for making dietary or allergy decisions. No food orders are available.",
        close: "Close food details"
      },
      footer: [
        "A little coffee. A lot of feeling.",
        "Coficito. · A little coffee. A lot of feeling.",
        "Fictional concept café · Round Rock, Texas",
        "A brand concept by BEMA Studios."
      ],
      a11y: {
        details: "View",
        detailsEnd: "details",
        bag: "Explore the concept shop",
        menu: "Open navigation"
      }
    },

    es: {
      hero: [
        "COFICITO / COMIDA Y BRUNCH",
        "Pequeños bocados.",
        "Lindos momentos.",
        "Algo rico para cada pequeña pausa."
      ],
      categories: [
        "Los fresquitos",
        "Los esponjositos",
        "Los crocantes",
        "La barra de café"
      ],
      notice:
        "Un menú ficticio creado por BEMA Studios. Los platos, ingredientes, alérgenos y precios son ilustrativos. No se aceptan pedidos de comida.",
      chapters: {
        greens: [
          "01 / ALGO FRESQUITO",
          "Los",
          "fresquitos.",
          "Frescos, llenos de sabor y perfectos para mañanas tranquilas."
        ],
        fluffy: [
          "02 / SUAVES Y DULCES",
          "Los",
          "esponjositos.",
          "Para esas mañanas que merecen algo especial."
        ],
        crispy: [
          "03 / DORADITOS Y RICOS",
          "Los",
          "crocantes.",
          "Doraditos por fuera. Felicidad en cada bocado."
        ],
        "coffee-bar": [
          "04 / ALGO PARA TOMAR",
          "La",
          "barra de café.",
          "Tu cafecito favorito, preparado como más te gusta."
        ]
      },
      discover: "Descubrí este plato ↗",
      products: {
        "classic-avo": [
          "La tostada clásica de palta",
          "Pan de masa madre, palta y un poquito de sol."
        ],
        "green-garden": [
          "El jardín verde",
          "Más verde, más frescura y mucho sabor."
        ],
        "smoked-avo": [
          "La tostada de palta ahumada",
          "Un clásico de siempre con un toque salado especial."
        ],
        "cloud-nine": [
          "En las nubes",
          "Panqueques esponjosos, frutos rojos y sirope de maple."
        ],
        "savory-stack": [
          "La torre salada",
          "Una deliciosa torre de panqueques salados."
        ],
        "berry-waffle": [
          "Waffle de frutos rojos",
          "Un waffle doradito con frutos rojos y crema."
        ],
        "brunch-waffle": [
          "El waffle del brunch",
          "Una combinación perfecta de dulce y salado."
        ],
        espresso: [
          "Espresso",
          "Tacita pequeña. Gran personalidad."
        ],
        cappuccino: [
          "Capuchino",
          "Espresso, leche y una suave nube de espuma."
        ],
        "vanilla-latte": [
          "Latte de vainilla",
          "Suave, cremoso y un poquito dulce."
        ],
        "iced-latte": [
          "Latte helado",
          "Un momento fresquito con café."
        ],
        "matcha-latte": [
          "Latte de matcha",
          "Un suave ritual verde."
        ],
        "cold-brew": [
          "Café de extracción en frío",
          "Preparado lentamente. Disfrutado con calma."
        ]
      },
      closing: [
        "UN POQUITO DE COFICITO EN CASA",
        "Llevate el ritual",
        "a casa.",
        "Conocé Colombia Huila, uno de nuestros favoritos para cada día.",
        "Explorá nuestros cafés ↗"
      ],
      modal: {
        ingredients: "Qué contiene",
        allergens: "Información sobre alérgenos",
        pairing: "UNA COMBINACIÓN ESPECIAL",
        disclaimer:
          "Ingredientes y alérgenos ilustrativos de un menú ficticio. Esta información no debe utilizarse para tomar decisiones alimentarias o sobre alergias. No se aceptan pedidos.",
        close: "Cerrar detalles del plato"
      },
      footer: [
        "Un poco de café. Muchas emociones.",
        "Coficito. · Un poco de café. Muchas emociones.",
        "Cafetería conceptual ficticia · Round Rock, Texas",
        "Un concepto de marca de BEMA Studios."
      ],
      a11y: {
        details: "Ver detalles de",
        detailsEnd: "",
        bag: "Explorar la tienda conceptual",
        menu: "Abrir navegación"
      }
    }
  };

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  function setAll(selector, value) {
    document.querySelectorAll(selector).forEach(element => {
      element.textContent = value;
    });
  }

  function setEditorialHeading(selector, first, accent) {
    const heading = document.querySelector(selector);
    if (!heading) return;

    heading.replaceChildren(
      document.createTextNode(first + " ")
    );

    const em = document.createElement("em");
    em.textContent = accent;
    heading.appendChild(em);
  }

  function translateNavigation(language) {
    const t = window.CoficitoI18n?.translate;
    if (!t) return;

    const navMap = {
      "index.html": "nav.home",
      "shop.html": "nav.shop",
      "food.html": "nav.food",
      "recipes.html": "nav.recipes",
      "visit.html": "nav.visit",
      "story.html": "nav.story",
      "contact.html": "nav.contact"
    };

    document.querySelectorAll(
      ".desktop-nav a, .mobile-nav a, .footer-links a"
    ).forEach(link => {
      const href = (link.getAttribute("href") || "")
        .split("#")[0]
        .split("?")[0];

      const filename = href.split("/").pop();
      const key = navMap[filename];

      if (key) {
        link.textContent = t(key, language);
      }
    });
  }

  function translateHero(data) {
    setText(
      ".food-hero-content .eyebrow",
      data.hero[0]
    );

    const heading = document.querySelector(
      "#food-hero-title"
    );

    if (heading) {
      heading.replaceChildren(
        document.createTextNode(data.hero[1]),
        document.createElement("br")
      );

      const em = document.createElement("em");
      em.textContent = data.hero[2];
      heading.appendChild(em);
    }

    setText(
      ".food-hero-content > p",
      data.hero[3]
    );
  }

  function translateCategories(data) {
    document.querySelectorAll(
      ".food-category-inner a"
    ).forEach((link, index) => {
      if (data.categories[index]) {
        link.textContent = data.categories[index];
      }
    });

    setText(
      ".food-concept-notice",
      data.notice
    );

    Object.entries(data.chapters).forEach(
      ([id, chapter]) => {
        const section = document.getElementById(id);
        if (!section) return;

        const eyebrow = section.querySelector(
          ".food-chapter-heading .eyebrow"
        );

        const heading = section.querySelector(
          ".food-chapter-heading h2"
        );

        const description = section.querySelector(
          ".food-chapter-heading > p"
        );

        if (eyebrow) eyebrow.textContent = chapter[0];

        if (heading) {
          heading.replaceChildren(
            document.createTextNode(chapter[1] + " ")
          );

          const em = document.createElement("em");
          em.textContent = chapter[2];
          heading.appendChild(em);
        }

        if (description) {
          description.textContent = chapter[3];
        }
      }
    );
  }

  function translateProducts(data) {
    document.querySelectorAll("[data-food]").forEach(
      button => {
        const id = button.dataset.food;
        const product = data.products[id];

        if (!product) return;

        const name = button.querySelector(
          ".food-card-name, .food-drink > span"
        );

        const description = button.querySelector(
          ".food-card-description, .food-drink > small"
        );

        const discover = button.querySelector(
          ".food-card-link"
        );

        if (name) name.textContent = product[0];

        if (description) {
          description.textContent = product[1];
        }

        if (discover) {
          discover.textContent = data.discover;
        }

        button.setAttribute(
          "aria-label",
          `${data.a11y.details} ${product[0]} ${data.a11y.detailsEnd}`.trim()
        );
      }
    );
  }

  function translateClosing(data) {
    setText(
      ".food-closing-copy .eyebrow",
      data.closing[0]
    );

    setEditorialHeading(
      "#food-closing-title",
      data.closing[1],
      data.closing[2]
    );

    setText(
      ".food-closing-copy > p",
      data.closing[3]
    );

    setText(
      ".food-closing-button",
      data.closing[4]
    );
  }

  function translateModalLabels(data) {
    const headings = document.querySelectorAll(
      ".food-modal-meta h3"
    );

    if (headings[0]) {
      headings[0].textContent =
        data.modal.ingredients;
    }

    if (headings[1]) {
      headings[1].textContent =
        data.modal.allergens;
    }

    setText(
      "#food-modal-pairing .eyebrow",
      data.modal.pairing
    );

    setText(
      ".food-modal-disclaimer",
      data.modal.disclaimer
    );

    const close = document.querySelector(
      "#food-modal-close"
    );

    if (close) {
      close.setAttribute(
        "aria-label",
        data.modal.close
      );
    }
  }

  function translateFooter(data) {
    setText(
      ".footer-brand > p",
      data.footer[0]
    );

    document.querySelectorAll(
      ".footer-bottom > span"
    ).forEach((element, index) => {
      if (data.footer[index + 1]) {
        element.textContent =
          data.footer[index + 1];
      }
    });
  }

  function getLanguage() {
    const language = document.documentElement.lang;
    return language === "es" ? "es" : "en";
  }

  function applyLanguage() {
    const language = getLanguage();
    const data = copy[language];

    translateNavigation(language);
    translateHero(data);
    translateCategories(data);
    translateProducts(data);
    translateClosing(data);
    translateModalLabels(data);
    translateFooter(data);

    const bag = document.querySelector(
      ".food-bag-link"
    );

    if (bag) {
      bag.setAttribute(
        "aria-label",
        data.a11y.bag
      );
    }

    const menu = document.querySelector(
      ".menu-toggle"
    );

    if (menu) {
      menu.setAttribute(
        "aria-label",
        data.a11y.menu
      );
    }

    document.title = language === "es"
      ? "Comida y Brunch — Coficito."
      : "Food & Brunch — Coficito.";
  }

  document.addEventListener(
    "coficito:languagechange",
    applyLanguage
  );

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      applyLanguage,
      { once: true }
    );
  } else {
    applyLanguage();
  }

  /* Accessible to food.js for the next integration */
  window.CoficitoFoodI18n = {
    getProduct(id) {
      return copy[getLanguage()].products[id] || null;
    },
    getLanguage
  };

})();
