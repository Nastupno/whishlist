const STORAGE_KEY = "wishlist:gifts";
const DISCLAIMER_KEY = "wishlist:disclaimer";
const EDITOR_MODE_KEY = "wishlist:editorMode";
const VISITOR_COMMENTS_KEY = "wishlist:visitorComments";
const SHARE_NOTICE_KEY = "wishlist:shareNotice";
const DEFAULTS_SEEDED_KEY = "wishlist:defaultsSeeded";
const DEFAULTS_VERSION_KEY = "wishlist:defaultsVersion";
const CURRENT_DEFAULTS_VERSION = "2026-05-01-wishlist-1";
const LAYOUT_REPAIR_VERSION_KEY = "wishlist:layoutRepairVersion";
const CURRENT_LAYOUT_REPAIR_VERSION = "2026-04-30-restore4";
const FREE_LAYOUT_BASE_WIDTH = 1120;

const DEFAULT_GIFTS = [
  {
    id: "gold-accessories",
    name: "Золотые аксессуары",
    link: "",
    price: "",
    comment: "Украшения или маленькие золотые детали, которые легко носить каждый день.",
    photo: "",
    variant: "wide",
    size: "normal",
    marked: false,
    createdAt: 1777482000000,
    updatedAt: 1777482000000,
  },
  {
    id: "leather-wallet-photo-window",
    name: "Кожаный кошелек с окошком для фото",
    link: "",
    price: "",
    comment: "Хочу кожаный кошелек, где есть прозрачная штучка для фотографии.",
    photo: "",
    variant: "ticket",
    size: "normal",
    marked: false,
    createdAt: 1777482001000,
    updatedAt: 1777482001000,
  },
  {
    id: "money",
    name: "Money",
    link: "",
    price: "",
    comment: "Деньги тоже отличный подарок.",
    photo: "",
    variant: "capsule",
    size: "normal",
    marked: false,
    createdAt: 1777482002000,
    updatedAt: 1777482002000,
  },
  {
    id: "beach-vibe-things",
    name: "Вещи с beach vibe",
    link: "",
    price: "",
    comment: "Все, что ощущается как пляж, солнце, море и отпуск.",
    photo: "",
    variant: "split",
    size: "large",
    marked: false,
    createdAt: 1777482003000,
    updatedAt: 1777482003000,
  },
  {
    id: "funko-pop",
    name: "Funko Pop",
    link: "",
    price: "",
    comment: "Фигурка Funko Pop из персонажей, которые мне могут понравиться.",
    photo: "",
    variant: "circle",
    size: "normal",
    marked: false,
    createdAt: 1777482004000,
    updatedAt: 1777482004000,
  },
  {
    id: "photo-locket-pendant",
    name: "Подвеска для фотографии",
    link: "",
    price: "",
    comment: "Подвеска, в которую можно запихнуть маленькую фотографию.",
    photo: "",
    variant: "oval",
    size: "normal",
    marked: false,
    createdAt: 1777482005000,
    updatedAt: 1777482005000,
  },
  {
    id: "marilyn-tshirt",
    name: "Конкретная футболка с Мэрилин",
    link: "",
    price: "",
    comment: "Та самая футболка с Мэрилин. Если есть ссылка или фото, можно добавить позже.",
    photo: "",
    variant: "slab",
    size: "large",
    marked: false,
    createdAt: 1777482006000,
    updatedAt: 1777482006000,
  },
  {
    id: "board-keychain",
    name: "Конкретный брелок с доской",
    link: "",
    price: "",
    comment: "Брелок с доской. Конкретную ссылку или картинку можно прикрепить потом.",
    photo: "",
    variant: "stamp",
    size: "normal",
    marked: false,
    createdAt: 1777482007000,
    updatedAt: 1777482007000,
  },
  {
    id: "jellycat-toy",
    name: "Игрушка Jellycat",
    link: "",
    price: "",
    comment: "Мягкая игрушка Jellycat.",
    photo: "",
    variant: "mini",
    size: "normal",
    marked: false,
    createdAt: 1777482008000,
    updatedAt: 1777482008000,
  },
  {
    id: "shared-activities",
    name: "Совместные активности",
    link: "",
    price: "",
    comment: "Разные активности вместе: куда-то сходить, что-то попробовать, устроить маленькое приключение.",
    photo: "",
    variant: "text",
    size: "large",
    marked: false,
    createdAt: 1777482009000,
    updatedAt: 1777482009000,
  },
  {
    id: "skincare",
    name: "Уходовая косметика",
    link: "",
    price: "",
    comment: "Косметика для ухода: приятная, полезная, красивая.",
    photo: "",
    variant: "wide",
    size: "normal",
    marked: false,
    createdAt: 1777482010000,
    updatedAt: 1777482010000,
  },
  {
    id: "surprise-me",
    name: "То, что вам кажется моим",
    link: "",
    price: "",
    comment: "Подарок, который вы сами подумаете, что мне бы понравился. Со звездочкой.",
    reservedText: "со звездочкой",
    photo: "",
    variant: "ticket",
    size: "large",
    marked: true,
    createdAt: 1777482011000,
    updatedAt: 1777482011000,
  },
];

const LEGACY_DEFAULT_GIFT_IDS = new Set([
  "744fac7e-fcff-489b-b6be-87f97bada8c8",
  "62b09974-473d-48c5-8460-e7501fbf725f",
  "f4c9cd7a-9135-4296-a568-c3c4a0557e91",
  "b8ecf31f-6fdf-4f0c-a554-fabe5922a407",
  "8e947ee1-f0a2-4a92-8ba6-dc4e6eefc395",
  "d49f0f0c-8900-4807-b389-ff35a14319a3",
  "f01dea01-c49a-4bca-94d1-4a6349a3b11d",
  "dfb4dba7-6412-47c4-afa5-12372c4be81c",
  "0d785aee-efcc-46a8-91ec-a2f91b5adbe6",
  "f822acf1-6fd6-47f8-959b-58ed4c681282",
  "2f5beab3-16ef-4922-8179-a33c5e9d6ad2",
]);

const appRoot = document.querySelector("#appRoot");
const newGiftButton = document.querySelector("#newGiftButton");
const arrangeButton = document.querySelector("#arrangeButton");
const editorModeButton = document.querySelector("#editorModeButton");
const templates = {
  home: document.querySelector("#homeTemplate"),
  empty: document.querySelector("#emptyTemplate"),
  form: document.querySelector("#formTemplate"),
  disclaimer: document.querySelector("#disclaimerTemplate"),
};

const icons = {
  gift: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 28h40v28H12z" />
      <path d="M8 18h48v12H8zM32 18v38" />
      <path d="M21 18c-7-6-3-13 4-11 4 1 7 11 7 11M43 18c7-6 3-13-4-11-4 1-7 11-7 11" />
    </svg>
  `,
  external: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  `,
  edit: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  `,
  trash: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6 18 20H6L5 6" />
      <path d="M10 11v5M14 11v5" />
    </svg>
  `,
  check: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m20 6-11 11-5-5" />
    </svg>
  `,
};

const cardVariants = ["wide", "ticket", "oval", "split", "circle", "slab", "capsule", "stamp", "text", "mini"];
const selectableVariants = new Set(["wide", "capsule", "circle", "oval", "ticket", "stamp", "split", "slab", "text", "mini"]);
const selectableSizes = new Set(["small", "normal", "large"]);

let pendingPhoto = "";
let isArrangeMode = false;
let draggedGiftId = "";
let pointerDrag = null;
let isEditorMode = localStorage.getItem(EDITOR_MODE_KEY) === "true";

newGiftButton.addEventListener("click", () => {
  if (!isEditorMode) {
    return;
  }

  isArrangeMode = false;
  location.hash = "#/new";
});

arrangeButton.addEventListener("click", () => {
  if (!isEditorMode) {
    return;
  }

  isArrangeMode = !isArrangeMode;

  if (parseRoute().view !== "home") {
    location.hash = "#/";
    return;
  }

  renderHome();
});

editorModeButton.addEventListener("click", () => {
  isEditorMode = !isEditorMode;
  localStorage.setItem(EDITOR_MODE_KEY, isEditorMode ? "true" : "false");
  if (!isEditorMode) {
    isArrangeMode = false;
  }
  render();
});

window.addEventListener("hashchange", () => {
  if (importSharedGiftsFromHash()) {
    return;
  }

  render();
});
window.addEventListener("DOMContentLoaded", () => {
  if (importSharedGiftsFromHash()) {
    return;
  }

  if (!location.hash) {
    location.hash = "#/";
    return;
  }

  render();
});

function render() {
  const route = parseRoute();
  const isHome = route.view === "home";

  updateEditorControls(isHome);
  arrangeButton.setAttribute("aria-pressed", isArrangeMode ? "true" : "false");
  document.body.classList.toggle("is-arranging", isHome && isArrangeMode && isEditorMode);

  if (route.view === "disclaimer") {
    if (isEditorMode) {
      renderDisclaimerForm();
    } else {
      renderDisclaimerView();
    }
    return;
  }

  if (route.view === "gift") {
    renderGiftView(route.id);
    return;
  }

  if (route.view === "new" || route.view === "edit") {
    if (!isEditorMode) {
      location.hash = "#/";
      return;
    }

    renderForm(route.id);
    return;
  }

  renderHome();
}

function parseRoute() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);

  if (parts[0] === "new") {
    return { view: "new" };
  }

  if (parts[0] === "disclaimer") {
    return { view: "disclaimer" };
  }

  if (parts[0] === "gift" && parts[1]) {
    return { view: "gift", id: parts[1] };
  }

  if (parts[0] === "edit" && parts[1]) {
    return { view: "edit", id: parts[1] };
  }

  if (parts[0] === "share" && parts[1]) {
    return { view: "share", payload: parts[1] };
  }

  return { view: "home" };
}

function updateEditorControls(isHome = parseRoute().view === "home") {
  document.body.classList.toggle("is-editor-mode", isEditorMode);
  editorModeButton.textContent = isEditorMode ? "Editor on" : "View only";
  editorModeButton.setAttribute("aria-pressed", isEditorMode ? "true" : "false");
  arrangeButton.hidden = !isHome || !isEditorMode;
  newGiftButton.hidden = !isEditorMode;
}

function getGifts() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === null) {
      return seedDefaultGifts();
    }

    const parsed = JSON.parse(stored || "[]");

    if (Array.isArray(parsed)) {
      if (shouldRefreshDefaultGifts(parsed)) {
        return seedDefaultGifts();
      }

      if (!parsed.length && DEFAULT_GIFTS.length && !localStorage.getItem(DEFAULTS_SEEDED_KEY)) {
        return seedDefaultGifts();
      }

      return parsed;
    }

    return [];
  } catch {
    return [];
  }
}

function saveGifts(gifts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gifts));
}

function getDisclaimer() {
  return String(localStorage.getItem(DISCLAIMER_KEY) || "").trim();
}

function saveDisclaimer(disclaimer) {
  const text = String(disclaimer || "").trim();

  if (!text) {
    localStorage.removeItem(DISCLAIMER_KEY);
    return;
  }

  localStorage.setItem(DISCLAIMER_KEY, text);
}

function getVisitorComments() {
  try {
    const parsed = JSON.parse(localStorage.getItem(VISITOR_COMMENTS_KEY) || "{}");

    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function getGiftVisitorComments(giftId) {
  const comments = getVisitorComments()[giftId];

  return Array.isArray(comments) ? comments : [];
}

function saveGiftVisitorComment(giftId, text) {
  const comment = String(text || "").trim();

  if (!comment) {
    return;
  }

  const comments = getVisitorComments();
  const giftComments = Array.isArray(comments[giftId]) ? comments[giftId] : [];

  comments[giftId] = [
    ...giftComments,
    {
      id: createId(),
      text: comment.slice(0, 400),
      createdAt: Date.now(),
    },
  ];
  localStorage.setItem(VISITOR_COMMENTS_KEY, JSON.stringify(comments));
}

function seedDefaultGifts() {
  const gifts = DEFAULT_GIFTS.map((gift, index) => ({ ...gift, order: index }));

  saveGifts(gifts);
  localStorage.setItem(DEFAULTS_SEEDED_KEY, "1");
  localStorage.setItem(DEFAULTS_VERSION_KEY, CURRENT_DEFAULTS_VERSION);
  return gifts;
}

function shouldRefreshDefaultGifts(gifts) {
  if (!gifts.length || gifts.length > DEFAULT_GIFTS.length) {
    return false;
  }

  const defaultGiftIds = new Set(DEFAULT_GIFTS.map((gift) => gift.id));
  const hasOnlyLegacyDefaults = gifts.every((gift) => LEGACY_DEFAULT_GIFT_IDS.has(gift.id));

  if (hasOnlyLegacyDefaults) {
    return true;
  }

  if (localStorage.getItem(DEFAULTS_VERSION_KEY) === CURRENT_DEFAULTS_VERSION) {
    return false;
  }

  return gifts.every((gift) => defaultGiftIds.has(gift.id) || LEGACY_DEFAULT_GIFT_IDS.has(gift.id));
}

function renderHome() {
  pendingPhoto = "";
  const fragment = templates.home.content.cloneNode(true);
  appRoot.replaceChildren(fragment);

  let gifts = getOrderedGifts();
  const disclaimer = getDisclaimer();
  const grid = document.querySelector("#giftGrid");
  const addButton = document.querySelector("#addGiftFromHome");
  const addMenu = document.querySelector("#addChoiceMenu");
  const heroDisclaimerButton = document.querySelector("#heroDisclaimerButton");

  document.querySelector("#giftCount").textContent = String(gifts.length);
  document.querySelector("#giftCountWord").textContent = getGiftWord(gifts.length);
  document.body.classList.toggle("is-arranging", isArrangeMode && isEditorMode);
  arrangeButton.setAttribute("aria-pressed", isArrangeMode ? "true" : "false");
  arrangeButton.title = isArrangeMode ? "Закончить перемещение" : "Переместить подарки";
  arrangeButton.setAttribute("aria-label", isArrangeMode ? "Закончить перемещение" : "Переместить подарки");
  addButton.hidden = !isEditorMode;
  addMenu.hidden = true;
  document.querySelector("#shareWishlistButton").hidden = !isEditorMode;
  addButton.addEventListener("click", () => {
    if (!isEditorMode) {
      return;
    }

    const isOpen = !addMenu.hidden;

    addMenu.hidden = isOpen;
    addButton.setAttribute("aria-expanded", isOpen ? "false" : "true");
  });
  document.querySelector("#addPresentButton").addEventListener("click", () => {
    location.hash = "#/new";
  });
  document.querySelector("#addDisclaimerButton").addEventListener("click", () => {
    location.hash = "#/disclaimer";
  });
  heroDisclaimerButton.addEventListener("click", () => {
    location.hash = "#/disclaimer";
  });
  heroDisclaimerButton.hidden = !disclaimer;
  document.querySelector("#shareWishlistButton").addEventListener("click", shareWishlist);
  document.querySelector("#copyShareLinkButton").addEventListener("click", copyVisibleShareLink);
  document.querySelector("#shareLinkInput").addEventListener("focus", (event) => {
    event.target.select();
  });
  document.addEventListener("click", closeAddMenuOnOutsideClick, { once: true });
  showQueuedShareNotice();

  if (!gifts.length) {
    grid.replaceWith(templates.empty.content.cloneNode(true));
    document.querySelector("#addFirstGift").addEventListener("click", () => {
      location.hash = "#/new";
    });
    return;
  }

  gifts = repairGiftLayoutsIfNeeded(gifts);

  const hasFreeLayout = isArrangeMode && isEditorMode;
  grid.classList.toggle("gift-mosaic--free", hasFreeLayout);
  grid.replaceChildren(...gifts.map((gift, index) => createGiftCard(gift, index, hasFreeLayout)));
  if (hasFreeLayout) {
    setFreeGridHeight(grid);
  }
}

function closeAddMenuOnOutsideClick(event) {
  const addButton = document.querySelector("#addGiftFromHome");
  const addMenu = document.querySelector("#addChoiceMenu");

  if (!addButton || !addMenu || addMenu.hidden) {
    return;
  }

  if (addButton.contains(event.target) || addMenu.contains(event.target)) {
    document.addEventListener("click", closeAddMenuOnOutsideClick, { once: true });
    return;
  }

  addMenu.hidden = true;
  addButton.setAttribute("aria-expanded", "false");
}

function createGiftCard(gift, index = 0, useFreeLayout = false) {
  const variant = getGiftVariant(gift, index);
  const size = getGiftSize(gift);
  const card = document.createElement("article");
  card.className = `gift-card gift-card--${variant} gift-card--${size}${gift.marked ? " gift-card--marked" : ""}`;
  card.dataset.giftId = gift.id;
  if (useFreeLayout) {
    const layout = getGiftLayout(gift, index);
    const displayLayout = getResponsiveGiftLayout(layout);

    card.classList.add("is-free-position");
    card.dataset.layoutScale = String(displayLayout.scale);
    card.style.left = `${displayLayout.x}%`;
    card.style.top = `${displayLayout.y}px`;
    card.style.width = `${displayLayout.w}%`;
    card.style.height = `${displayLayout.h}px`;
  }
  card.draggable = false;
  card.addEventListener("dragstart", handleGiftDragStart);
  card.addEventListener("dragover", handleGiftDragOver);
  card.addEventListener("dragleave", handleGiftDragLeave);
  card.addEventListener("drop", handleGiftDrop);
  card.addEventListener("dragend", handleGiftDragEnd);
  card.addEventListener("pointerdown", handleGiftPointerDown);
  card.addEventListener("pointermove", handleGiftPointerMove);
  card.addEventListener("pointerup", handleGiftPointerUp);
  card.addEventListener("pointercancel", handleGiftPointerCancel);
  card.addEventListener("click", (event) => {
    if (isEditorMode || event.target.closest("button, a, .resize-handle, .arrange-card-controls")) {
      return;
    }

    location.hash = `#/gift/${gift.id}`;
  });

  const reservedSticker = !isEditorMode && gift.marked ? createReservedSticker(gift) : null;

  const photo = document.createElement("div");
  photo.className = "gift-photo";
  if (gift.photo) {
    const image = document.createElement("img");
    image.src = gift.photo;
    image.alt = gift.name;
    photo.append(image);
  } else {
    const placeholder = document.createElement("span");
    placeholder.className = "photo-placeholder";
    placeholder.innerHTML = icons.gift;
    photo.append(placeholder);
  }

  const content = document.createElement("div");
  content.className = "gift-content";

  const titleRow = document.createElement("div");
  titleRow.className = "gift-title-row";

  const title = document.createElement("h2");
  title.className = "gift-title";
  title.textContent = gift.name;

  titleRow.append(title);

  if (gift.price) {
    const price = document.createElement("span");
    price.className = "gift-price";
    price.textContent = formatPrice(Number(gift.price));
    titleRow.append(price);
  }

  const comment = document.createElement("p");
  comment.className = "gift-comment";
  comment.textContent = isEditorMode ? gift.comment || "Комментария нет" : gift.comment ? "Комментарий от меня есть" : "Комментария от меня нет";

  content.append(titleRow, comment);

  const actions = document.createElement("div");
  actions.className = `gift-actions${isEditorMode ? "" : " gift-actions--viewer"}`;

  const linkButton = gift.link ? document.createElement("a") : document.createElement("button");
  linkButton.className = gift.link ? "icon-button link-button" : "icon-button link-disabled";
  linkButton.innerHTML = icons.external;
  linkButton.setAttribute("aria-label", gift.link ? "Открыть ссылку" : "Ссылки нет");
  linkButton.setAttribute("title", gift.link ? "Открыть ссылку" : "Ссылки нет");
  if (gift.link) {
    linkButton.href = gift.link;
    linkButton.target = "_blank";
    linkButton.rel = "noreferrer";
  } else {
    linkButton.type = "button";
    linkButton.disabled = true;
  }

  const resizeHandle = document.createElement("span");
  resizeHandle.className = "resize-handle";
  resizeHandle.setAttribute("aria-hidden", "true");
  resizeHandle.addEventListener("pointerdown", handleGiftResizePointerDown);

  const arrangeControls = createArrangeControls(gift);

  actions.append(linkButton);

  if (!isEditorMode) {
    const reserveButton = document.createElement("button");
    reserveButton.className = `icon-button reserve-action${gift.marked ? " is-marked" : ""}`;
    reserveButton.type = "button";
    reserveButton.innerHTML = icons.check;
    reserveButton.setAttribute("aria-label", gift.marked ? "Убрать отметку" : "Отметить подарок");
    reserveButton.setAttribute("aria-pressed", gift.marked ? "true" : "false");
    reserveButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleGiftMarked(gift.id);
    });

    const commentButton = document.createElement("button");

    commentButton.className = "icon-button comment-button";
    commentButton.type = "button";
    commentButton.textContent = "Коммент.";
    commentButton.setAttribute("aria-label", "Читать комментарии");
    commentButton.addEventListener("click", (event) => {
      event.stopPropagation();
      location.hash = `#/gift/${gift.id}`;
    });
    actions.append(reserveButton, commentButton);
  }

  if (isEditorMode) {
    const markButton = document.createElement("button");
    markButton.className = `icon-button mark-action${gift.marked ? " is-marked" : ""}`;
    markButton.type = "button";
    markButton.innerHTML = icons.check;
    markButton.setAttribute("aria-label", gift.marked ? "Убрать reserved" : "Поставить reserved");
    markButton.setAttribute("aria-pressed", gift.marked ? "true" : "false");
    markButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleGiftMarked(gift.id);
    });

    const editButton = document.createElement("button");
    editButton.className = "icon-button";
    editButton.type = "button";
    editButton.innerHTML = icons.edit;
    editButton.setAttribute("aria-label", "Редактировать");
    editButton.setAttribute("title", "Редактировать");
    editButton.addEventListener("click", () => {
      location.hash = `#/edit/${gift.id}`;
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "icon-button danger-button";
    deleteButton.type = "button";
    deleteButton.innerHTML = icons.trash;
    deleteButton.setAttribute("aria-label", "Удалить");
    deleteButton.setAttribute("title", "Удалить");
    deleteButton.addEventListener("click", () => deleteGift(gift.id));

    actions.append(markButton, editButton, deleteButton);
  }

  card.append(photo, content, actions, arrangeControls, resizeHandle);
  if (reservedSticker) {
    card.append(reservedSticker);
  }
  return card;
}

function createReservedSticker(gift) {
  const sticker = document.createElement("button");

  sticker.className = "reserved-toggle is-marked";
  sticker.type = "button";
  sticker.textContent = getReservedText(gift);
  sticker.setAttribute("aria-label", "Убрать reserved");
  sticker.setAttribute("aria-pressed", "true");
  sticker.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleGiftMarked(gift.id);
  });

  return sticker;
}

function createArrangeControls(gift) {
  const controls = document.createElement("div");
  controls.className = "arrange-card-controls";
  controls.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });

  const shapeButton = document.createElement("button");
  shapeButton.type = "button";
  shapeButton.textContent = "Ф";
  shapeButton.title = "Поменять форму";
  shapeButton.setAttribute("aria-label", "Поменять форму");
  shapeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    cycleGiftVariant(gift.id);
  });

  const sizeButton = document.createElement("button");
  sizeButton.type = "button";
  sizeButton.textContent = getGiftSize(gift).toUpperCase().slice(0, 1);
  sizeButton.title = "Поменять размер";
  sizeButton.setAttribute("aria-label", "Поменять размер");
  sizeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    cycleGiftSize(gift.id);
  });

  controls.append(shapeButton, sizeButton);
  return controls;
}

function renderForm(giftId) {
  const gifts = getGifts();
  const gift = giftId ? gifts.find((item) => item.id === giftId) : null;

  if (giftId && !gift) {
    location.hash = "#/";
    return;
  }

  pendingPhoto = gift?.photo || "";
  appRoot.replaceChildren(templates.form.content.cloneNode(true));

  const form = document.querySelector("#giftForm");
  const formMode = document.querySelector("#formMode");
  const formTitle = document.querySelector("#formTitle");
  const nameInput = document.querySelector("#nameInput");
  const linkInput = document.querySelector("#linkInput");
  const priceInput = document.querySelector("#priceInput");
  const commentInput = document.querySelector("#commentInput");
  const photoInput = document.querySelector("#photoInput");
  const variantInput = document.querySelector("#variantInput");
  const sizeInput = document.querySelector("#sizeInput");
  const formError = document.querySelector("#formError");

  if (gift) {
    formMode.textContent = "Редактирование";
    formTitle.textContent = "Редактировать подарок";
    nameInput.value = gift.name;
    linkInput.value = gift.link || "";
    priceInput.value = gift.price || "";
    commentInput.value = gift.comment || "";
    variantInput.value = getGiftVariant(gift, 0);
    sizeInput.value = getGiftSize(gift);
    renderPhotoPreview(pendingPhoto);
  }

  setupOptionButtons("#variantOptions", "#variantInput");
  setupOptionButtons("#sizeOptions", "#sizeInput");
  document.querySelector("#backButton").addEventListener("click", goHome);
  document.querySelector("#cancelButton").addEventListener("click", goHome);

  photoInput.addEventListener("change", async (event) => {
    const [file] = event.target.files || [];

    if (!file) {
      return;
    }

    try {
      pendingPhoto = await prepareImage(file);
      renderPhotoPreview(pendingPhoto);
      formError.textContent = "";
    } catch (error) {
      formError.textContent = error.message;
      photoInput.value = "";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const link = normalizeLink(String(formData.get("link") || "").trim());
    const price = String(formData.get("price") || "").trim();
    const comment = String(formData.get("comment") || "").trim();
    const variant = normalizeVariant(String(formData.get("variant") || ""));
    const size = normalizeSize(String(formData.get("size") || ""));

    if (!name) {
      formError.textContent = "Укажите название подарка.";
      nameInput.focus();
      return;
    }

    if (link && !isValidUrl(link)) {
      formError.textContent = "Проверьте ссылку.";
      linkInput.focus();
      return;
    }

    if (price && Number(price) < 0) {
      formError.textContent = "Цена не может быть меньше нуля.";
      priceInput.focus();
      return;
    }

    const nextGift = {
      id: gift?.id || createId(),
      name,
      link,
      price,
      comment,
      reservedText: gift?.reservedText || "",
      photo: pendingPhoto,
      variant,
      size,
      layout: gift?.layout || null,
      marked: gift?.marked || false,
      createdAt: gift?.createdAt || Date.now(),
      order: gift?.order ?? getNextGiftOrder(gifts),
      updatedAt: Date.now(),
    };

    const nextGifts = gift
      ? gifts.map((item) => (item.id === gift.id ? nextGift : item))
      : [...gifts, nextGift];

    try {
      saveGifts(nextGifts);
      goHome();
    } catch {
      formError.textContent = "Не удалось сохранить подарок. Попробуйте фото меньшего размера.";
    }
  });
}

function renderDisclaimerForm() {
  appRoot.replaceChildren(templates.disclaimer.content.cloneNode(true));

  const form = document.querySelector("#disclaimerForm");
  const input = document.querySelector("#disclaimerInput");
  const error = document.querySelector("#disclaimerError");
  const currentDisclaimer = getDisclaimer();

  input.value = currentDisclaimer;
  document.querySelector("#disclaimerBackButton").addEventListener("click", goHome);
  document.querySelector("#cancelDisclaimerButton").addEventListener("click", goHome);
  document.querySelector("#deleteDisclaimerButton").addEventListener("click", () => {
    saveDisclaimer("");
    goHome();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();

    if (!text) {
      error.textContent = "Напиши текст disclaimer или нажми «Удалить».";
      input.focus();
      return;
    }

    saveDisclaimer(text);
    goHome();
  });
}

function renderDisclaimerView() {
  const disclaimer = getDisclaimer();

  appRoot.replaceChildren(createReadPage({
    eyebrow: "Wishlist board",
    title: "Disclaimer",
    body: disclaimer || "Disclaimer пока не добавлен.",
  }));
}

function renderGiftView(giftId) {
  const gift = getGifts().find((item) => item.id === giftId);

  if (!gift) {
    location.hash = "#/";
    return;
  }

  appRoot.replaceChildren(createReadPage({
    eyebrow: "Подарок",
    title: gift.name,
    body: gift.comment || "Комментария от меня нет.",
    photo: gift.photo || "",
    link: gift.link || "",
    giftId: gift.id,
  }));
}

function createReadPage({ eyebrow, title, body, photo = "", link = "", giftId = "" }) {
  const section = document.createElement("section");
  section.className = "read-page";

  const heading = document.createElement("div");
  heading.className = "form-heading";

  const backButton = document.createElement("button");
  backButton.className = "icon-button";
  backButton.type = "button";
  backButton.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>`;
  backButton.setAttribute("aria-label", "Назад");
  backButton.addEventListener("click", goHome);

  const headingText = document.createElement("div");
  const eyebrowElement = document.createElement("p");
  eyebrowElement.className = "eyebrow";
  eyebrowElement.textContent = eyebrow;
  const titleElement = document.createElement("h1");
  titleElement.textContent = title;
  headingText.append(eyebrowElement, titleElement);
  heading.append(backButton, headingText);

  const card = document.createElement("article");
  card.className = "read-card";

  if (photo) {
    const image = document.createElement("img");
    image.src = photo;
    image.alt = title;
    card.append(image);
  }

  const ownerComment = document.createElement("div");
  ownerComment.className = "owner-comment";
  const ownerLabel = document.createElement("span");
  ownerLabel.textContent = giftId ? "Комментарий от меня" : "Текст";
  const ownerText = document.createElement("p");
  ownerText.textContent = body;
  ownerComment.append(ownerLabel, ownerText);
  card.append(ownerComment);

  if (giftId) {
    card.append(createVisitorCommentsBlock(giftId));
  }

  const actions = document.createElement("div");
  actions.className = "read-actions";

  if (giftId) {
    const markButton = document.createElement("button");
    const gift = getGifts().find((item) => item.id === giftId);

    markButton.className = "secondary-button";
    markButton.type = "button";
    markButton.textContent = gift?.marked ? `Убрать ${getReservedText(gift)}` : getReservedText(gift);
    markButton.addEventListener("click", () => {
      toggleGiftMarked(giftId);
      renderGiftView(giftId);
    });
    actions.append(markButton);
  }

  if (link) {
    const linkButton = document.createElement("a");

    linkButton.className = "primary-button";
    linkButton.href = link;
    linkButton.target = "_blank";
    linkButton.rel = "noreferrer";
    linkButton.textContent = "Открыть ссылку";
    actions.append(linkButton);
  }

  if (actions.children.length) {
    card.append(actions);
  }

  section.append(heading, card);
  return section;
}

function createVisitorCommentsBlock(giftId) {
  const block = document.createElement("div");
  block.className = "visitor-comments";

  const title = document.createElement("h2");
  title.textContent = "Комментарии гостей";

  const list = document.createElement("div");
  list.className = "visitor-comment-list";

  const comments = getGiftVisitorComments(giftId);

  if (!comments.length) {
    const empty = document.createElement("p");

    empty.className = "visitor-comment-empty";
    empty.textContent = "Пока никто не оставил комментарий.";
    list.append(empty);
  } else {
    comments.forEach((comment) => {
      const item = document.createElement("p");

      item.className = "visitor-comment";
      item.textContent = comment.text;
      list.append(item);
    });
  }

  const form = document.createElement("form");
  form.className = "visitor-comment-form";

  const textarea = document.createElement("textarea");
  textarea.name = "comment";
  textarea.rows = 3;
  textarea.maxLength = 400;
  textarea.placeholder = "Оставить комментарий";

  const button = document.createElement("button");
  button.className = "primary-button";
  button.type = "submit";
  button.textContent = "Добавить";

  form.append(textarea, button);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveGiftVisitorComment(giftId, textarea.value);
    renderGiftView(giftId);
  });

  block.append(title, list, form);
  return block;
}

function deleteGift(id) {
  const gifts = getGifts();
  const gift = gifts.find((item) => item.id === id);
  const shouldDelete = confirm(`Удалить "${gift?.name || "подарок"}"?`);

  if (!shouldDelete) {
    return;
  }

  saveGifts(gifts.filter((item) => item.id !== id));
  renderHome();
}

function getOrderedGifts() {
  const gifts = getGifts();

  if (!gifts.length) {
    return [];
  }

  if (gifts.some((gift) => !Number.isFinite(gift.order))) {
    const orderedGifts = [...gifts]
      .sort((a, b) => b.createdAt - a.createdAt)
      .map((gift, index) => ({ ...gift, order: Number.isFinite(gift.order) ? gift.order : index }));

    saveGifts(orderedGifts);
    return orderedGifts.sort((a, b) => a.order - b.order);
  }

  return [...gifts].sort((a, b) => a.order - b.order || b.createdAt - a.createdAt);
}

function getNextGiftOrder(gifts) {
  const orders = gifts.map((gift) => gift.order).filter(Number.isFinite);

  return orders.length ? Math.min(...orders) - 1 : 0;
}

function getGiftVariant(gift, index = 0) {
  return normalizeVariant(gift.variant || cardVariants[index % cardVariants.length]);
}

function getGiftSize(gift) {
  return normalizeSize(gift.size || "normal");
}

function getReservedText(gift) {
  return String(gift?.reservedText || "reserved").trim().slice(0, 24) || "reserved";
}

function normalizeVariant(variant) {
  return selectableVariants.has(variant) ? variant : "wide";
}

function normalizeSize(size) {
  return selectableSizes.has(size) ? size : "normal";
}

function setupOptionButtons(optionsSelector, inputSelector) {
  const options = document.querySelector(optionsSelector);
  const input = document.querySelector(inputSelector);

  if (!options || !input) {
    return;
  }

  const syncSelection = (value) => {
    input.value = value;
    options.querySelectorAll("button").forEach((button) => {
      const isSelected = button.dataset.value === value;

      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", isSelected ? "true" : "false");
    });
  };

  syncSelection(input.value);

  options.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-value]");

    if (!button) {
      return;
    }

    syncSelection(button.dataset.value);
  });
}

function handleGiftDragStart(event) {
  if (!isArrangeMode) {
    event.preventDefault();
    return;
  }

  draggedGiftId = event.currentTarget.dataset.giftId || "";
  event.currentTarget.classList.add("is-dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", draggedGiftId);
}

function handleGiftDragOver(event) {
  if (!isArrangeMode || !draggedGiftId) {
    return;
  }

  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  event.currentTarget.classList.add("is-drop-target");
}

function handleGiftDragLeave(event) {
  event.currentTarget.classList.remove("is-drop-target");
}

function handleGiftDrop(event) {
  if (!isArrangeMode) {
    return;
  }

  event.preventDefault();
  event.currentTarget.classList.remove("is-drop-target");
  reorderGifts(draggedGiftId || event.dataTransfer.getData("text/plain"), event.currentTarget.dataset.giftId);
}

function handleGiftDragEnd(event) {
  draggedGiftId = "";
  event.currentTarget.classList.remove("is-dragging");
  document.querySelectorAll(".gift-card.is-drop-target").forEach((card) => card.classList.remove("is-drop-target"));
}

function handleGiftPointerDown(event) {
  if (!isArrangeMode || event.button !== 0 || event.target.closest("button, a, .resize-handle, .arrange-card-controls")) {
    return;
  }

  const card = event.currentTarget;
  const layout = getLayoutFromCard(card);

  event.preventDefault();
  draggedGiftId = card.dataset.giftId || "";
  pointerDrag = {
    card,
    id: draggedGiftId,
    type: "move",
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    startLayout: layout,
  };
  card.setPointerCapture(event.pointerId);
  card.classList.add("is-pointer-dragging");
  document.body.classList.add("is-dragging-card");
}

function handleGiftPointerMove(event) {
  if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) {
    return;
  }

  const deltaX = event.clientX - pointerDrag.startX;
  const deltaY = event.clientY - pointerDrag.startY;
  const card = pointerDrag.card;

  if (pointerDrag.type === "resize") {
    updateCardSize(card, pointerDrag.startLayout, deltaX, deltaY);
  } else {
    updateCardPosition(card, pointerDrag.startLayout, deltaX, deltaY);
  }

  setFreeGridHeight(card.parentElement);
}

function handleGiftPointerUp(event) {
  if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) {
    return;
  }

  const { card, id } = pointerDrag;
  const layout = getLayoutFromCard(card);

  cleanupPointerDrag();
  saveGiftLayout(id, layout);
}

function handleGiftPointerCancel(event) {
  if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) {
    return;
  }

  cleanupPointerDrag();
}

function cleanupPointerDrag() {
  if (!pointerDrag) {
    return;
  }

  const { card } = pointerDrag;

  card.classList.remove("is-pointer-dragging");
  card.classList.remove("is-resizing");
  pointerDrag = null;
  draggedGiftId = "";
  document.body.classList.remove("is-dragging-card");
  document.querySelectorAll(".gift-card.is-drop-target").forEach((cardItem) => cardItem.classList.remove("is-drop-target"));
}

function handleGiftResizePointerDown(event) {
  if (!isArrangeMode || event.button !== 0) {
    return;
  }

  const card = event.currentTarget.closest(".gift-card");

  if (!card) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  draggedGiftId = card.dataset.giftId || "";
  pointerDrag = {
    card,
    id: draggedGiftId,
    type: "resize",
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    startLayout: getLayoutFromCard(card),
  };
  card.setPointerCapture(event.pointerId);
  card.classList.add("is-pointer-dragging", "is-resizing");
  document.body.classList.add("is-dragging-card");
}

function getGiftLayout(gift, index = 0) {
  if (isValidLayout(gift.layout)) {
    return normalizeGiftLayout(gift.layout);
  }

  const column = index % 3;
  const row = Math.floor(index / 3);
  const widthBySize = {
    small: 24,
    normal: 31,
    large: 42,
  };
  const heightBySize = {
    small: 210,
    normal: 280,
    large: 350,
  };
  const size = getGiftSize(gift);

  return {
    x: Math.min(column * 33.5, 100 - widthBySize[size]),
    y: row * 330,
    w: widthBySize[size],
    h: heightBySize[size],
  };
}

function repairGiftLayoutsIfNeeded(gifts) {
  if (localStorage.getItem(LAYOUT_REPAIR_VERSION_KEY) === CURRENT_LAYOUT_REPAIR_VERSION) {
    return gifts;
  }

  let changed = false;
  const repairedGifts = gifts.map((gift) => {
    if (!isValidLayout(gift.layout)) {
      return gift;
    }

    const layout = normalizeGiftLayout(gift.layout);
    const isSame =
      layout.x === gift.layout.x &&
      layout.y === gift.layout.y &&
      layout.w === gift.layout.w &&
      layout.h === gift.layout.h;

    if (isSame) {
      return gift;
    }

    changed = true;
    return { ...gift, layout };
  });

  if (changed) {
    saveGifts(repairedGifts);
  }

  localStorage.setItem(LAYOUT_REPAIR_VERSION_KEY, CURRENT_LAYOUT_REPAIR_VERSION);
  return repairedGifts;
}

function normalizeGiftLayout(layout) {
  const width = clamp(Number(layout.w) || 31, 18, 48);
  const height = clamp(Number(layout.h) || 280, 150, 680);

  return {
    x: roundLayoutValue(clamp(Number(layout.x) || 0, 0, Math.max(0, 100 - width))),
    y: roundLayoutValue(clamp(Number(layout.y) || 0, 0, 8000)),
    w: roundLayoutValue(width),
    h: roundLayoutValue(height),
  };
}

function getResponsiveGiftLayout(layout) {
  const width = Math.max(document.querySelector("#giftGrid")?.clientWidth || FREE_LAYOUT_BASE_WIDTH, 1);
  const scale = width < 760 ? clamp(width / FREE_LAYOUT_BASE_WIDTH, 0.58, 1) : 1;
  const minWidth = width < 560 ? 42 : width < 900 ? 24 : 18;
  const maxWidth = width < 560 ? 92 : width < 900 ? 68 : 48;
  const displayWidth = clamp(layout.w, minWidth, maxWidth);
  const displayX = clamp(layout.x, 0, Math.max(0, 100 - displayWidth));
  const maxHeight = width < 560 ? 620 : width < 900 ? 620 : 680;

  return {
    x: displayX,
    y: Math.round(layout.y * scale),
    w: displayWidth,
    h: Math.round(clamp(layout.h, 150, maxHeight) * scale),
    scale,
  };
}

function isValidLayout(layout) {
  return (
    layout &&
    Number.isFinite(layout.x) &&
    Number.isFinite(layout.y) &&
    Number.isFinite(layout.w) &&
    Number.isFinite(layout.h)
  );
}

function getLayoutFromCard(card) {
  const grid = card.parentElement;
  const gridWidth = Math.max(1, grid.clientWidth);
  const scale = Number(card.dataset.layoutScale) || 1;

  return {
    x: (parseFloat(card.style.left) || 0),
    y: (parseFloat(card.style.top) || 0) / scale,
    w: ((card.offsetWidth || gridWidth * 0.3) / gridWidth) * 100,
    h: (card.offsetHeight || 280) / scale,
  };
}

function updateCardPosition(card, startLayout, deltaX, deltaY) {
  const grid = card.parentElement;
  const gridWidth = Math.max(1, grid.clientWidth);
  const scale = Number(card.dataset.layoutScale) || 1;
  const widthPx = (startLayout.w / 100) * gridWidth;
  const nextLeftPx = (startLayout.x / 100) * gridWidth + deltaX;
  const nextX = clamp((nextLeftPx / gridWidth) * 100, 0, Math.max(0, 100 - startLayout.w));
  const nextY = Math.max(0, startLayout.y * scale + deltaY);

  card.style.left = `${nextX}%`;
  card.style.top = `${nextY}px`;
  card.style.width = `${(widthPx / gridWidth) * 100}%`;
  card.style.height = `${startLayout.h * scale}px`;
}

function updateCardSize(card, startLayout, deltaX, deltaY) {
  const grid = card.parentElement;
  const gridWidth = Math.max(1, grid.clientWidth);
  const scale = Number(card.dataset.layoutScale) || 1;
  const startWidthPx = (startLayout.w / 100) * gridWidth;
  const nextWidthPx = clamp(startWidthPx + deltaX, 160, gridWidth * 0.48);
  const nextHeight = clamp(startLayout.h * scale + deltaY, 120, 680 * scale);
  const maxWidthPct = Math.max(12, 100 - startLayout.x);
  const nextWidthPct = clamp((nextWidthPx / gridWidth) * 100, 16, maxWidthPct);

  card.style.width = `${nextWidthPct}%`;
  card.style.height = `${nextHeight}px`;
}

function saveGiftLayout(id, layout) {
  const gifts = getGifts();
  const safeLayout = normalizeGiftLayout(layout);
  const nextGifts = gifts.map((gift) =>
    gift.id === id
      ? {
          ...gift,
          layout: safeLayout,
          updatedAt: Date.now(),
        }
      : gift,
  );

  saveGifts(nextGifts);
}

function cycleGiftVariant(id) {
  const scrollY = window.scrollY;
  const variants = ["wide", "capsule", "circle", "oval", "ticket", "stamp", "split", "slab", "text", "mini"];
  const gifts = getGifts();
  const nextGifts = gifts.map((gift) => {
    if (gift.id !== id) {
      return gift;
    }

    const currentIndex = Math.max(0, variants.indexOf(getGiftVariant(gift, 0)));

    return {
      ...gift,
      variant: variants[(currentIndex + 1) % variants.length],
      updatedAt: Date.now(),
    };
  });

  saveGifts(nextGifts);
  renderHome();
  requestAnimationFrame(() => window.scrollTo(window.scrollX, scrollY));
}

function cycleGiftSize(id) {
  const scrollY = window.scrollY;
  const sizes = ["small", "normal", "large"];
  const sizeDelta = {
    small: { w: 24, h: 210 },
    normal: { w: 31, h: 280 },
    large: { w: 42, h: 350 },
  };
  const gifts = getGifts();
  const nextGifts = gifts.map((gift, index) => {
    if (gift.id !== id) {
      return gift;
    }

    const nextSize = sizes[(Math.max(0, sizes.indexOf(getGiftSize(gift))) + 1) % sizes.length];
    const layout = getGiftLayout(gift, index);
    const nextLayout = {
      ...layout,
      w: Math.min(sizeDelta[nextSize].w, 100 - layout.x),
      h: sizeDelta[nextSize].h,
    };

    return {
      ...gift,
      size: nextSize,
      layout: nextLayout,
      updatedAt: Date.now(),
    };
  });

  saveGifts(nextGifts);
  renderHome();
  requestAnimationFrame(() => window.scrollTo(window.scrollX, scrollY));
}

function setFreeGridHeight(grid) {
  if (!grid) {
    return;
  }

  const cards = Array.from(grid.querySelectorAll(".gift-card.is-free-position"));
  const bottom = cards.reduce((max, card) => {
    const top = parseFloat(card.style.top) || 0;

    return Math.max(max, top + card.offsetHeight);
  }, 0);

  grid.style.minHeight = `${Math.max(420, bottom + 34)}px`;
}

function roundLayoutValue(value) {
  return Math.round(value * 10) / 10;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function reorderGifts(sourceId, targetId, clientX = 0, clientY = 0) {
  if (!sourceId || !targetId || sourceId === targetId) {
    return;
  }

  const gifts = getOrderedGifts();
  const sourceIndex = gifts.findIndex((gift) => gift.id === sourceId);
  const targetIndex = gifts.findIndex((gift) => gift.id === targetId);

  if (sourceIndex < 0 || targetIndex < 0) {
    return;
  }

  const [sourceGift] = gifts.splice(sourceIndex, 1);
  const targetCard = document.querySelector(`.gift-card[data-gift-id="${CSS.escape(targetId)}"]`);
  const rect = targetCard?.getBoundingClientRect();
  const shouldInsertAfter =
    rect &&
    (clientY > rect.top + rect.height / 2 || (Math.abs(clientY - (rect.top + rect.height / 2)) < 16 && clientX > rect.left + rect.width / 2));
  const adjustedTargetIndex = sourceIndex < targetIndex ? targetIndex - 1 : targetIndex;
  const insertIndex = adjustedTargetIndex + (shouldInsertAfter ? 1 : 0);

  gifts.splice(Math.max(0, Math.min(insertIndex, gifts.length)), 0, sourceGift);
  saveGifts(gifts.map((gift, index) => ({ ...gift, order: index, updatedAt: Date.now() })));
  renderHome();
}

function toggleGiftMarked(id) {
  const scrollY = window.scrollY;
  const gifts = getGifts();
  const nextGifts = gifts.map((gift) =>
    gift.id === id ? { ...gift, marked: !gift.marked, updatedAt: Date.now() } : gift,
  );

  saveGifts(nextGifts);
  renderHome();
  requestAnimationFrame(() => window.scrollTo(window.scrollX, scrollY));
}

function goHome() {
  location.hash = "#/";
}

async function shareWishlist() {
  const gifts = getGifts().sort((a, b) => b.createdAt - a.createdAt);

  if (!gifts.length) {
    setShareStatus("Сначала добавь хотя бы один подарок.");
    return;
  }

  const shareLink = areDefaultGifts(gifts) ? getPublicWishlistUrl() : createShareLink(gifts);
  showShareLink(shareLink);

  try {
    await navigator.clipboard.writeText(shareLink);
    setShareStatus(
      shareLink.length > 120000
        ? "Ссылка скопирована, но из-за фото она получилась длинной."
        : "Ссылка с подарками скопирована.",
    );
  } catch {
    setShareStatus("Ссылка готова. Скопируй её из поля ниже.");
  }
}

async function copyVisibleShareLink() {
  const input = document.querySelector("#shareLinkInput");
  const shareLink = input?.value || "";

  if (!shareLink) {
    setShareStatus("Сначала нажми «Поделиться».");
    return;
  }

  input.select();

  try {
    await navigator.clipboard.writeText(shareLink);
    setShareStatus("Ссылка скопирована.");
  } catch {
    setShareStatus("Не получилось скопировать автоматически. Ссылка выделена.");
  }
}

function createShareLink(gifts) {
  const payload = encodeSharePayload({
    version: 1,
    gifts: gifts.map(getShareableGift),
  });
  const baseUrl = location.href.replace(/#.*$/, "");

  return `${baseUrl}#/share/${payload}`;
}

function getPublicWishlistUrl() {
  return `${location.href.replace(/#.*$/, "")}#/`;
}

function getShareableGift(gift) {
  return {
    id: gift.id,
    name: gift.name,
    link: gift.link || "",
    price: gift.price || "",
    comment: gift.comment || "",
    reservedText: getReservedText(gift),
    photo: gift.photo || "",
    variant: gift.variant || "",
    size: gift.size || "",
    order: Number.isFinite(gift.order) ? gift.order : "",
    layout: isValidLayout(gift.layout) ? gift.layout : null,
    marked: Boolean(gift.marked),
    createdAt: gift.createdAt || Date.now(),
    updatedAt: gift.updatedAt || Date.now(),
  };
}

function areDefaultGifts(gifts) {
  if (gifts.length !== DEFAULT_GIFTS.length) {
    return false;
  }

  const currentGifts = gifts.map(getShareableGift).sort((a, b) => a.id.localeCompare(b.id));
  const defaultGifts = DEFAULT_GIFTS.map((gift, index) => getShareableGift({ ...gift, order: index })).sort((a, b) =>
    a.id.localeCompare(b.id),
  );

  return JSON.stringify(currentGifts) === JSON.stringify(defaultGifts);
}

function importSharedGiftsFromHash() {
  const route = parseRoute();

  if (route.view !== "share") {
    return false;
  }

  try {
    const shared = decodeSharePayload(route.payload);
    const incomingGifts = sanitizeSharedGifts(shared.gifts);

    if (!incomingGifts.length) {
      queueShareNotice("В ссылке не нашлось подарков.");
    } else {
      saveGifts(mergeGifts(getGifts(), incomingGifts));
      queueShareNotice(`Подарки из ссылки добавлены: ${incomingGifts.length}.`);
    }
  } catch {
    queueShareNotice("Не удалось открыть подарки из этой ссылки.");
  }

  history.replaceState(null, "", `${location.href.replace(/#.*$/, "")}#/`);
  render();
  return true;
}

function sanitizeSharedGifts(gifts) {
  if (!Array.isArray(gifts)) {
    return [];
  }

  return gifts
    .map((gift, index) => {
      const name = String(gift?.name || "").trim().slice(0, 80);

      if (!name) {
        return null;
      }

      const link = normalizeLink(String(gift?.link || "").trim());
      const price = String(gift?.price || "").trim();
      const photo = String(gift?.photo || "");

      return {
        id: String(gift?.id || createId()),
        name,
        link: link && isValidUrl(link) ? link : "",
        price: price && Number(price) >= 0 ? price : "",
        comment: String(gift?.comment || "").trim().slice(0, 500),
        reservedText: String(gift?.reservedText || "").trim().slice(0, 24),
        photo: photo.startsWith("data:image/") ? photo : "",
        variant: normalizeVariant(String(gift?.variant || "")),
        size: normalizeSize(String(gift?.size || "")),
        order: Number.isFinite(gift?.order) ? Number(gift.order) : index,
        layout: isValidLayout(gift?.layout)
          ? {
              x: Number(gift.layout.x),
              y: Number(gift.layout.y),
              w: Number(gift.layout.w),
              h: Number(gift.layout.h),
            }
          : null,
        marked: Boolean(gift?.marked),
        createdAt: Number(gift?.createdAt) || Date.now() - index,
        updatedAt: Number(gift?.updatedAt) || Date.now(),
      };
    })
    .filter(Boolean);
}

function mergeGifts(currentGifts, incomingGifts) {
  const giftMap = new Map(currentGifts.map((gift) => [gift.id, gift]));

  incomingGifts.forEach((gift) => {
    giftMap.set(gift.id, gift);
  });

  return Array.from(giftMap.values());
}

function encodeSharePayload(payload) {
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  return bytesToBase64Url(bytes);
}

function decodeSharePayload(payload) {
  const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  return JSON.parse(new TextDecoder().decode(bytes));
}

function bytesToBase64Url(bytes) {
  const chunkSize = 0x8000;
  let binary = "";

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function setShareStatus(message) {
  const status = document.querySelector("#shareStatus");

  if (status) {
    status.textContent = message;
  }
}

function showShareLink(shareLink) {
  const panel = document.querySelector("#sharePanel");
  const input = document.querySelector("#shareLinkInput");
  const prettyLink = document.querySelector("#prettyShareLink");

  if (!panel || !input) {
    return;
  }

  panel.hidden = false;
  input.value = shareLink;
  if (prettyLink) {
    prettyLink.href = shareLink;
  }
  input.select();
}

function queueShareNotice(message) {
  sessionStorage.setItem(SHARE_NOTICE_KEY, message);
}

function showQueuedShareNotice() {
  const notice = sessionStorage.getItem(SHARE_NOTICE_KEY);

  if (!notice) {
    return;
  }

  sessionStorage.removeItem(SHARE_NOTICE_KEY);
  setShareStatus(notice);
}

function renderPhotoPreview(photo) {
  const preview = document.querySelector("#photoPreview");

  if (!preview || !photo) {
    return;
  }

  const image = document.createElement("img");
  image.src = photo;
  image.alt = "";
  preview.replaceChildren(image);
}

function normalizeLink(link) {
  if (!link) {
    return "";
  }

  if (/^https?:\/\//i.test(link)) {
    return link;
  }

  return `https://${link}`;
}

function isValidUrl(link) {
  try {
    const url = new URL(link);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function formatPrice(value) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}

function getGiftWord(count) {
  const lastTwo = count % 100;
  const last = count % 10;

  if (lastTwo >= 11 && lastTwo <= 14) {
    return "подарков";
  }

  if (last === 1) {
    return "подарок";
  }

  if (last >= 2 && last <= 4) {
    return "подарка";
  }

  return "подарков";
}

function createId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function prepareImage(file) {
  if (!file.type.startsWith("image/")) {
    return Promise.reject(new Error("Выберите изображение."));
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => reject(new Error("Не удалось прочитать фото."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("Не удалось открыть фото."));
      image.onload = () => {
        const maxSize = 1200;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.86));
      };
      image.src = reader.result;
    };

    reader.readAsDataURL(file);
  });
}
