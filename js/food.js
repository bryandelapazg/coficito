
"use strict";

/* ==========================================================
   COFICITO — FOOD & BRUNCH INTERACTIONS
   Bilingual modal: English / Español
   BEMA Studios
   ========================================================== */

const FOOD_ITEMS = {
  "classic-avo": {
    price: 13,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",
    en: {
      name: "The Classic Avo",
      category: "THE GREENS",
      description: "A comforting little classic for slow mornings.",
      ingredients: "Sourdough toast, avocado, lemon, sea salt, chili flakes.",
      allergens: "Contains wheat/gluten. Other allergens cannot be verified.",
      pairing: "Lovely with a Cold Brew."
    },
    es: {
      name: "La tostada clásica de palta",
      category: "LOS FRESQUITOS",
      description: "Un clásico reconfortante para disfrutar las mañanas sin apuro.",
      ingredients: "Tostada de masa madre, palta, limón, sal marina y ají en hojuelas.",
      allergens: "Contiene trigo/gluten. No es posible verificar otros alérgenos.",
      pairing: "Queda genial con un Cold Brew."
    }
  },

  "green-garden": {
    price: 14,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
    en: {
      name: "The Green Garden",
      category: "THE GREENS",
      description: "Fresh greens and a bright little beginning.",
      ingredients: "Sourdough toast, avocado, cucumber, leafy greens, herbs.",
      allergens: "Contains wheat/gluten. Other allergens cannot be verified."
    },
    es: {
      name: "El jardín verde",
      category: "LOS FRESQUITOS",
      description: "Ingredientes frescos para comenzar el día con buena energía.",
      ingredients: "Tostada de masa madre, palta, pepino, hojas verdes y hierbas.",
      allergens: "Contiene trigo/gluten. No es posible verificar otros alérgenos."
    }
  },

  "smoked-avo": {
    price: 16,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",
    en: {
      name: "The Smoked Avo",
      category: "THE GREENS",
      description: "A savory twist on the everyday avocado toast.",
      ingredients: "Sourdough toast, avocado, smoked salmon, lemon, herbs.",
      allergens: "Contains fish and wheat/gluten. Other allergens cannot be verified."
    },
    es: {
      name: "La tostada de palta ahumada",
      category: "LOS FRESQUITOS",
      description: "Nuestra clásica tostada de palta con un toque salado especial.",
      ingredients: "Tostada de masa madre, palta, salmón ahumado, limón y hierbas.",
      allergens: "Contiene pescado y trigo/gluten. No es posible verificar otros alérgenos."
    }
  },

  "cloud-nine": {
    price: 14,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85",
    en: {
      name: "Cloud Nine",
      category: "THE FLUFFY ONES",
      description: "Soft, sweet pancakes for an extra lovely morning.",
      ingredients: "Pancakes, seasonal berries, maple syrup.",
      allergens: "Illustrative recipe may contain wheat/gluten, milk and eggs.",
      pairing: "Lovely with a Cappuccino."
    },
    es: {
      name: "En las nubes",
      category: "LOS ESPONJOSITOS",
      description: "Panqueques suaves y dulces para una mañana todavía más linda.",
      ingredients: "Panqueques, frutos rojos de temporada y sirope de maple.",
      allergens: "La receta ilustrativa puede contener trigo/gluten, leche y huevos.",
      pairing: "Queda genial con un capuchino."
    }
  },

  "savory-stack": {
    price: 16,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85",
    en: {
      name: "The Savory Stack",
      category: "THE FLUFFY ONES",
      description: "The comfort of pancakes, with a savory little twist.",
      ingredients: "Savory pancakes, eggs, cheese, herbs.",
      allergens: "Illustrative recipe may contain wheat/gluten, milk and eggs."
    },
    es: {
      name: "La torre salada",
      category: "LOS ESPONJOSITOS",
      description: "Toda la suavidad de los panqueques con un toque salado.",
      ingredients: "Panqueques salados, huevos, queso y hierbas.",
      allergens: "La receta ilustrativa puede contener trigo/gluten, leche y huevos."
    }
  },

  "berry-waffle": {
    price: 14,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=85",
    en: {
      name: "Berry Little Waffle",
      category: "THE CRISPY ONES",
      description: "Golden edges, berries and a sweet little finish.",
      ingredients: "Belgian-style waffle, mixed berries, whipped cream.",
      allergens: "Illustrative recipe may contain wheat/gluten, milk and eggs.",
      pairing: "Lovely with a Vanilla Latte."
    },
    es: {
      name: "Waffle de frutos rojos",
      category: "LOS CROCANTES",
      description: "Bordes doraditos, frutos rojos y un final bien dulce.",
      ingredients: "Waffle estilo belga, frutos rojos variados y crema batida.",
      allergens: "La receta ilustrativa puede contener trigo/gluten, leche y huevos.",
      pairing: "Queda genial con un latte de vainilla."
    }
  },

  "brunch-waffle": {
    price: 17,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=85",
    en: {
      name: "The Brunch Waffle",
      category: "THE CRISPY ONES",
      description: "A golden, savory-sweet little brunch favorite.",
      ingredients: "Belgian-style waffle, eggs, cheese, maple syrup.",
      allergens: "Illustrative recipe may contain wheat/gluten, milk and eggs."
    },
    es: {
      name: "El waffle del brunch",
      category: "LOS CROCANTES",
      description: "Un favorito doradito que combina lo dulce y lo salado.",
      ingredients: "Waffle estilo belga, huevos, queso y sirope de maple.",
      allergens: "La receta ilustrativa puede contener trigo/gluten, leche y huevos."
    }
  },

  espresso: {
    price: 4,
    en: {
      name: "Espresso",
      category: "THE COFFEE BAR",
      description: "Small cup. Big character.",
      ingredients: "Espresso coffee, water.",
      allergens: "No major allergens intentionally listed; cross-contact is unknown."
    },
    es: {
      name: "Espresso",
      category: "LA BARRA DE CAFÉ",
      description: "Tacita pequeña. Gran personalidad.",
      ingredients: "Café espresso y agua.",
      allergens: "No se indican alérgenos principales intencionalmente; se desconoce el posible contacto cruzado."
    }
  },

  cappuccino: {
    price: 5,
    en: {
      name: "Cappuccino",
      category: "THE COFFEE BAR",
      description: "A little cloud of comfort.",
      ingredients: "Espresso, steamed milk, milk foam.",
      allergens: "Contains milk in this illustrative recipe."
    },
    es: {
      name: "Capuchino",
      category: "LA BARRA DE CAFÉ",
      description: "Una pequeña nube de sabor y suavidad.",
      ingredients: "Espresso, leche vaporizada y espuma de leche.",
      allergens: "Contiene leche en esta receta ilustrativa."
    }
  },

  "vanilla-latte": {
    price: 6,
    en: {
      name: "Vanilla Latte",
      category: "THE COFFEE BAR",
      description: "A smooth little touch of sweetness.",
      ingredients: "Espresso, steamed milk, vanilla syrup.",
      allergens: "Contains milk in this illustrative recipe."
    },
    es: {
      name: "Latte de vainilla",
      category: "LA BARRA DE CAFÉ",
      description: "Un toque suave y delicioso de dulzura.",
      ingredients: "Espresso, leche vaporizada y sirope de vainilla.",
      allergens: "Contiene leche en esta receta ilustrativa."
    }
  },

  "iced-latte": {
    price: 6,
    en: {
      name: "Iced Latte",
      category: "THE COFFEE BAR",
      description: "A refreshing everyday ritual.",
      ingredients: "Espresso, milk, ice.",
      allergens: "Contains milk in this illustrative recipe."
    },
    es: {
      name: "Latte helado",
      category: "LA BARRA DE CAFÉ",
      description: "Un ritual refrescante para todos los días.",
      ingredients: "Espresso, leche y hielo.",
      allergens: "Contiene leche en esta receta ilustrativa."
    }
  },

  "matcha-latte": {
    price: 6,
    en: {
      name: "Matcha Latte",
      category: "THE COFFEE BAR",
      description: "A gentle green moment.",
      ingredients: "Matcha powder, milk, water.",
      allergens: "Contains milk in this illustrative recipe."
    },
    es: {
      name: "Latte de matcha",
      category: "LA BARRA DE CAFÉ",
      description: "Un momento verde, suave y relajante.",
      ingredients: "Matcha en polvo, leche y agua.",
      allergens: "Contiene leche en esta receta ilustrativa."
    }
  },

  "cold-brew": {
    price: 5,
    en: {
      name: "Cold Brew",
      category: "THE COFFEE BAR",
      description: "Slow brewed. Smoothly enjoyed.",
      ingredients: "Coffee, filtered water.",
      allergens: "No major allergens intentionally listed; cross-contact is unknown."
    },
    es: {
      name: "Café de extracción en frío",
      category: "LA BARRA DE CAFÉ",
      description: "Preparado lentamente. Disfrutado con calma.",
      ingredients: "Café y agua filtrada.",
      allergens: "No se indican alérgenos principales intencionalmente; se desconoce el posible contacto cruzado."
    }
  }
};

/* ==========================================================
   INITIALIZATION
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const backdrop = document.querySelector("#food-modal-backdrop");
  const modal = document.querySelector("#food-modal");
  const closeButton = document.querySelector("#food-modal-close");

  const categoryLinks = [
    ...document.querySelectorAll(".food-category-inner a")
  ];

  if (!backdrop || !modal || !closeButton) return;

  let previousFocus = null;
  let activeFoodId = null;

  /* ========================================================
     LANGUAGE
     ======================================================== */

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

  function getFoodContent(id) {
    const item = FOOD_ITEMS[id];
    if (!item) return null;

    const language = getLanguage();

    return {
      ...item,
      ...item[language]
    };
  }

  /* ========================================================
     MODAL CONTENT
     ======================================================== */

  function renderFoodModal(id) {
    const item = getFoodContent(id);
    if (!item) return;

    document.querySelector(
      "#food-modal-category"
    ).textContent = item.category;

    document.querySelector(
      "#food-modal-title"
    ).textContent = item.name;

    document.querySelector(
      "#food-modal-description"
    ).textContent = item.description;

    document.querySelector(
      "#food-modal-price"
    ).textContent = `$${item.price}`;

    document.querySelector(
      "#food-modal-ingredients"
    ).textContent = item.ingredients;

    document.querySelector(
      "#food-modal-allergens"
    ).textContent = item.allergens;

    /* IMAGE */

    const imageWrap = document.querySelector(
      "#food-modal-image"
    );

    const image = document.querySelector(
      "#food-modal-photo"
    );

    if (item.image) {
      image.src = item.image;
      image.alt = item.name;
      imageWrap.hidden = false;
    } else {
      image.removeAttribute("src");
      image.alt = "";
      imageWrap.hidden = true;
    }

    /* PAIRING */

    const pairing = document.querySelector(
      "#food-modal-pairing"
    );

    const pairingText = document.querySelector(
      "#food-modal-pairing-text"
    );

    if (item.pairing) {
      pairingText.textContent = item.pairing;
      pairing.hidden = false;
    } else {
      pairingText.textContent = "";
      pairing.hidden = true;
    }
  }

  /* ========================================================
     OPEN / CLOSE MODAL
     ======================================================== */

  function getFocusable() {
    return [
      ...modal.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled])'
      )
    ].filter(element => {
      return element.getClientRects().length > 0;
    });
  }

  function openFoodModal(id) {
    if (!FOOD_ITEMS[id]) return;

    previousFocus = document.activeElement;
    activeFoodId = id;

    renderFoodModal(id);

    backdrop.hidden = false;
    document.body.style.overflow = "hidden";

    closeButton.focus();
  }

  function closeFoodModal() {
    if (backdrop.hidden) return;

    backdrop.hidden = true;
    document.body.style.overflow = "";
    activeFoodId = null;

    if (
      previousFocus &&
      previousFocus.isConnected
    ) {
      previousFocus.focus();
    }
  }

  /* ========================================================
     EVENTS
     ======================================================== */

  document.querySelectorAll("[data-food]").forEach(button => {
    button.addEventListener("click", () => {
      openFoodModal(button.dataset.food);
    });
  });

  closeButton.addEventListener(
    "click",
    closeFoodModal
  );

  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) {
      closeFoodModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (backdrop.hidden) return;

    if (event.key === "Escape") {
      closeFoodModal();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = getFocusable();

    if (!focusable.length) {
      event.preventDefault();
      closeButton.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === first
    ) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {
      event.preventDefault();
      first.focus();
    }
  });

  /* ========================================================
     LIVE LANGUAGE SWITCH
     ======================================================== */

  document.addEventListener(
    "coficito:languagechange",
    () => {
      if (
        activeFoodId &&
        !backdrop.hidden
      ) {
        renderFoodModal(activeFoodId);
      }
    }
  );

  /* ========================================================
     ACTIVE CATEGORY ON SCROLL
     ======================================================== */

  if ("IntersectionObserver" in window) {
    const sections = [
      ...document.querySelectorAll(".food-chapter")
    ];

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (!visible.length) return;

        const activeId = visible[0].target.id;

        categoryLinks.forEach(link => {
          const active =
            link.getAttribute("href") ===
            `#${activeId}`;

          link.classList.toggle(
            "is-active",
            active
          );

          if (active) {
            link.setAttribute(
              "aria-current",
              "location"
            );
          } else {
            link.removeAttribute(
              "aria-current"
            );
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: [0, 0.1, 0.3, 0.5]
      }
    );

    sections.forEach(section => {
      observer.observe(section);
    });
  }
});
