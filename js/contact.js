
"use strict";

/* ==========================================================
   COFICITO — CONTACT DEMO
   Form Validation + Mobile Navigation
   English / Español
   BEMA Studios
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

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

  const translations = {
    en: {
      required: "Please complete this field.",
      nameShort: "Please enter at least two characters.",
      invalidEmail: "Please enter a valid email address.",
      messageShort: "Please write at least ten characters.",
      menuOpen: "Open navigation",
      menuClose: "Close navigation",
      mobileNav: "Mobile navigation"
    },

    es: {
      required: "Por favor, completá este campo.",
      nameShort: "Ingresá al menos dos caracteres.",
      invalidEmail: "Ingresá un correo electrónico válido.",
      messageShort: "Escribí al menos diez caracteres.",
      menuOpen: "Abrir navegación",
      menuClose: "Cerrar navegación",
      mobileNav: "Navegación móvil"
    }
  };

  function t(key) {
    return translations[getLanguage()][key] || key;
  }

  /* ========================================
     FORM ELEMENTS
  ======================================== */

  const form = document.querySelector("#contact-form");
  const success = document.querySelector("#contact-success");
  const resetButton = document.querySelector("#contact-reset");

  const nameInput = document.querySelector("#contact-name");
  const emailInput = document.querySelector("#contact-email");
  const messageInput = document.querySelector("#contact-message");
  const messageCount = document.querySelector("#contact-message-count");

  /* ========================================
     FORM VALIDATION
  ======================================== */

  if (
    form &&
    success &&
    resetButton &&
    nameInput &&
    emailInput &&
    messageInput &&
    messageCount
  ) {

    const fields = [
      {
        input: nameInput,
        error: document.querySelector("#contact-name-error")
      },
      {
        input: emailInput,
        error: document.querySelector("#contact-email-error")
      },
      {
        input: messageInput,
        error: document.querySelector("#contact-message-error")
      }
    ];

    function setError(input, errorElement, message) {
      if (!errorElement) return;

      errorElement.textContent = message;

      if (message) {
        input.setAttribute("aria-invalid", "true");
      } else {
        input.removeAttribute("aria-invalid");
      }
    }

    function validateField(input) {
      const field = fields.find(
        item => item.input === input
      );

      if (!field) return true;

      const value = input.value.trim();
      let error = "";

      if (!value) {
        error = t("required");
      } else if (
        input === nameInput &&
        value.length < 2
      ) {
        error = t("nameShort");
      } else if (input === emailInput) {

        // Correct email pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(value)) {
          error = t("invalidEmail");
        }

      } else if (
        input === messageInput &&
        value.length < 10
      ) {
        error = t("messageShort");
      }

      setError(input, field.error, error);

      return !error;
    }

    /* ========================================
       CHARACTER COUNTER
    ======================================== */

    function updateMessageCount() {
      const maxLength = Number(
        messageInput.getAttribute("maxlength")
      ) || 2000;

      messageCount.textContent =
        `${messageInput.value.length} / ${maxLength}`;
    }

    /* ========================================
       FIELD EVENTS
    ======================================== */

    fields.forEach(({ input }) => {

      input.addEventListener("blur", () => {
        validateField(input);
      });

      input.addEventListener("input", () => {

        if (
          input.getAttribute("aria-invalid") === "true"
        ) {
          validateField(input);
        }

        if (input === messageInput) {
          updateMessageCount();
        }

      });

    });

    /* ========================================
       SUBMIT — DEMO ONLY
    ======================================== */

    form.addEventListener("submit", event => {
      event.preventDefault();

      let allValid = true;
      let firstInvalid = null;

      fields.forEach(({ input }) => {
        const valid = validateField(input);

        if (!valid) {
          allValid = false;

          if (!firstInvalid) {
            firstInvalid = input;
          }
        }
      });

      if (!allValid) {
        firstInvalid.focus();
        return;
      }

      /*
        DEMO FORM ONLY

        No fetch()
        No email service
        No database
        No localStorage
        No sessionStorage
        No network transmission
      */

      form.hidden = true;
      success.hidden = false;

      success.focus();
    });

    /* ========================================
       RESET FORM
    ======================================== */

    resetButton.addEventListener("click", () => {

      form.reset();

      fields.forEach(({ input, error }) => {
        setError(input, error, "");
      });

      updateMessageCount();

      success.hidden = true;
      form.hidden = false;

      nameInput.focus();
    });

    /* ========================================
       UPDATE ERRORS WHEN LANGUAGE CHANGES
    ======================================== */

    function updateValidationLanguage() {
      fields.forEach(({ input }) => {

        if (
          input.getAttribute("aria-invalid") === "true"
        ) {
          validateField(input);
        }

      });
    }

    document.addEventListener(
      "coficito:languagechange",
      updateValidationLanguage
    );

    updateMessageCount();
  }

  /* ========================================
     MOBILE NAVIGATION
  ======================================== */

  const menuButton = document.querySelector(
    ".contact-menu-toggle"
  );

  const mobileNav = document.querySelector(
    "#contact-mobile-nav"
  );

  function updateMenuLabels() {
    if (!menuButton || !mobileNav) return;

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

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener(
        "click",
        closeMenu
      );
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

});
