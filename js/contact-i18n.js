
"use strict";

/* ==========================================================
   COFICITO — CONTACT I18N
   English / Español
   BEMA Studios
   ========================================================== */

(() => {

  const copy = {
    en: {
      "hero-eyebrow": "A LITTLE HELLO",
      "hero-title": [
        "Good things start",
        "with a ",
        "little hello."
      ],
      "hero-description": "Leave a little note.",

      "editorial-eyebrow": "01 / GET IN TOUCH",
      "editorial-title": [
        "We'd love to",
        "",
        "hear from you."
      ],
      "editorial-description":
        "A thought, a question or simply a little hello. Every good conversation begins somewhere.",

      "location-label": "THE WORLD OF COFICITO",
      "location-name": "Imagined in Round Rock, Texas.",
      "location-disclaimer":
        "Coficito is a fictional brand concept by BEMA Studios. There is no operating café or customer service team.",

      "demo-label": "DEMO FORM",
      "demo-description":
        "This form is for demonstration only. Messages are not sent, saved or received.",

      "name-label": "Your name",
      "email-label": "Email address",
      "message-label": "Your message",

      "submit-label": "Prepare My Note",
      "form-footnote":
        "Your information stays in this browser form. Nothing is transmitted or stored.",

      "success-eyebrow": "YOUR LITTLE NOTE",
      "success-title": [
        "A lovely little",
        "",
        "hello."
      ],
      "success-description":
        "Your note is ready. This is a demo, so nothing was sent.",
      "reset-label": "Write another note",

      "ending-eyebrow": "A LITTLE SOMETHING MORE",
      "ending-title": [
        "Stay for the",
        "",
        "little moments."
      ],
      "ending-shop": "Explore Our Coffee ↗",
      "ending-story": "Read Our Story ↗",

      "footer-tagline": "A little coffee. A lot of feeling.",
      "footer-one":
        "Coficito. · A little coffee. A lot of feeling.",
      "footer-two":
        "Fictional concept café · Round Rock, Texas",
      "footer-three":
        "A brand concept by BEMA Studios."
    },

    es: {
      "hero-eyebrow": "UN PEQUEÑO HOLA",
      "hero-title": [
        "Las cosas lindas empiezan",
        "con un ",
        "pequeño hola."
      ],
      "hero-description": "Dejanos una notita.",

      "editorial-eyebrow": "01 / HABLEMOS",
      "editorial-title": [
        "Nos encantaría",
        "",
        "escucharte."
      ],
      "editorial-description":
        "Una idea, una pregunta o simplemente un saludo. Toda buena conversación comienza en algún lugar.",

      "location-label": "EL MUNDO DE COFICITO",
      "location-name": "Imaginado en Round Rock, Texas.",
      "location-disclaimer":
        "Coficito es un concepto de marca ficticia creado por BEMA Studios. No existe una cafetería en funcionamiento ni un equipo de atención al cliente.",

      "demo-label": "FORMULARIO DE DEMOSTRACIÓN",
      "demo-description":
        "Este formulario es solo una demostración. Los mensajes no se envían, guardan ni reciben.",

      "name-label": "Tu nombre",
      "email-label": "Correo electrónico",
      "message-label": "Tu mensaje",

      "submit-label": "Preparar mi notita",
      "form-footnote":
        "Tu información permanece en este formulario del navegador. No se transmite ni almacena.",

      "success-eyebrow": "TU PEQUEÑA NOTITA",
      "success-title": [
        "Un pequeño",
        "",
        "hola."
      ],
      "success-description":
        "Tu notita está lista. Esto es una demostración, así que no se envió nada.",
      "reset-label": "Escribir otra notita",

      "ending-eyebrow": "UN POQUITO MÁS",
      "ending-title": [
        "Quedate por los",
        "",
        "pequeños momentos."
      ],
      "ending-shop": "Explorá nuestros cafés ↗",
      "ending-story": "Leé nuestra historia ↗",

      "footer-tagline": "Un poco de café. Muchas emociones.",
      "footer-one":
        "Coficito. · Un poco de café. Muchas emociones.",
      "footer-two":
        "Cafetería conceptual ficticia · Round Rock, Texas",
      "footer-three":
        "Un concepto de marca de BEMA Studios."
    }
  };

  const placeholders = {
    en: {
      name: "What should we call you?",
      email: "you@example.com",
      message: "Tell us a little something..."
    },

    es: {
      name: "¿Cómo te llamás?",
      email: "tu@ejemplo.com",
      message: "Contanos algo lindo..."
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
      `[data-contact="${key}"]`
    );

    if (element) {
      element.textContent = value;
    }
  }

  function setHeading(key, parts) {
    const element = document.querySelector(
      `[data-contact="${key}"]`
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
      "editorial-title",
      "success-title",
      "ending-title"
    ].forEach(key => {
      setHeading(key, data[key]);
    });

    const name = document.querySelector("#contact-name");
    const email = document.querySelector("#contact-email");
    const message = document.querySelector("#contact-message");

    if (name) {
      name.placeholder = placeholders[language].name;
    }

    if (email) {
      email.placeholder = placeholders[language].email;
    }

    if (message) {
      message.placeholder = placeholders[language].message;
    }

    document.title = language === "es"
      ? "Contacto — Coficito."
      : "Contact — Coficito.";

    const description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.content = language === "es"
        ? "Dejanos una notita en Coficito, una marca ficticia de café de especialidad creada por BEMA Studios."
        : "Leave a little note for Coficito. A fictional specialty coffee brand concept by BEMA Studios.";
    }
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

  window.CoficitoContactI18n = {
    getLanguage,
    translate: applyTranslations
  };

})();
