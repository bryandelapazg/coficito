
"use strict";

/* ==========================================================
   COFICITO — MAIN JAVASCRIPT
   Global Navigation + Newsletter Demo
   English / Español
   BEMA Studios
   ========================================================== */

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

  const translations = {
    en: {
      menuOpen: "Open navigation",
      menuClose: "Close navigation",
      mobileNav: "Mobile navigation",
      newsletterInvalid:
        "Please enter a valid email address.",
      newsletterSuccess:
        "You're on the list — in our little demo world! No email was sent."
    },

    es: {
      menuOpen: "Abrir navegación",
      menuClose: "Cerrar navegación",
      mobileNav: "Navegación móvil",
      newsletterInvalid:
        "Por favor, ingresá un correo electrónico válido.",
      newsletterSuccess:
        "¡Ya estás en nuestra lista de demostración! No se envió ningún correo."
    }
  };

  function t(key) {
    return translations[getLanguage()][key] || key;
  }

  /* ========================================
     MOBILE NAVIGATION
  ======================================== */

  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");

  if (menuButton && mobileNav) {

    function updateMenuLabels() {
      const isOpen = !mobileNav.hidden;

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen ? t("menuClose") : t("menuOpen")
      );

      mobileNav.setAttribute(
        "aria-label",
        t("mobileNav")
      );
    }

    function closeMenu() {
      mobileNav.hidden = true;
      updateMenuLabels();
    }

    function openMenu() {
      mobileNav.hidden = false;
      updateMenuLabels();

      mobileNav.querySelector("a")?.focus();
    }

    menuButton.addEventListener("click", () => {
      if (mobileNav.hidden) {
        openMenu();
      } else {
        closeMenu();
      }
    });

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

    document.addEventListener(
      "coficito:languagechange",
      updateMenuLabels
    );

    updateMenuLabels();
  }

  /* ========================================
     THE LITTLE LETTER — DEMO ONLY
  ======================================== */

  const form = document.querySelector("#newsletter-form");
  const emailInput = document.querySelector("#newsletter-email");
  const feedback = document.querySelector("#newsletter-feedback");

  if (form && emailInput && feedback) {

    let feedbackState = null;

    function showFeedback(state) {
      feedbackState = state;

      if (state === "invalid") {
        feedback.textContent = t("newsletterInvalid");
      } else if (state === "success") {
        feedback.textContent = t("newsletterSuccess");
      } else {
        feedback.textContent = "";
      }
    }

    form.addEventListener("submit", event => {
      event.preventDefault();

      const email = emailInput.value.trim();

      if (
        !email ||
        !emailInput.validity.valid
      ) {
        showFeedback("invalid");

        emailInput.setAttribute(
          "aria-invalid",
          "true"
        );

        emailInput.focus();
        return;
      }

      emailInput.removeAttribute("aria-invalid");

      /*
        DEMO ONLY
        No fetch()
        No email service
        No database
        No storage
      */

      showFeedback("success");

      form.reset();
    });

    emailInput.addEventListener("input", () => {
      if (
        emailInput.getAttribute("aria-invalid") === "true"
      ) {
        emailInput.removeAttribute("aria-invalid");
        showFeedback(null);
      }
    });

    document.addEventListener(
      "coficito:languagechange",
      () => {
        if (feedbackState) {
          showFeedback(feedbackState);
        }
      }
    );
  }

});
