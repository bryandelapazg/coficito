
/* ==========================================================
   COFICITO — BILINGUAL LANGUAGE SYSTEM
   English / Español
   BEMA Studios
   ========================================================== */

(() => {
  "use strict";

  const STORAGE_KEY = "coficito-language";
  const SUPPORTED_LANGUAGES = ["en", "es"];

  const translations = {
    en: {
      /* NAVIGATION */
      "nav.home": "Home",
      "nav.shop": "Shop",
      "nav.food": "Food & Brunch",
      "nav.recipes": "Recipes",
      "nav.visit": "Visit Us",
      "nav.story": "Our Story",
      "nav.contact": "Contact",

      /* COMMON */
      "common.explore": "Explore",
      "common.discover": "Discover More",
      "common.learn": "Learn More",
      "common.view": "View More",
      "common.back": "Back to Home ↗",
      "common.shop": "Shop Now ↗",
      "common.read": "Read More ↗",
      "common.close": "Close",
      "common.quantity": "Quantity",
      "common.price": "Price",
      "common.from": "From",
      "common.add": "Add to Bag ↗",
      "common.remove": "Remove",
      "common.clear": "Clear bag",
      "common.subtotal": "Subtotal",
      "common.quickview": "Quick View ↗",
      "common.weight": "Weight",
      "common.grind": "Grind",

      /* HOME */
      "home.eyebrow": "A LITTLE COFFEE, A LOT OF FEELING",
      "home.title": "A little coffee. A lot of feeling.",
      "home.description":
        "Thoughtfully crafted coffee for your everyday moments.",
      "home.shop": "Explore Our Coffee ↗",
      "home.featured.eyebrow": "THE COFICITO COLLECTION",
      "home.featured.title": "Coffee for every little moment.",
      "home.featured.description":
        "Three lovely origins. One everyday ritual.",
      "home.ritual.eyebrow": "THE EVERYDAY RITUAL",
      "home.ritual.title": "Make room for the little things.",

      /* SHOP INTRO */
      "shop.eyebrow": "THE COFICITO COLLECTION",
      "shop.title": "Good things, one little cup at a time.",
      "shop.subtitle":
        "Coffee for the everyday moments worth keeping.",

      /* SHOP SECTIONS */
      "shop.coffee.eyebrow": "01 / THE COLLECTION",
      "shop.coffee.title": "Coffee Beans.",
      "shop.coffee.description":
        "Three little origins. Three lovely rituals.",

      "shop.essentials.eyebrow": "02 / THE EVERYDAY TOOLS",
      "shop.essentials.title": "Little Essentials.",
      "shop.essentials.description":
        "The little things that make a good cup even better.",

      "shop.merch.eyebrow": "03 / THE LITTLE EXTRAS",
      "shop.merch.title": "Everyday Merch.",
      "shop.merch.description":
        "A little Coficito, wherever you go.",

      "shop.closing.eyebrow": "THE LITTLE RITUAL",
      "shop.closing.title": "Made for your everyday.",
      "shop.closing.description":
        "Coficito is a fictional brand concept. All products and prices are illustrative. No purchases or payments are available.",

      /* PRODUCT NAMES */
      "product.colombia.name": "Colombia Huila",
      "product.ethiopia.name": "Ethiopia Sidama",
      "product.brazil.name": "Brazil Cerrado",
      "product.dripper.name": "Ceramic Dripper",
      "product.cup.name": "Everyday Cup",
      "product.filters.name": "Pour-Over Filters",
      "product.tote.name": "The Little Tote",
      "product.cap.name": "Everyday Cap",

      /* PRODUCT CARD DESCRIPTIONS */
      "product.colombia.short":
        "Caramel · Citrus · Milk chocolate",
      "product.ethiopia.short":
        "Floral · Red berries · Black tea",
      "product.brazil.short":
        "Dark chocolate · Hazelnut · Brown sugar",
      "product.dripper.short":
        "For slow and thoughtful mornings.",
      "product.cup.short":
        "Your little everyday companion.",
      "product.filters.short":
        "40 filters for the perfect little ritual.",
      "product.tote.short":
        "Carry the little things.",
      "product.cap.short":
        "For wherever the day takes you.",

      /* PRODUCT FULL DESCRIPTIONS */
      "product.colombia.description":
        "A comforting everyday coffee with notes of caramel, citrus and milk chocolate. Medium roast.",
      "product.ethiopia.description":
        "Bright and delicate, with floral notes, red berries and black tea. Light roast.",
      "product.brazil.description":
        "Rich and smooth, with notes of dark chocolate, hazelnut and brown sugar. Medium-dark roast.",
      "product.dripper.description":
        "A beautiful ceramic dripper for slow and thoughtful mornings.",
      "product.cup.description":
        "Your little everyday companion, made for comforting coffee moments.",
      "product.filters.description":
        "40 filters for your perfect little pour-over ritual.",
      "product.tote.description":
        "Carry the little things with a little Coficito.",
      "product.cap.description":
        "A simple everyday essential for wherever the day takes you.",

      /* PRODUCT CATEGORIES */
      "category.coffee": "SPECIALTY COFFEE",
      "category.essentials": "LITTLE ESSENTIALS",
      "category.merch": "EVERYDAY MERCH",

      /* COFFEE OPTIONS */
      "grind.whole": "Whole Bean",
      "grind.espresso": "Espresso",
      "grind.pourover": "Pour Over",
      "grind.frenchpress": "French Press",

      /* CART */
      "cart.title": "Your Little Bag",
      "cart.empty": "Your little bag is empty.",
      "cart.emptyDescription":
        "A lovely coffee ritual is waiting for you.",
      "cart.disclaimer":
        "Demo bag only. Checkout is unavailable.",
      "cart.productDisclaimer":
        "Concept products only. No real purchases or payments.",
      "cart.added": "added to your bag.",
      "cart.removed": "Item removed from your bag.",
      "cart.cleared": "Your little bag is now empty.",

      /* FOOTER */
      "footer.tagline": "A little coffee. A lot of feeling.",
      "footer.location":
        "Fictional concept café · Round Rock, Texas",
      "footer.credit": "A brand concept by BEMA Studios."
    },

    es: {
      /* NAVEGACIÓN */
      "nav.home": "Inicio",
      "nav.shop": "Tienda",
      "nav.food": "Comida y Brunch",
      "nav.recipes": "Recetas",
      "nav.visit": "Visítanos",
      "nav.story": "Nuestra Historia",
      "nav.contact": "Contacto",

      /* COMUNES */
      "common.explore": "Explorar",
      "common.discover": "Descubrir más",
      "common.learn": "Conocer más",
      "common.view": "Ver más",
      "common.back": "Volver al inicio ↗",
      "common.shop": "Comprar ahora ↗",
      "common.read": "Leer más ↗",
      "common.close": "Cerrar",
      "common.quantity": "Cantidad",
      "common.price": "Precio",
      "common.from": "Desde",
      "common.add": "Agregar a la bolsa ↗",
      "common.remove": "Eliminar",
      "common.clear": "Vaciar bolsa",
      "common.subtotal": "Subtotal",
      "common.quickview": "Vista rápida ↗",
      "common.weight": "Peso",
      "common.grind": "Molienda",

      /* INICIO */
      "home.eyebrow": "UN POCO DE CAFÉ, MUCHAS EMOCIONES",
      "home.title": "Un poco de café. Muchas emociones.",
      "home.description":
        "Café preparado con dedicación para tus momentos cotidianos.",
      "home.shop": "Explorar nuestros cafés ↗",
      "home.featured.eyebrow": "LA COLECCIÓN COFICITO",
      "home.featured.title":
        "Café para cada pequeño momento.",
      "home.featured.description":
        "Tres orígenes especiales. Un ritual cotidiano.",
      "home.ritual.eyebrow": "EL RITUAL DE CADA DÍA",
      "home.ritual.title":
        "Hacé espacio para las pequeñas cosas.",

      /* INTRODUCCIÓN DE TIENDA */
      "shop.eyebrow": "LA COLECCIÓN COFICITO",
      "shop.title":
        "Las cosas buenas empiezan con una tacita.",
      "shop.subtitle":
        "Café para esos momentos cotidianos que vale la pena recordar.",

      /* SECCIONES DE TIENDA */
      "shop.coffee.eyebrow": "01 / LA COLECCIÓN",
      "shop.coffee.title": "Café en grano.",
      "shop.coffee.description":
        "Tres orígenes especiales. Tres rituales para disfrutar.",

      "shop.essentials.eyebrow":
        "02 / LOS ACCESORIOS DE CADA DÍA",
      "shop.essentials.title": "Pequeños esenciales.",
      "shop.essentials.description":
        "Esas pequeñas cosas que hacen aún mejor una buena taza de café.",

      "shop.merch.eyebrow": "03 / LOS PEQUEÑOS EXTRAS",
      "shop.merch.title": "Accesorios para cada día.",
      "shop.merch.description":
        "Un poquito de Coficito, vayas donde vayas.",

      "shop.closing.eyebrow": "EL PEQUEÑO RITUAL",
      "shop.closing.title": "Hecho para tu día a día.",
      "shop.closing.description":
        "Coficito es un concepto de marca ficticio. Todos los productos y precios son ilustrativos. No se realizan compras ni pagos reales.",

      /* NOMBRES DE PRODUCTOS */
      "product.colombia.name": "Colombia Huila",
      "product.ethiopia.name": "Etiopía Sidama",
      "product.brazil.name": "Brasil Cerrado",
      "product.dripper.name": "Dripper de cerámica",
      "product.cup.name": "Taza de todos los días",
      "product.filters.name": "Filtros para café",
      "product.tote.name": "Bolsa de tela",
      "product.cap.name": "Gorra Coficito",

      /* DESCRIPCIONES CORTAS */
      "product.colombia.short":
        "Caramelo · Cítricos · Chocolate con leche",
      "product.ethiopia.short":
        "Flores · Frutos rojos · Té negro",
      "product.brazil.short":
        "Chocolate amargo · Avellanas · Azúcar morena",
      "product.dripper.short":
        "Para mañanas tranquilas y sin apuro.",
      "product.cup.short":
        "Tu pequeña compañera de cada día.",
      "product.filters.short":
        "40 filtros para tu ritual de café.",
      "product.tote.short":
        "Llevá con vos las pequeñas cosas.",
      "product.cap.short":
        "Para acompañarte adonde te lleve el día.",

      /* DESCRIPCIONES COMPLETAS */
      "product.colombia.description":
        "Un café reconfortante con notas de caramelo, cítricos y chocolate con leche. Tueste medio.",
      "product.ethiopia.description":
        "Delicado y brillante, con notas florales, frutos rojos y té negro. Tueste claro.",
      "product.brazil.description":
        "Intenso y suave, con notas de chocolate amargo, avellanas y azúcar morena. Tueste medio oscuro.",
      "product.dripper.description":
        "Un hermoso dripper de cerámica para disfrutar mañanas tranquilas.",
      "product.cup.description":
        "Tu compañera de todos los días, perfecta para disfrutar cada café.",
      "product.filters.description":
        "40 filtros para preparar tu café con calma y dedicación.",
      "product.tote.description":
        "Llevá las pequeñas cosas con un poquito de Coficito.",
      "product.cap.description":
        "Un accesorio simple para acompañarte adonde te lleve el día.",

      /* CATEGORÍAS */
      "category.coffee": "CAFÉ DE ESPECIALIDAD",
      "category.essentials": "PEQUEÑOS ESENCIALES",
      "category.merch": "ACCESORIOS COFICITO",

      /* OPCIONES DE CAFÉ */
      "grind.whole": "Grano entero",
      "grind.espresso": "Espresso",
      "grind.pourover": "Filtrado",
      "grind.frenchpress": "Prensa francesa",

      /* CARRITO */
      "cart.title": "Tu bolsita de café",
      "cart.empty": "Tu bolsa está vacía.",
      "cart.emptyDescription":
        "Un lindo ritual de café te está esperando.",
      "cart.disclaimer":
        "Bolsa de demostración. No hay pagos disponibles.",
      "cart.productDisclaimer":
        "Productos conceptuales. No se realizan compras ni pagos reales.",
      "cart.added": "agregado a tu bolsa.",
      "cart.removed": "Producto eliminado de tu bolsa.",
      "cart.cleared": "Tu bolsa está vacía.",

      /* PIE DE PÁGINA */
      "footer.tagline": "Un poco de café. Muchas emociones.",
      "footer.location":
        "Cafetería conceptual ficticia · Round Rock, Texas",
      "footer.credit": "Un concepto de marca de BEMA Studios."
    }
  };

  /* ========================================================
     LANGUAGE STORAGE
     ======================================================== */

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      return SUPPORTED_LANGUAGES.includes(saved)
        ? saved
        : "en";
    } catch {
      return "en";
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Translation still works without localStorage.
    }
  }

  /* ========================================================
     TRANSLATION HELPERS
     ======================================================== */

  function translate(key, language = getSavedLanguage()) {
    return (
      translations[language]?.[key] ??
      translations.en[key] ??
      key
    );
  }

  function translateElement(element, language) {
    const key = element.dataset.i18n;

    if (key && translations[language]?.[key] !== undefined) {
      element.textContent = translations[language][key];
    }

    const placeholderKey = element.dataset.i18nPlaceholder;

    if (placeholderKey) {
      element.placeholder = translate(placeholderKey, language);
    }

    const ariaKey = element.dataset.i18nAria;

    if (ariaKey) {
      element.setAttribute(
        "aria-label",
        translate(ariaKey, language)
      );
    }

    const titleKey = element.dataset.i18nTitle;

    if (titleKey) {
      element.title = translate(titleKey, language);
    }
  }

  /* ========================================================
     APPLY LANGUAGE
     ======================================================== */

  function setLanguage(language) {
    if (!SUPPORTED_LANGUAGES.includes(language)) {
      return;
    }

    document.documentElement.lang = language;

    document
      .querySelectorAll(
        "[data-i18n], [data-i18n-placeholder], [data-i18n-aria], [data-i18n-title]"
      )
      .forEach(element => {
        translateElement(element, language);
      });

    document.querySelectorAll(".language-option").forEach(button => {
      const isActive = button.dataset.lang === language;

      button.classList.toggle("is-active", isActive);
      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );
    });

    document.querySelectorAll(".language-label").forEach(label => {
      label.textContent = language.toUpperCase();
    });

    saveLanguage(language);

    document.dispatchEvent(
      new CustomEvent("coficito:languagechange", {
        detail: { language }
      })
    );
  }

  /* ========================================================
     INITIALIZE
     ======================================================== */

  function initializeLanguage() {
    setLanguage(getSavedLanguage());

    document.addEventListener("click", event => {
      const button = event.target.closest(".language-option");

      if (!button) return;

      event.preventDefault();
      setLanguage(button.dataset.lang);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeLanguage,
      { once: true }
    );
  } else {
    initializeLanguage();
  }

  /* ========================================================
     PUBLIC API FOR CART.JS
     ======================================================== */

  window.CoficitoI18n = {
    translate,
    setLanguage,
    getLanguage: getSavedLanguage
  };

})();
