const STORAGE_KEY = "lensfolio:photos:v4";
const MODE_KEY = "lensfolio:mode";
const starterPhotos = [
  {
    id: "sample-window-light",
    title: "Window light",
    category: "Portrait",
    description: "Soft daylight, quiet framing, and a calm visual rhythm.",
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80",
    locked: true,
  },
  {
    id: "sample-coastline",
    title: "Coastline study",
    category: "Nature",
    description: "A slow frame with open air, texture, and muted color.",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    locked: true,
  },
  {
    id: "sample-street",
    title: "Late street",
    category: "City",
    description: "A small city moment with shadows, movement, and atmosphere.",
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    locked: true,
  },
  {
    id: "sample-details",
    title: "Quiet detail",
    category: "Details",
    description: "A close fragment that keeps the mood of the day.",
    src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80",
    locked: true,
  },
  {
    id: "sample-soft-room",
    title: "Soft room",
    category: "Series",
    description: "Warm interior light for a gentle portfolio rhythm.",
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    locked: true,
  },
];

const intro = document.querySelector("#intro");
const galleryGrid = document.querySelector("#galleryGrid");
const uploadDialog = document.querySelector("#uploadDialog");
const uploadForm = document.querySelector("#uploadForm");
const photoInput = document.querySelector("#photoInput");
const titleInput = document.querySelector("#titleInput");
const categoryInput = document.querySelector("#categoryInput");
const descriptionInput = document.querySelector("#descriptionInput");
const fileText = document.querySelector("#fileText");
const heroCollage = document.querySelector("#heroCollage");
const modeButtons = [...document.querySelectorAll(".mode-button")];
const uploadButtons = [
  document.querySelector("#openUpload"),
  document.querySelector("#openUploadSecond"),
  document.querySelector("#openUploadThird"),
].filter(Boolean);
const closeUpload = document.querySelector("#closeUpload");
const totalPhotos = document.querySelector("#totalPhotos");
const totalCategories = document.querySelector("#totalCategories");
const lightbox = document.querySelector("#lightbox");
const closeLightbox = document.querySelector("#closeLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxCategory = document.querySelector("#lightboxCategory");
const lightboxDescription = document.querySelector("#lightboxDescription");

let photos = loadPhotos();
let currentMode = localStorage.getItem(MODE_KEY) || "viewer";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

document.body.classList.add("is-intro");
if (!window.location.hash) {
  window.scrollTo(0, 0);
}

window.addEventListener("load", () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
  window.setTimeout(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    intro.classList.add("is-hidden");
    document.body.classList.remove("is-intro");
    document.body.classList.add("is-ready");
    window.requestAnimationFrame(() => {
      const target = window.location.hash ? document.querySelector(window.location.hash) : null;
      if (target) {
        target.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });
  }, 1450);
});

uploadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    uploadDialog.showModal();
  });
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setMode(button.dataset.mode);
  });
});

closeUpload.addEventListener("click", () => {
  uploadDialog.close();
});

photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];
  fileText.textContent = file ? file.name : "Choose a photograph";
});

uploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const file = photoInput.files[0];
  const title = titleInput.value.trim();

  if (!file || !title) {
    uploadForm.reportValidity();
    return;
  }

  const src = await readFile(file);

  photos = [
    {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      title,
      category: categoryInput.value,
      description: descriptionInput.value.trim() || "A new frame in the portfolio.",
      src,
      locked: false,
    },
    ...photos,
  ];

  savePhotos();
  uploadForm.reset();
  fileText.textContent = "Choose a photograph";
  uploadDialog.close();
  renderGallery();
});

galleryGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".delete-button");

  if (button) {
    photos = photos.filter((photo) => photo.id !== button.dataset.id);
    savePhotos();
    renderGallery();
    return;
  }

  const card = event.target.closest(".photo-card");
  if (card) {
    openLightbox(card.dataset.id);
  }
});

closeLightbox.addEventListener("click", () => {
  lightbox.close();
});

setMode(currentMode);
renderGallery();

function loadPhotos() {
  try {
    const savedPhotos = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(savedPhotos)) {
      return savedPhotos;
    }

    const oldPhotos = JSON.parse(localStorage.getItem("lensfolio:photos:v2"));
    if (Array.isArray(oldPhotos)) {
      return oldPhotos.filter((photo) => !photo.locked);
    }

    return starterPhotos;
  } catch {
    return starterPhotos;
  }
}

function savePhotos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
}

function renderGallery() {
  galleryGrid.classList.toggle("is-small-set", photos.length > 0 && photos.length < 3);
  galleryGrid.innerHTML = photos.length
    ? photos.map(createPhotoCard).join("")
    : `<div class="empty-gallery">No photographs yet. Switch to Editor mode to add your first frame.</div>`;

  updatePortfolioSummary();
  renderCollage();
}

function createPhotoCard(photo, index) {
  const deleteButton = photo.locked
    ? ""
    : `<button class="delete-button" type="button" data-id="${photo.id}" aria-label="Delete ${escapeHtml(photo.title)}">×</button>`;

  return `
    <article class="photo-card ${index === 0 ? "is-featured" : ""}" data-id="${photo.id}">
      <img src="${photo.src}" alt="${escapeHtml(photo.title)}" />
      ${deleteButton}
      <div class="photo-info">
        <span class="tag">${escapeHtml(photo.category)}</span>
        <h3>${escapeHtml(photo.title)}</h3>
        <p>${escapeHtml(photo.description)}</p>
      </div>
    </article>
  `;
}

function updatePortfolioSummary() {
  const categories = new Set(photos.map((photo) => photo.category));

  totalPhotos.textContent = String(photos.length).padStart(2, "0");
  totalCategories.textContent = String(categories.size).padStart(2, "0");
}

function renderCollage() {
  const collagePhotos = photos.slice(0, 5);

  if (!collagePhotos.length) {
    heroCollage.innerHTML = `
      <div class="collage-empty collage-frame-large">Your work goes here</div>
      <div class="collage-empty">Frame 02</div>
      <div class="collage-empty">Frame 03</div>
      <div class="collage-empty collage-frame-wide">Portfolio vitrine</div>
    `;
    return;
  }

  heroCollage.innerHTML = collagePhotos
    .map(
      (photo, index) => `
        <button class="collage-frame ${index === 0 ? "collage-frame-large" : ""} ${index === 3 ? "collage-frame-wide" : ""}" type="button" data-id="${photo.id}">
          <img src="${photo.src}" alt="${escapeHtml(photo.title)}" />
          <span>${String(index + 1).padStart(2, "0")}</span>
        </button>
      `,
    )
    .join("");
}

function setMode(mode) {
  currentMode = mode === "editor" ? "editor" : "viewer";
  document.body.dataset.mode = currentMode;
  localStorage.setItem(MODE_KEY, currentMode);
  modeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === currentMode));
}

heroCollage.addEventListener("click", (event) => {
  const frame = event.target.closest("[data-id]");
  if (frame) {
    openLightbox(frame.dataset.id);
  }
});

function openLightbox(id) {
  const photo = photos.find((item) => item.id === id);

  if (!photo) {
    return;
  }

  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.title;
  lightboxTitle.textContent = photo.title;
  lightboxCategory.textContent = photo.category;
  lightboxDescription.textContent = photo.description;
  lightbox.showModal();
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
