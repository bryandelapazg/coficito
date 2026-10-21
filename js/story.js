
"use strict";

/* ==========================================
   COFICITO — OUR STORY
   Mobile Navigation + Scroll Reveal
   English / Español
   BEMA Studios
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ========================================
     LANGUAGE HELPERS
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

  const menuLabels = {
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
     MOBILE NAVIGATION
  ======================================== */

  const menuButton = document.querySelector(
    ".story-menu-toggle"
  );

  const mobileNav = document.querySelector(
    "#story-mobile-nav"
  );

  function updateMenuLabels() {
    if (!menuButton || !mobileNav) return;

    const language = getLanguage();
    const labels = menuLabels[language];
    const isOpen = !mobileNav.hidden;

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? labels.close : labels.open
    );

    mobileNav.setAttribute(
      "aria-label",
      labels.mobile
    );
  }

  function closeMenu() {
    if (!menuButton || !mobileNav) return;

    mobileNav.hidden = true;
    updateMenuLabels();
  }

  function openMenu() {
    if (!menuButton || !mobileNav) return;

    mobileNav.hidden = false;
    updateMenuLabels();
  }

  function toggleMenu() {
    if (!mobileNav) return;

    if (mobileNav.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  if (menuButton && mobileNav) {

    menuButton.addEventListener(
      "click",
      toggleMenu
    );

    /* Close when selecting a page */

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener(
        "click",
        closeMenu
      );
    });

    /* Close with Escape */

    document.addEventListener("keydown", event => {
      if (
        event.key === "Escape" &&
        !mobileNav.hidden
      ) {
        closeMenu();
        menuButton.focus();
      }
    });

    /* Close when clicking outside */

    document.addEventListener("click", event => {
      if (
        !mobileNav.hidden &&
        !mobileNav.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMenu();
      }
    });

    /* Update accessibility labels when language changes */

    document.addEventListener(
      "coficito:languagechange",
      updateMenuLabels
    );

    updateMenuLabels();
  }

  /* ========================================
     SUBTLE SCROLL REVEAL
     Preserve original animation behavior
  ======================================== */

  const sections = document.querySelectorAll(
    ".story-reveal"
  );

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    !reducedMotion &&
    "IntersectionObserver" in window
  ) {

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );
          }

        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 40px 0px"
      }
    );

    sections.forEach(section => {

      const alreadyVisible =
        section.getBoundingClientRect().top <
        window.innerHeight;

      if (alreadyVisible) {
        section.classList.add(
          "is-visible"
        );
      } else {
        observer.observe(section);
      }

    });

    document.body.classList.add(
      "story-js-ready"
    );
  }

});
