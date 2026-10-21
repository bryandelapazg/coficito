
"use strict";

/* ==========================================
   COFICITO — INTERACTIVE BREW JOURNAL
========================================== */

const RECIPES = {
  v60: {
    title: "V60 Pour Over",
    kicker: "01 / SLOW & THOUGHTFUL",
    description:
      "A gentle, balanced cup made one careful pour at a time.",
    coffee: "Colombia Huila",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    measurements: [
      { label: "Coffee", amount: 15, unit: "g" },
      { label: "Water", amount: 250, unit: "ml" }
    ],
    steps: [
      {
        title: "Heat the water",
        detail: "Aim for approximately 93°C / 200°F."
      },
      {
        title: "Prepare the filter",
        detail: "Place the filter in the V60 and rinse with hot water."
      },
      {
        title: "Add your coffee",
        detail: "Use medium-fine ground coffee and level the bed."
      },
      {
        title: "Bloom",
        detail: "Add a little water to wet the grounds. Wait about 30 seconds."
      },
      {
        title: "Pour slowly",
        detail: "Continue pouring in gentle circles. Aim for a total brew time of around 2:30–3:30."
      }
    ]
  },

  french: {
    title: "French Press",
    kicker: "02 / RICH & COMFORTING",
    description:
      "A full-bodied little ritual with a wonderfully simple process.",
    coffee: "Brazil Cerrado",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85",
    measurements: [
      { label: "Coffee", amount: 16, unit: "g" },
      { label: "Water", amount: 250, unit: "ml" }
    ],
    steps: [
      {
        title: "Heat the water",
        detail: "Aim for approximately 94°C / 201°F."
      },
      {
        title: "Add ground coffee",
        detail: "Use a coarse grind and place it in the press."
      },
      {
        title: "Pour the water",
        detail: "Saturate the grounds evenly."
      },
      {
        title: "Let it steep",
        detail: "Wait approximately four minutes."
      },
      {
        title: "Press and serve",
        detail: "Lower the plunger slowly and pour the coffee into cups."
      }
    ]
  },

  aeropress: {
    title: "AeroPress",
    kicker: "03 / QUICK & PLAYFUL",
    description:
      "A compact little ritual for a smooth, flavorful cup.",
    coffee: "Ethiopia Sidama",
    image:
      "https://images.unsplash.com/photo-1517256673644-36ad11246d21?auto=format&fit=crop&w=1200&q=85",
    measurements: [
      { label: "Coffee", amount: 15, unit: "g" },
      { label: "Water", amount: 220, unit: "ml" }
    ],
    steps: [
      {
        title: "Prepare your AeroPress",
        detail: "Place a filter in the cap and rinse it."
      },
      {
        title: "Add ground coffee",
        detail: "Use a medium-fine grind."
      },
      {
        title: "Add hot water",
        detail: "Use water around 90°C / 194°F."
      },
      {
        title: "Stir and steep",
        detail: "Stir gently and allow approximately one minute."
      },
      {
        title: "Press gently",
        detail: "Press steadily into a sturdy cup. For multiple servings, brew in batches as needed."
      }
    ]
  },

  espresso: {
    title: "Espresso",
    kicker: "04 / SMALL & BOLD",
    description:
      "A concentrated little moment, full of character.",
    coffee: "Brazil Cerrado",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85",
    measurements: [
      { label: "Ground coffee", amount: 18, unit: "g" },
      { label: "Espresso yield", amount: 36, unit: "g" }
    ],
    steps: [
      {
        title: "Warm the machine",
        detail: "Preheat the machine, portafilter and cup."
      },
      {
        title: "Grind your coffee",
        detail: "Use a fine espresso grind."
      },
      {
        title: "Prepare the puck",
        detail: "Distribute the coffee evenly and tamp level."
      },
      {
        title: "Pull the shot",
        detail: "Aim for approximately 25–30 seconds, adjusting grind to taste."
      },
      {
        title: "Enjoy immediately",
        detail: "For multiple cups, repeat the extraction using the appropriate basket dose."
      }
    ]
  }
};

const STORAGE_KEY = "coficito_recipe_session_v1";

const DEFAULT_STATE = {
  v60: { cups: 1, completed: [] },
  french: { cups: 1, completed: [] },
  aeropress: { cups: 1, completed: [] },
  espresso: { cups: 1, completed: [] }
};

function loadRecipeState() {
  let saved = {};

  try {
    saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    saved = {};
  }

  const result = {};

  for (const [id, recipe] of Object.entries(RECIPES)) {
    const entry = saved[id] || {};
    const validCups =
      Number.isInteger(entry.cups) &&
      entry.cups >= 1 &&
      entry.cups <= 4
        ? entry.cups
        : 1;

    const completed = Array.isArray(entry.completed)
      ? [...new Set(entry.completed)].filter(
          index =>
            Number.isInteger(index) &&
            index >= 0 &&
            index < recipe.steps.length
        )
      : [];

    result[id] = {
      cups: validCups,
      completed
    };
  }

  return result;
}

let recipeState = loadRecipeState();
let activeRecipe = "v60";

function saveRecipeState() {
  try {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(recipeState)
    );
  } catch {
    // The recipe still works if browser storage is disabled.
  }
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

function renderMeasurements() {
  const recipe = RECIPES[activeRecipe];
  const cups = recipeState[activeRecipe].cups;
  const container = document.querySelector("#recipe-measurements");

  container.replaceChildren();

  recipe.measurements.forEach(item => {
    const card = makeElement("div", "recipe-measurement");
    const label = makeElement("span", "", item.label);
    const value = makeElement(
      "strong",
      "",
      `${item.amount * cups} ${item.unit}`
    );

    card.append(label, value);
    container.append(card);
  });

  document.querySelector("#cups-value").textContent = cups;
  document.querySelector("#cups-minus").disabled = cups <= 1;
  document.querySelector("#cups-plus").disabled = cups >= 4;
}

function renderProgress() {
  const recipe = RECIPES[activeRecipe];
  const completed = recipeState[activeRecipe].completed.length;
  const total = recipe.steps.length;
  const percentage = Math.round((completed / total) * 100);

  document.querySelector("#recipe-progress-label").textContent =
    `${completed} of ${total} steps`;

  document.querySelector("#recipe-progress-fill").style.width =
    `${percentage}%`;

  document.querySelector("#recipe-progress-bar")
    .setAttribute("aria-valuenow", percentage);

  document.querySelector("#recipe-completion").textContent =
    completed === total
      ? "Your little ritual is complete. Enjoy your coffee. ♡"
      : "";
}

function toggleStep(index, checked) {
  const completed = recipeState[activeRecipe].completed;

  if (checked && !completed.includes(index)) {
    completed.push(index);
  }

  if (!checked) {
    recipeState[activeRecipe].completed =
      completed.filter(item => item !== index);
  }

  saveRecipeState();
  renderProgress();
}

function renderSteps() {
  const recipe = RECIPES[activeRecipe];
  const completed = recipeState[activeRecipe].completed;
  const container = document.querySelector("#recipe-steps");

  container.replaceChildren();

  recipe.steps.forEach((step, index) => {
    const label = makeElement("label", "recipe-step");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = completed.includes(index);
    checkbox.setAttribute(
      "aria-label",
      `Complete step ${index + 1}: ${step.title}`
    );

    const copy = makeElement("span", "recipe-step-copy");
    const title = makeElement(
      "strong",
      "",
      `${String(index + 1).padStart(2, "0")} / ${step.title}`
    );
    const detail = makeElement("small", "", step.detail);

    checkbox.addEventListener("change", () => {
      toggleStep(index, checkbox.checked);
    });

    copy.append(title, detail);
    label.append(checkbox, copy);
    container.append(label);
  });

  renderProgress();
}

function renderRecipe() {
  const recipe = RECIPES[activeRecipe];

  document.querySelector("#recipe-kicker").textContent =
    recipe.kicker;

  document.querySelector("#recipe-title").textContent =
    recipe.title;

  document.querySelector("#recipe-description").textContent =
    recipe.description;

  document.querySelector("#recipe-coffee").textContent =
    recipe.coffee;

  const photo = document.querySelector("#recipe-photo");
  photo.src = recipe.image;
  photo.alt = `${recipe.title} brewing ritual`;

  document.querySelectorAll("[data-recipe]").forEach(button => {
    const selected = button.dataset.recipe === activeRecipe;

    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  renderMeasurements();
  renderSteps();
}

document.addEventListener("DOMContentLoaded", () => {
  const minus = document.querySelector("#cups-minus");
  const plus = document.querySelector("#cups-plus");
  const reset = document.querySelector("#recipe-reset");

  document.querySelectorAll("[data-recipe]").forEach(button => {
    button.addEventListener("click", () => {
      activeRecipe = button.dataset.recipe;
      renderRecipe();
    });
  });

  minus.addEventListener("click", () => {
    const state = recipeState[activeRecipe];
    state.cups = Math.max(1, state.cups - 1);
    saveRecipeState();
    renderMeasurements();
  });

  plus.addEventListener("click", () => {
    const state = recipeState[activeRecipe];
    state.cups = Math.min(4, state.cups + 1);
    saveRecipeState();
    renderMeasurements();
  });

  reset.addEventListener("click", () => {
    recipeState[activeRecipe].completed = [];
    saveRecipeState();
    renderSteps();
  });

  const menuButton = document.querySelector(".recipes-menu-toggle");
  const mobileNav = document.querySelector("#recipes-mobile-nav");

  menuButton?.addEventListener("click", () => {
    const opening = mobileNav.hidden;
    mobileNav.hidden = !opening;
    menuButton.setAttribute("aria-expanded", String(opening));
    menuButton.setAttribute(
      "aria-label",
      opening ? "Close menu" : "Open menu"
    );
  });

  renderRecipe();
});
