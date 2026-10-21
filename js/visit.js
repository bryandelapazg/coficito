
"use strict";

/* ==========================================
   COFICITO — VISIT US
   Mobile Navigation · English / Español
   BEMA Studios
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".visit-menu-toggle");
  const mobileNav = document.querySelector("#visit-mobile-nav");

  if (!menuButton || !mobileNav) return;

  /* ========================================
     LANGUAGE
  ======================================== */

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

  const labels = {
    en: {
      open: "Open navigation",
      close: "Close navigation",
      mobile: "Mobile navigation"
    },

    es: {
      open: "Abrir navegación",
      close: "Cerrar navegación",
      mobile: "Navegación móvil"
    }
  };

  /* ========================================
     ACCESSIBILITY
  ======================================== */

  function updateMenuLabels() {
    const language = getLanguage();
    const copy = labels[language];

    const isOpen = !mobileNav.hidden;

    menuButton.setAttribute(
      "aria-label",
      isOpen ? copy.close : copy.open
    );

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    mobileNav.setAttribute(
      "aria-label",
      copy.mobile
    );
  }

  /* ========================================
     OPEN / CLOSE
  ======================================== */

  function openMenu() {
    mobileNav.hidden = false;
    updateMenuLabels();
  }

  function closeMenu() {
    mobileNav.hidden = true;
    updateMenuLabels();
  }

  function toggleMenu() {
    if (mobileNav.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  /* ========================================
     EVENTS
  ======================================== */

  menuButton.addEventListener(
    "click",
    toggleMenu
  );

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      !mobileNav.hidden
    ) {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener("click", event => {
    if (
      !mobileNav.hidden &&
      !mobileNav.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  /* ========================================
     LANGUAGE CHANGE
  ======================================== */

  document.addEventListener(
    "coficito:languagechange",
    updateMenuLabels
  );

  /* ========================================
     INITIAL STATE
  ======================================== */

  updateMenuLabels();
});
