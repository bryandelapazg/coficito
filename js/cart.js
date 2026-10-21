
/* ==========================================================
   COFICITO — CART & QUICK VIEW
   BEMA Studios | Concept Store
   ========================================================== */

(() => {
  "use strict";

  const STORAGE_KEY = "coficito-cart";
function t(key) {
  return window.CoficitoI18n?.translate(key) || key;
}

function productName(product) {
  return t(`product.${product.id}.name`);
}

function productDescription(product) {
  return t(`product.${product.id}.description`);
}

function productCategory(product) {
  const categoryKey = product.coffee
    ? "category.coffee"
    : ["dripper", "cup", "filters"].includes(product.id)
      ? "category.essentials"
      : "category.merch";

  return t(categoryKey);
}
  /* ========================================================
     PRODUCTS
     ======================================================== */

  const products = {
    colombia: {
      id: "colombia",
      name: "Colombia Huila",
      category: "SPECIALTY COFFEE",
      description:
        "A comforting everyday coffee with notes of caramel, citrus and milk chocolate. Medium roast.",
      price: 22,
      price500: 39,
      coffee: true,
      image: "../assets/images/products/coficito-colombia-huila.webp",
      imageAlt: "Coficito Colombia Huila coffee bag",
      color: "#87916A"
    },

    ethiopia: {
      id: "ethiopia",
      name: "Ethiopia Sidama",
      category: "SPECIALTY COFFEE",
      description:
        "Bright and delicate, with floral notes, red berries and black tea. Light roast.",
      price: 24,
      price500: 43,
      coffee: true,
      image: "../assets/images/products/coficito-ethiopia-sidama.webp",
      imageAlt: "Coficito Ethiopia Sidama coffee bag",
      color: "#D7A779"
    },

    brazil: {
      id: "brazil",
      name: "Brazil Cerrado",
      category: "SPECIALTY COFFEE",
      description:
        "Rich and smooth, with notes of dark chocolate, hazelnut and brown sugar. Medium-dark roast.",
      price: 21,
      price500: 37,
      coffee: true,
      image: "../assets/images/products/coficito-brazil-cerrado.webp",
      imageAlt: "Coficito Brazil Cerrado coffee bag",
      color: "#432C24"
    },

    dripper: {
      id: "dripper",
      name: "Ceramic Dripper",
      category: "LITTLE ESSENTIALS",
      description:
        "A beautiful ceramic dripper for slow and thoughtful mornings.",
      price: 28,
      coffee: false,
      image: "../assets/images/products/coficito-ceramic-dripper.webp",
      imageAlt: "Coficito Ceramic Dripper",
      symbol: "◡",
      color: "#F2E8D8"
    },

    cup: {
      id: "cup",
      name: "Everyday Cup",
      category: "LITTLE ESSENTIALS",
      description:
        "Your little everyday companion, made for comforting coffee moments.",
      price: 18,
      coffee: false,
      image: "../assets/images/products/coficito-everyday-cup.webp",
      imageAlt: "Coficito Everyday Cup",
      symbol: "○",
      color: "#F2E8D8"
    },

    filters: {
      id: "filters",
      name: "Pour-Over Filters",
      category: "LITTLE ESSENTIALS",
      description:
        "40 filters for your perfect little pour-over ritual.",
      price: 9,
      coffee: false,
      image: "../assets/images/products/coficito-pour-over-filters.webp",
      imageAlt: "Coficito Pour-Over Filters, 40-count box",
      symbol: "⌁",
      color: "#F2E8D8"
    },

    tote: {
      id: "tote",
      name: "The Little Tote",
      category: "EVERYDAY MERCH",
      description:
        "Carry the little things with a little Coficito.",
      price: 24,
      coffee: false,
      image: "../assets/images/products/coficito-little-tote.webp",
      imageAlt: "Coficito The Little Tote canvas bag",
      symbol: "co.",
      color: "#F2E8D8"
    },

    cap: {
      id: "cap",
      name: "Everyday Cap",
      category: "EVERYDAY MERCH",
      description:
        "A simple everyday essential for wherever the day takes you.",
      price: 29,
      coffee: false,
      image: "../assets/images/products/coficito-everyday-cap.webp",
      imageAlt: "Coficito Everyday Cap",
      symbol: "co.",
      color: "#432C24"
    }
  };

  /* ========================================================
     DOM ELEMENTS
     ======================================================== */

  const $ = selector => document.querySelector(selector);

  const quickViewBackdrop = $("#quick-view-backdrop");
  const quickViewModal = $("#quick-view-modal");
  const quickViewClose = $("#quick-view-close");
  const quickViewImage = $("#quick-view-image");
  const quickViewCategory = $("#quick-view-category");
  const quickViewTitle = $("#quick-view-title");
  const quickViewDescription = $("#quick-view-description");
  const quickViewPrice = $("#quick-view-price");
  const quickViewForm = $("#quick-view-form");

  const coffeeOptions = $("#coffee-options");
  const productWeight = $("#product-weight");
  const productGrind = $("#product-grind");
  const productQuantity = $("#product-quantity");

  const cartToggle = $(".cart-toggle");
  const cartBackdrop = $("#cart-backdrop");
  const cartDrawer = $("#cart-drawer");
  const cartClose = $("#cart-close");
  const cartItems = $("#cart-items");
  const cartSubtotal = $("#cart-subtotal");
  const cartCount = $("#cart-count");
  const cartToast = $("#cart-toast");

  /* ========================================================
     STATE
     ======================================================== */

  let activeProduct = null;
  let cart = loadCart();
  let lastFocusedElement = null;
  let toastTimeout = null;
  let currentOverlay = null;

  /* ========================================================
     HELPERS
     ======================================================== */

  function formatMoney(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(value);
  }

  function clampQuantity(value, max = 20) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
      return 1;
    }

    return Math.min(
      max,
      Math.max(1, Math.floor(number))
    );
  }

  function createElement(tag, className = "", text = null) {
    const element = document.createElement(tag);

    if (className) {
      element.className = className;
    }

    if (text !== null) {
      element.textContent = text;
    }

    return element;
  }

  function loadCart() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (!stored) return [];

      const parsed = JSON.parse(stored);

      if (!Array.isArray(parsed)) return [];

      return parsed
        .filter(item => item && products[item.id])
        .map(item => {
          const product = products[item.id];

          return {
            id: item.id,
            weight: product.coffee
              ? (String(item.weight) === "500" ? "500" : "250")
              : null,
            grind: product.coffee
              ? (
                  [
                    "Whole Bean",
                    "Espresso",
                    "Pour Over",
                    "French Press"
                  ].includes(item.grind)
                    ? item.grind
                    : "Whole Bean"
                )
              : null,
            quantity: clampQuantity(item.quantity, 99)
          };
        });
    } catch (error) {
      console.warn("Could not load Coficito bag:", error);
      return [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cart)
      );
    } catch (error) {
      console.warn("Could not save Coficito bag:", error);
    }
  }

  function getPrice(item) {
    const product = products[item.id];

    if (!product) return 0;

    return product.coffee && item.weight === "500"
      ? product.price500
      : product.price;
  }

  function getItemKey(item) {
    return [
      item.id,
      item.weight || "",
      item.grind || ""
    ].join("|");
  }

  function getSubtotal() {
    return cart.reduce(
      (total, item) => total + getPrice(item) * item.quantity,
      0
    );
  }

  function getTotalQuantity() {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  /* ========================================================
     ACCESSIBILITY
     ======================================================== */

  function getFocusableElements(container) {
    if (!container) return [];

    return Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter(element => element.getClientRects().length > 0);
  }

  function trapFocus(event, container) {
    if (event.key !== "Tab" || !container) return;

    const focusable = getFocusableElements(container);

    if (!focusable.length) {
      event.preventDefault();
      container.focus();
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
  }

  function openOverlay(backdrop, dialog) {
    if (!backdrop) return;

    if (!currentOverlay) {
      lastFocusedElement = document.activeElement;
    }

    backdrop.hidden = false;
    currentOverlay = backdrop;
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      if (dialog) dialog.focus();
    });
  }

  function closeOverlay(backdrop, restore = true) {
    if (!backdrop) return;

    backdrop.hidden = true;

    if (currentOverlay === backdrop) {
      currentOverlay = null;
    }

    const anotherOpen =
      (quickViewBackdrop && !quickViewBackdrop.hidden) ||
      (cartBackdrop && !cartBackdrop.hidden);

    if (!anotherOpen) {
      document.body.style.overflow = "";

      if (
        restore &&
        lastFocusedElement &&
        document.contains(lastFocusedElement)
      ) {
        lastFocusedElement.focus();
      }
    }
  }

  /* ========================================================
     PRODUCT IMAGE
     ======================================================== */

  function renderQuickViewImage(product) {
    if (!quickViewImage) return;

    quickViewImage.replaceChildren();
    quickViewImage.style.backgroundColor =
      product.color || "#F2E8D8";

    function showFallback() {
      quickViewImage.replaceChildren();

      const fallback = createElement(
        "span",
        "",
        product.symbol || "co."
      );

      quickViewImage.appendChild(fallback);
    }

    if (!product.image) {
      showFallback();
      return;
    }

    const image = document.createElement("img");

    image.src = product.image;
    image.alt = product.imageAlt || product.name;
    image.loading = "eager";
    image.decoding = "async";

    image.style.display = "block";
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit = "cover";
    image.style.objectPosition = "center";

    image.addEventListener("error", () => {
      if (activeProduct?.id === product.id) {
        showFallback();
      }
    });

    quickViewImage.appendChild(image);
  }

  /* ========================================================
     QUICK VIEW
     ======================================================== */

  function updateQuickViewPrice() {
    if (!activeProduct || !quickViewPrice) return;

    const weight = productWeight?.value || "250";

    const price =
      activeProduct.coffee && weight === "500"
        ? activeProduct.price500
        : activeProduct.price;

    quickViewPrice.textContent = formatMoney(price);
  }

  function openQuickView(productId) {
    const product = products[productId];

    if (!product || !quickViewBackdrop) return;

    activeProduct = product;

    renderQuickViewImage(product);

 if (quickViewCategory) {
  quickViewCategory.textContent = productCategory(product);
}

if (quickViewTitle) {
  quickViewTitle.textContent = productName(product);
}

if (quickViewDescription) {
  quickViewDescription.textContent = productDescription(product);
}

    if (coffeeOptions) {
      coffeeOptions.hidden = !product.coffee;
    }

    if (productWeight) {
      productWeight.value = "250";
    }

    if (productGrind) {
      productGrind.value = "Whole Bean";
    }

    if (productQuantity) {
      productQuantity.value = "1";
    }

    updateQuickViewPrice();
    openOverlay(quickViewBackdrop, quickViewModal);
  }

  function closeQuickView(restore = true) {
    closeOverlay(quickViewBackdrop, restore);
    activeProduct = null;
  }

  /* ========================================================
     ADD TO CART
     ======================================================== */

  function addToCart(item) {
    const product = products[item.id];

    if (!product) return;

    const key = getItemKey(item);

    const existing = cart.find(
      cartItem => getItemKey(cartItem) === key
    );

    if (existing) {
      existing.quantity = Math.min(
        99,
        existing.quantity + item.quantity
      );
    } else {
      cart.push({
        ...item,
        quantity: clampQuantity(item.quantity, 99)
      });
    }

    saveCart();
    document.addEventListener(
  "coficito:languagechange",
  () => {
    renderCart();

    if (
      activeProduct &&
      quickViewBackdrop &&
      !quickViewBackdrop.hidden
    ) {
      if (quickViewCategory) {
        quickViewCategory.textContent =
          productCategory(activeProduct);
      }

      if (quickViewTitle) {
        quickViewTitle.textContent =
          productName(activeProduct);
      }

      if (quickViewDescription) {
        quickViewDescription.textContent =
          productDescription(activeProduct);
      }
    }
  }
);
    renderCart(productName(product));
    showToast(product.name + " added to your bag.");
  }

  function changeCartQuantity(key, change) {
    const item = cart.find(
      cartItem => getItemKey(cartItem) === key
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
      cart = cart.filter(
        cartItem => getItemKey(cartItem) !== key
      );
    } else {
      item.quantity = Math.min(99, item.quantity);
    }

    saveCart();
    renderCart();
  }

  function removeCartItem(key) {
    cart = cart.filter(
      item => getItemKey(item) !== key
    );

    saveCart();
    renderCart();
    showToast("Item removed from your bag.");
  }

  function clearCart() {
    cart = [];

    saveCart();
    renderCart();
    showToast("Your little bag is now empty.");
  }

  /* ========================================================
     CART RENDERING
     ======================================================== */

  function renderCart() {
    if (!cartItems) return;

    cartItems.replaceChildren();

    if (cart.length === 0) {
      const empty = createElement("div", "cart-empty");

      empty.appendChild(
        createElement(
          "p",
          "",
          "Your little bag is empty."
        )
      );

      empty.appendChild(
        createElement(
          "p",
          "",
          "A lovely coffee ritual is waiting for you."
        )
      );

      cartItems.appendChild(empty);
    } else {
      cart.forEach(item => {
        const product = products[item.id];
        if (!product) return;

        const key = getItemKey(item);

        const row = createElement("div", "cart-item");
        const info = createElement("div", "cart-item-info");

        info.appendChild(
          createElement(
            "h3",
            "cart-item-name",
            product.name
          )
        );

        if (product.coffee) {
          info.appendChild(
            createElement(
              "p",
              "cart-item-details",
              item.weight + " g · " + item.grind
            )
          );
        }

        info.appendChild(
          createElement(
            "p",
            "cart-item-price",
            formatMoney(getPrice(item) * item.quantity)
          )
        );

        const controls = createElement(
          "div",
          "cart-quantity-controls"
        );

        const decrease = createElement(
          "button",
          "cart-qty-button",
          "−"
        );

        decrease.type = "button";
        decrease.setAttribute(
          "aria-label",
          "Decrease quantity of " + product.name
        );
        decrease.addEventListener("click", () => {
          changeCartQuantity(key, -1);
        });

        const quantity = createElement(
          "span",
          "cart-quantity-value",
          String(item.quantity)
        );

        const increase = createElement(
          "button",
          "cart-qty-button",
          "+"
        );

        increase.type = "button";
        increase.disabled = item.quantity >= 99;
        increase.setAttribute(
          "aria-label",
          "Increase quantity of " + product.name
        );
        increase.addEventListener("click", () => {
          changeCartQuantity(key, 1);
        });

        controls.append(decrease, quantity, increase);

        const remove = createElement(
          "button",
          "cart-remove",
          "Remove"
        );

        remove.type = "button";
        remove.addEventListener("click", () => {
          removeCartItem(key);
        });

        info.appendChild(controls);
        info.appendChild(remove);

        row.appendChild(info);
        cartItems.appendChild(row);
      });
    }

    if (cartSubtotal) {
      cartSubtotal.textContent = formatMoney(getSubtotal());
    }

    if (cartCount) {
      const count = getTotalQuantity();
      cartCount.textContent = String(count);
      cartCount.hidden = count === 0;
    }

    if (cart.length > 0) {
      const clearButton = createElement(
        "button",
        "cart-clear",
        "Clear bag"
      );

      clearButton.type = "button";
      clearButton.addEventListener("click", clearCart);

      cartItems.appendChild(clearButton);
    }
  }

  /* ========================================================
     CART DRAWER
     ======================================================== */

  function openCart() {
    if (!cartBackdrop) return;

    renderCart();
    openOverlay(cartBackdrop, cartDrawer);
  }

  function closeCart() {
    closeOverlay(cartBackdrop);
  }

  /* ========================================================
     TOAST
     ======================================================== */

  function showToast(message) {
    if (!cartToast) return;

    clearTimeout(toastTimeout);

    cartToast.textContent = message;
    cartToast.classList.add("is-visible");

    toastTimeout = setTimeout(() => {
      cartToast.classList.remove("is-visible");
    }, 2800);
  }

  /* ========================================================
     EVENT LISTENERS
     ======================================================== */

  document.querySelectorAll("[data-quick-view]").forEach(button => {
    button.addEventListener("click", () => {
      openQuickView(button.dataset.quickView);
    });
  });

  quickViewClose?.addEventListener("click", () => {
    closeQuickView();
  });

  quickViewBackdrop?.addEventListener("click", event => {
    if (event.target === quickViewBackdrop) {
      closeQuickView();
    }
  });

  productWeight?.addEventListener(
    "change",
    updateQuickViewPrice
  );

  quickViewForm?.addEventListener("submit", event => {
    event.preventDefault();

    if (!activeProduct) return;

    const item = {
      id: activeProduct.id,
      weight: activeProduct.coffee
        ? (productWeight?.value || "250")
        : null,
      grind: activeProduct.coffee
        ? (productGrind?.value || "Whole Bean")
        : null,
      quantity: clampQuantity(
        productQuantity?.value || 1
      )
    };

    addToCart(item);

    closeQuickView(false);
    openCart();
  });

  cartToggle?.addEventListener("click", openCart);

  cartClose?.addEventListener("click", closeCart);

  cartBackdrop?.addEventListener("click", event => {
    if (event.target === cartBackdrop) {
      closeCart();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      if (quickViewBackdrop && !quickViewBackdrop.hidden) {
        closeQuickView();
        return;
      }

      if (cartBackdrop && !cartBackdrop.hidden) {
        closeCart();
        return;
      }
    }

    if (quickViewBackdrop && !quickViewBackdrop.hidden) {
      trapFocus(event, quickViewModal);
    } else if (cartBackdrop && !cartBackdrop.hidden) {
      trapFocus(event, cartDrawer);
    }
  });

  /* ========================================================
     INITIALIZE
     ======================================================== */

  renderCart();

})();
