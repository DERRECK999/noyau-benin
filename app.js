const properties = [
  { id: 1, title: "Villa lumineuse avec jardin", city: "Cotonou", area: "Haie Vive", price: 350000, rooms: 3, baths: 2, size: 112, verified: true, rating: "4,9", image: "photo-1600596542815-ffad4c1539a9", tag: "Coup de cœur" },
  { id: 2, title: "Appartement cosy au calme", city: "Abomey-Calavi", area: "Arconville", price: 95000, rooms: 2, baths: 1, size: 58, verified: true, rating: "4,8", image: "photo-1600607687939-ce8a6c25118c" },
  { id: 3, title: "Studio étudiant tout équipé", city: "Porto-Novo", area: "Ouando", price: 55000, rooms: 1, baths: 1, size: 30, verified: true, rating: "4,7", image: "photo-1522708323590-d24dbb6b0267" },
  { id: 4, title: "Maison familiale contemporaine", city: "Cotonou", area: "Fidjrossè", price: 280000, rooms: 4, baths: 2, size: 145, verified: true, rating: "4,9", image: "photo-1600047509807-ba8f99d2cdde" },
  { id: 5, title: "Appartement avec terrasse", city: "Parakou", area: "Centre-ville", price: 120000, rooms: 2, baths: 1, size: 72, verified: false, rating: "4,6", image: "photo-1600210492486-724fe5c67fb0" },
  { id: 6, title: "Petit nid près des commodités", city: "Cotonou", area: "Akpakpa", price: 75000, rooms: 1, baths: 1, size: 35, verified: true, rating: "4,8", image: "photo-1493809842364-78817add7ffb" },
  { id: 7, title: "Villa paisible et spacieuse", city: "Abomey-Calavi", area: "Zogbadjè", price: 190000, rooms: 3, baths: 2, size: 120, verified: true, rating: "4,7", image: "photo-1600566753086-00f18fb6b3ea" },
  { id: 8, title: "Studio moderne proche campus", city: "Abomey-Calavi", area: "Université", price: 60000, rooms: 1, baths: 1, size: 32, verified: true, rating: "4,8", image: "photo-1502672260266-1c1ef2d93688" },
  { id: 9, title: "Maison de charme avec cour", city: "Porto-Novo", area: "Avassa", price: 140000, rooms: 3, baths: 2, size: 105, verified: false, rating: "4,5", image: "photo-1600210491369-e753d80a41f3" },
  { id: 10, title: "Bel appartement en résidence", city: "Cotonou", area: "Cadjèhoun", price: 230000, rooms: 3, baths: 2, size: 94, verified: true, rating: "4,9", image: "photo-1600566753190-17f0baa2a6c3" },
  { id: 11, title: "Chambre indépendante soignée", city: "Bohicon", area: "Saclo", price: 40000, rooms: 1, baths: 1, size: 22, verified: false, rating: "4,4", image: "photo-1616486338812-3dadae4b4ace" },
  { id: 12, title: "Villa familiale à deux niveaux", city: "Cotonou", area: "Agla", price: 260000, rooms: 4, baths: 3, size: 160, verified: true, rating: "4,8", image: "photo-1600585154340-be6161a56a0c" },
  { id: 13, title: "Appartement design et lumineux", city: "Abomey-Calavi", area: "Togbin", price: 160000, rooms: 2, baths: 1, size: 75, verified: true, rating: "4,7", image: "photo-1600607687920-4e2a09cf159d" },
  { id: 14, title: "Studio fonctionnel en centre-ville", city: "Parakou", area: "Alaga", price: 45000, rooms: 1, baths: 1, size: 28, verified: true, rating: "4,6", image: "photo-1505693416388-ac5ce068fe85" },
  { id: 15, title: "Maison avec grande véranda", city: "Lokossa", area: "Centre", price: 110000, rooms: 3, baths: 2, size: 98, verified: false, rating: "4,5", image: "photo-1600607687939-ce8a6c25118c" },
  { id: 16, title: "Appartement chic proche plage", city: "Cotonou", area: "Fidjrossè plage", price: 300000, rooms: 3, baths: 2, size: 110, verified: true, rating: "5,0", image: "photo-1600607687920-4e2a09cf159d" },
  { id: 17, title: "Logement étudiant bien situé", city: "Porto-Novo", area: "Ahouangbo", price: 50000, rooms: 1, baths: 1, size: 27, verified: true, rating: "4,6", image: "photo-1493809842364-78817add7ffb" },
  { id: 18, title: "Maison moderne avec patio", city: "Abomey-Calavi", area: "Godomey", price: 175000, rooms: 3, baths: 2, size: 118, verified: true, rating: "4,8", image: "photo-1600047509807-ba8f99d2cdde" },
  { id: 19, title: "Appartement cosy en ville", city: "Djougou", area: "Barei", price: 85000, rooms: 2, baths: 1, size: 63, verified: false, rating: "4,4", image: "photo-1600210492486-724fe5c67fb0" },
  { id: 20, title: "Villa d'exception et piscine", city: "Cotonou", area: "Les Cocotiers", price: 500000, rooms: 5, baths: 3, size: 220, verified: true, rating: "4,9", image: "photo-1600596542815-ffad4c1539a9" },
  { id: 21, title: "Deux-pièces fraîchement rénové", city: "Abomey-Calavi", area: "Akassato", price: 80000, rooms: 2, baths: 1, size: 54, verified: true, rating: "4,7", image: "photo-1522708323590-d24dbb6b0267" },
  { id: 22, title: "Maison tranquille avec jardin", city: "Natitingou", area: "Ourbouga", price: 95000, rooms: 3, baths: 2, size: 100, verified: false, rating: "4,5", image: "photo-1600566753086-00f18fb6b3ea" },
  { id: 23, title: "Studio pratique au cœur de Cotonou", city: "Cotonou", area: "Saint-Michel", price: 70000, rooms: 1, baths: 1, size: 34, verified: true, rating: "4,8", image: "photo-1502672260266-1c1ef2d93688" },
  { id: 24, title: "Appartement familial avec balcon", city: "Bohicon", area: "Avogbanna", price: 125000, rooms: 3, baths: 2, size: 90, verified: true, rating: "4,6", image: "photo-1600607687939-ce8a6c25118c" },
  { id: 25, title: "Maison traditionnelle rénovée", city: "Porto-Novo", area: "Dowa", price: 90000, rooms: 2, baths: 1, size: 68, verified: false, rating: "4,5", image: "photo-1600210491369-e753d80a41f3" },
  { id: 26, title: "Duplex spacieux et ensoleillé", city: "Cotonou", area: "Zogbo", price: 320000, rooms: 4, baths: 3, size: 170, verified: true, rating: "4,9", image: "photo-1600585154340-be6161a56a0c" },
  { id: 27, title: "Appartement à deux pas du marché", city: "Parakou", area: "Banikanni", price: 70000, rooms: 2, baths: 1, size: 57, verified: true, rating: "4,7", image: "photo-1600566753190-17f0baa2a6c3" },
  { id: 28, title: "Belle maison avec cour arborée", city: "Ouidah", area: "Pahou", price: 130000, rooms: 3, baths: 2, size: 106, verified: true, rating: "4,8", image: "photo-1600596542815-ffad4c1539a9" },
  { id: 29, title: "Chambre étudiante meublée", city: "Cotonou", area: "Vèdoko", price: 45000, rooms: 1, baths: 1, size: 25, verified: false, rating: "4,5", image: "photo-1616486338812-3dadae4b4ace" },
  { id: 30, title: "Résidence paisible et sécurisée", city: "Abomey-Calavi", area: "Tankpè", price: 210000, rooms: 4, baths: 2, size: 138, verified: true, rating: "4,8", image: "photo-1600047509807-ba8f99d2cdde" }
];

const cities = ["Cotonou", "Abomey-Calavi", "Porto-Novo", "Parakou", "Bohicon", "Ouidah", "Natitingou", "Djougou", "Lokossa"];
const imageUrl = (id, width = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
const safe = value => String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
const formatMoney = value => new Intl.NumberFormat("fr-FR").format(value);
const hashPassword = async (password, salt) => {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const hash = await crypto.subtle.deriveBits({ name: "PBKDF2", salt: Uint8Array.from(salt.match(/.{2}/g), byte => parseInt(byte, 16)), iterations: 120000, hash: "SHA-256" }, key, 256);
  return [...new Uint8Array(hash)].map(byte => byte.toString(16).padStart(2, "0")).join("");
};
const grid = document.getElementById("property-grid");
const count = document.getElementById("results-count");
const emptyState = document.getElementById("empty-state");
const modal = document.getElementById("modal-backdrop");
const modalContent = document.getElementById("modal-content");
let visibleCount = 9;
let activeProperties = [...properties];
let toastTimer;

function getSavedIds() {
  try { return JSON.parse(localStorage.getItem("noyau-favorites") || "[]").map(String); } catch (error) { console.warn("Favoris locaux illisibles.", error); return []; }
}

function loadPublishedListings() {
  const prefix = "noyau-listings-";
  try {
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (!key?.startsWith(prefix)) continue;
      const email = key.slice(prefix.length);
      const listings = JSON.parse(localStorage.getItem(key) || "[]");
      let changed = false;
      listings.forEach((item, itemIndex) => {
        if (!item.id) { item.id = `custom-${email}-${itemIndex}`; changed = true; }
        if (properties.some(property => property.id === item.id)) return;
        properties.unshift({ ...item, ownerEmail: email, verified: false, baths: 1, size: 60, rating: "Nouveau", image: "photo-1600607687939-ce8a6c25118c" });
      });
      if (changed) localStorage.setItem(key, JSON.stringify(listings));
    }
  } catch (error) { console.error("Impossible de charger les annonces locales.", error); }
}

function renderCities() {
  const cityTrack = document.getElementById("city-track");
  const cityFilter = document.getElementById("city-filter");
  cityTrack.innerHTML = cities.map(city => `<button class="city-pill" type="button" data-city="${safe(city)}">${safe(city)} <span>${properties.filter(item => item.city === city).length} logements</span></button>`).join("");
  cityFilter.insertAdjacentHTML("beforeend", cities.map(city => `<option value="${safe(city)}">${safe(city)}</option>`).join(""));
  cityTrack.addEventListener("click", event => {
    const button = event.target.closest("[data-city]");
    if (!button) return;
    cityFilter.value = button.dataset.city;
    applyFilters();
    document.getElementById("logements").scrollIntoView({ behavior: "smooth" });
  });
}

function cardMarkup(item) {
  const saved = getSavedIds().includes(String(item.id));
  return `<article class="property-card" data-property-id="${safe(item.id)}">
    <div class="property-photo" data-open-property="${safe(item.id)}" role="button" tabindex="0" aria-label="Voir ${safe(item.title)}">
      <img src="${imageUrl(item.image)}" alt="${safe(item.title)} à ${safe(item.area)}, ${safe(item.city)}" loading="lazy">
      ${item.verified ? '<span class="verified-badge"><span>✓</span> Vérifié</span>' : ""}
      ${item.tag ? `<span class="verified-badge" style="left:auto;right:13px;top:auto;bottom:12px;background:#e8eddf">${safe(item.tag)}</span>` : ""}
      <button class="favorite-button${saved ? " is-saved" : ""}" type="button" data-favorite="${safe(item.id)}" aria-label="${saved ? "Retirer des favoris" : "Ajouter aux favoris"}">${saved ? "♥" : "♡"}</button>
    </div>
    <div class="property-info"><div class="property-title-row"><div><h3>${safe(item.title)}</h3><p class="property-location">${safe(item.area)}, ${safe(item.city)}</p></div><span class="property-rating">★ <b>${safe(item.rating)}</b></span></div>
      <div class="property-features"><span><i>⌂</i> ${item.rooms} pièce${item.rooms > 1 ? "s" : ""}</span><span><i>♧</i> ${item.baths} douche${item.baths > 1 ? "s" : ""}</span><span><i>↔</i> ${item.size} m²</span></div>
      <div class="property-bottom"><span class="property-price">${formatMoney(item.price)} <small>FCFA / mois</small></span><button class="detail-link" type="button" data-open-property="${safe(item.id)}">Voir le logement ↗</button></div>
    </div>
  </article>`;
}

function revealCards() {
  const cards = [...grid.querySelectorAll(".property-card")];
  if (!("IntersectionObserver" in window)) { cards.forEach(card => card.classList.add("visible")); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  cards.forEach(card => observer.observe(card));
}

function renderProperties() {
  count.textContent = String(activeProperties.length);
  const items = activeProperties.slice(0, visibleCount);
  grid.innerHTML = items.map(cardMarkup).join("");
  emptyState.classList.toggle("hidden", activeProperties.length !== 0);
  grid.classList.toggle("hidden", activeProperties.length === 0);
  document.getElementById("show-more").classList.toggle("hidden", activeProperties.length <= visibleCount);
  revealCards();
}

function applyFilters() {
  const city = document.getElementById("city-filter").value;
  const budget = Number(document.getElementById("budget-filter").value);
  const sort = document.getElementById("sort-order").value;
  activeProperties = properties.filter(item => (!city || item.city === city) && (!budget || item.price <= budget));
  if (sort === "price-asc") activeProperties.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") activeProperties.sort((a, b) => b.price - a.price);
  visibleCount = 9;
  renderProperties();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function openModal(content) {
  modalContent.innerHTML = content;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-card").scrollTop = 0;
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function showRolePicker() {
  openModal(`<span class="modal-kicker">BIENVENUE CHEZ NOYAU</span><h2 id="modal-title">Vous êtes ici pour…</h2><p>Choisissez votre profil pour profiter d’une expérience adaptée.</p>
    <div class="role-options"><button class="role-option" type="button" data-role="tenant"><span class="role-icon">⌂</span><strong>Trouver un logement</strong><small>Je cherche mon prochain chez-moi.</small></button><button class="role-option" type="button" data-role="owner"><span class="role-icon">⌑</span><strong>Louer mon logement</strong><small>Je souhaite publier une annonce.</small></button></div>`);
}

function showAuthForm(role, login = false) {
  const roleText = role === "owner" ? "propriétaire" : "locataire";
  openModal(`<span class="modal-kicker">${login ? "HEUREUX DE VOUS REVOIR" : "CRÉEZ VOTRE ESPACE"}</span><h2 id="modal-title">${login ? "Connectez-vous." : role === "owner" ? "Bienvenue, propriétaire." : "Votre prochain chez-vous."}</h2><p>${login ? "Retrouvez vos annonces, vos favoris et vos visites." : `Quelques informations pour créer votre espace ${roleText}. Prototype : vos données restent sur cet appareil.`}</p>
    <form class="modal-form" id="auth-form">${login ? "" : '<label>Votre nom<input name="name" required autocomplete="name" placeholder="Ex. Aïcha K."></label>'}
      <label>Adresse e-mail<input name="email" required type="email" autocomplete="email" placeholder="vous@exemple.com"></label><label>Mot de passe<input name="password" required type="password" minlength="6" autocomplete="${login ? "current-password" : "new-password"}" placeholder="6 caractères minimum"></label>
      <button class="button" type="submit">${login ? "Se connecter" : "Créer mon compte"} <span aria-hidden="true">↗</span></button></form>
      ${login ? "" : '<button class="modal-back-link" type="button" data-back-roles>← Choisir un autre profil</button>'}`);
  modalContent.querySelector("#auth-form").addEventListener("submit", async event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let users;
    try { users = JSON.parse(localStorage.getItem("noyau-users") || "[]"); } catch (error) { console.error("Les comptes enregistrés sont illisibles.", error); showToast("Impossible de lire les comptes sur cet appareil."); return; }
    const email = String(formData.get("email")).trim().toLowerCase();
    if (login) {
      const account = users.find(item => item.email === email);
      let user = null;
      try {
        if (account?.passwordHash && account.salt && await hashPassword(String(formData.get("password")), account.salt) === account.passwordHash) user = account;
      } catch (error) { console.error("La vérification du mot de passe a échoué.", error); showToast("Impossible de vérifier votre mot de passe sur cet appareil."); return; }
      if (!user) { showToast("E-mail ou mot de passe incorrect."); return; }
      try { localStorage.setItem("noyau-session", JSON.stringify(user)); } catch (error) { console.error("Impossible d’enregistrer la session.", error); showToast("Impossible d’ouvrir votre session sur cet appareil."); return; }
      setSignedIn(user);
      showAccount(user);
      return;
    }
    if (users.some(item => item.email === email)) { showToast("Un compte existe déjà avec cet e-mail."); return; }
    let user;
    try {
      const salt = [...crypto.getRandomValues(new Uint8Array(16))].map(byte => byte.toString(16).padStart(2, "0")).join("");
      user = { name: String(formData.get("name")).trim(), email, role, salt, passwordHash: await hashPassword(String(formData.get("password")), salt) };
      users.push(user);
      localStorage.setItem("noyau-users", JSON.stringify(users));
      localStorage.setItem("noyau-session", JSON.stringify(user));
    } catch (error) { console.error("Impossible de créer un compte sur cet appareil.", error); showToast("La création du compte a échoué. Réessayez."); return; }
    setSignedIn(user);
    showAccount(user);
  });
}

function setSignedIn(user) {
  document.getElementById("open-register").classList.add("hidden");
  document.getElementById("open-login").classList.add("hidden");
  const accountButton = document.getElementById("open-account");
  accountButton.textContent = `Bonjour, ${user.name.split(" ")[0]}`;
  accountButton.classList.remove("hidden");
}

function getOwnerListings(user) {
  try { return JSON.parse(localStorage.getItem(`noyau-listings-${user.email}`) || "[]"); } catch (error) { console.error("Annonces locales illisibles.", error); return []; }
}

function showAccount(user) {
  const owner = user.role === "owner";
  const ownListings = owner ? getOwnerListings(user) : [];
  const concludedListings = ownListings.filter(item => item.concluded);
  const commissionTotal = concludedListings.reduce((total, item) => total + Math.round(item.price * 3 * 0.1), 0);
  openModal(`<span class="modal-kicker">${owner ? "ESPACE PROPRIÉTAIRE" : "ESPACE LOCATAIRE"}</span><h2 id="modal-title">Bonjour ${safe(user.name.split(" ")[0])} 👋</h2><p>${owner ? "Prototype : annonces et statistiques visibles sur cet appareil uniquement." : "Vos prochaines découvertes sont à portée de main."}</p>
    <div class="modal-stat-row"><div class="modal-stat"><strong>${owner ? ownListings.length : getSavedIds().length}</strong><span>${owner ? "annonce(s) publiée(s)" : "logement(s) sauvegardé(s)"}</span></div><div class="modal-stat"><strong>${owner ? ownListings.reduce((total, item) => total + (item.views || 0), 0) : activeProperties.length}</strong><span>${owner ? "visites de vos annonces" : "logements à découvrir"}</span></div>${owner ? `<div class="modal-stat"><strong>${concludedListings.length}</strong><span>location(s) conclue(s)</span></div><div class="modal-stat"><strong>${formatMoney(commissionTotal)}</strong><span>commissions estimées (FCFA)</span></div>` : ""}</div>
    ${owner ? `<h3 class="modal-section-title">Vos annonces</h3>${ownListings.length ? ownListings.map(item => `<div class="modal-listing"><span>${safe(item.title)} · ${formatMoney(item.price)} FCFA/mois<br><small>${item.views || 0} visite(s) · ${item.concluded ? "Location conclue" : "Disponible"}</small></span>${item.concluded ? '<span class="listing-concluded">✓ Conclue</span>' : `<button class="conclude-button" type="button" data-conclude="${safe(item.id)}">Marquer conclue</button>`}</div>`).join("") : '<p>Vous n’avez pas encore publié d’annonce.</p>'}<button class="button" id="add-listing" type="button">Ajouter un logement <span>＋</span></button>` : `<h3 class="modal-section-title">Nouvelles propositions pour vous</h3>${[...properties].sort((a, b) => Number(b.verified) - Number(a.verified)).slice(0, 3).map(item => `<div class="modal-listing"><span>${safe(item.title)} · ${safe(item.city)}</span><span>${formatMoney(item.price)} FCFA</span></div>`).join("")}<button class="button" id="browse-listings" type="button">Explorer les logements <span>↗</span></button>`}
    <button class="modal-back-link" id="logout" type="button">Se déconnecter</button>`);
  const addListing = modalContent.querySelector("#add-listing");
  if (addListing) addListing.addEventListener("click", () => showListingForm(user));
  modalContent.querySelectorAll("[data-conclude]").forEach(button => button.addEventListener("click", () => {
    const listings = getOwnerListings(user);
    const listing = listings.find(item => String(item.id) === button.dataset.conclude);
    if (!listing) { showToast("Cette annonce n’a pas été retrouvée."); return; }
    listing.concluded = true;
    try { localStorage.setItem(`noyau-listings-${user.email}`, JSON.stringify(listings)); }
    catch (error) { console.error("Impossible d’enregistrer la location conclue.", error); showToast("Impossible d’enregistrer cette location sur cet appareil."); return; }
    showAccount(user);
    showToast("La location a été marquée comme conclue.");
  }));
  const browse = modalContent.querySelector("#browse-listings");
  if (browse) browse.addEventListener("click", () => { closeModal(); document.getElementById("logements").scrollIntoView({ behavior: "smooth" }); });
  modalContent.querySelector("#logout").addEventListener("click", () => {
    localStorage.removeItem("noyau-session");
    document.getElementById("open-account").classList.add("hidden");
    document.getElementById("open-register").classList.remove("hidden");
    document.getElementById("open-login").classList.remove("hidden");
    closeModal();
    showToast("Vous êtes déconnecté·e.");
  });
}

function showListingForm(user) {
  openModal(`<span class="modal-kicker">VOTRE PROCHAIN LOCATAIRE EST ICI</span><h2 id="modal-title">Publier un logement</h2><p>Ajoutez les informations principales. Vous pourrez compléter votre annonce plus tard.</p>
    <form class="modal-form" id="listing-form"><label>Nom du logement<input name="title" required maxlength="70" placeholder="Ex. Appartement lumineux à Fidjrossè"></label><label>Ville<select name="city" required>${cities.map(city => `<option>${safe(city)}</option>`).join("")}</select></label><label>Quartier<input name="area" required maxlength="50" placeholder="Ex. Fidjrossè"></label><label>Loyer mensuel (FCFA)<input name="price" type="number" min="1" required placeholder="Ex. 120000"></label><label>Nombre de pièces<input name="rooms" type="number" min="1" max="20" value="2" required></label><button class="button" type="submit">Publier mon annonce <span>↗</span></button></form>`);
  modalContent.querySelector("#listing-form").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const listings = getOwnerListings(user);
    const listing = { id: `custom-${Date.now()}`, title: String(data.get("title")).trim(), city: String(data.get("city")), area: String(data.get("area")).trim(), price: Number(data.get("price")), rooms: Number(data.get("rooms")), views: 0, concluded: false };
    listings.push(listing);
    try { localStorage.setItem(`noyau-listings-${user.email}`, JSON.stringify(listings)); }
    catch (error) { console.error("Impossible d’enregistrer l’annonce.", error); showToast("Impossible d’enregistrer cette annonce sur cet appareil."); return; }
    properties.unshift({ ...listing, ownerEmail: user.email, verified: false, baths: 1, size: 60, rating: "Nouveau", image: "photo-1600607687939-ce8a6c25118c" });
    applyFilters();
    showToast("Votre annonce a bien été ajoutée à votre espace.");
    showAccount(user);
  });
}

function showProperty(item) {
  try {
    const views = Number(localStorage.getItem("noyau-views") || 0) + 1;
    localStorage.setItem("noyau-views", String(views));
    if (item.ownerEmail) {
      const listings = getOwnerListings({ email: item.ownerEmail });
      const listing = listings.find(saved => String(saved.id) === String(item.id));
      if (listing) {
        listing.views = (listing.views || 0) + 1;
        localStorage.setItem(`noyau-listings-${item.ownerEmail}`, JSON.stringify(listings));
      }
    }
  } catch (error) { console.error("Impossible d’enregistrer cette visite.", error); }
  openModal(`<span class="modal-kicker">${item.verified ? "✓ LOGEMENT VÉRIFIÉ" : "ANNONCE DISPONIBLE"}</span><h2 id="modal-title">${safe(item.title)}</h2><p>${safe(item.area)}, ${safe(item.city)} · ${item.rooms} pièce${item.rooms > 1 ? "s" : ""} · ${item.size} m²</p><img src="${imageUrl(item.image, 1000)}" alt="${safe(item.title)}" style="width:100%;height:220px;object-fit:cover;border-radius:8px;margin:8px 0 16px"><div class="modal-stat-row"><div class="modal-stat"><strong>${formatMoney(item.price)} FCFA</strong><span>loyer mensuel</span></div><div class="modal-stat"><strong>★ ${safe(item.rating)} / 5</strong><span>avis des locataires</span></div></div><p>Contactez le propriétaire pour organiser une visite et en savoir plus sur ce logement.</p><button class="button" id="contact-owner" type="button">Demander une visite <span>↗</span></button>`);
  modalContent.querySelector("#contact-owner").addEventListener("click", () => {
    let user = null;
    try { user = JSON.parse(localStorage.getItem("noyau-session") || "null"); } catch (error) { console.warn("Session locale illisible.", error); }
    if (!user) { showRolePicker(); showToast("Créez un compte pour demander une visite."); return; }
    showToast("Votre demande de visite a été notée. Le propriétaire vous recontactera.");
    closeModal();
  });
}

function setupEvents() {
  document.getElementById("search-form").addEventListener("submit", event => { event.preventDefault(); applyFilters(); });
  document.getElementById("sort-order").addEventListener("change", applyFilters);
  document.getElementById("show-more").addEventListener("click", () => { visibleCount = activeProperties.length; renderProperties(); });
  document.getElementById("reset-search").addEventListener("click", () => { document.getElementById("city-filter").value = ""; document.getElementById("budget-filter").value = ""; applyFilters(); });
  grid.addEventListener("click", event => {
    const favorite = event.target.closest("[data-favorite]");
    if (favorite) {
      let ids = getSavedIds();
      const id = favorite.dataset.favorite;
      ids = ids.includes(id) ? ids.filter(saved => saved !== id) : [...ids, id];
      localStorage.setItem("noyau-favorites", JSON.stringify(ids));
      favorite.classList.toggle("is-saved", ids.includes(id));
      favorite.textContent = ids.includes(id) ? "♥" : "♡";
      favorite.setAttribute("aria-label", ids.includes(id) ? "Retirer des favoris" : "Ajouter aux favoris");
      return;
    }
    const trigger = event.target.closest("[data-open-property]");
    if (trigger) { const item = properties.find(property => String(property.id) === trigger.dataset.openProperty); if (item) showProperty(item); }
  });
  grid.addEventListener("keydown", event => {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open-property]")) {
      event.preventDefault();
      const item = properties.find(property => String(property.id) === event.target.dataset.openProperty);
      if (item) showProperty(item);
    }
  });
  document.getElementById("open-register").addEventListener("click", showRolePicker);
  document.getElementById("open-login").addEventListener("click", () => showAuthForm("tenant", true));
  document.getElementById("open-account").addEventListener("click", () => {
    try { const user = JSON.parse(localStorage.getItem("noyau-session") || "null"); if (user) showAccount(user); } catch (error) { console.error("Session locale illisible.", error); showToast("Impossible de retrouver votre session."); }
  });
  document.getElementById("owner-cta").addEventListener("click", () => {
    try {
      const user = JSON.parse(localStorage.getItem("noyau-session") || "null");
      if (user?.role === "owner") { showAccount(user); return; }
    } catch (error) { console.warn("Session locale illisible.", error); }
    showRolePicker();
  });
  modalContent.addEventListener("click", event => {
    if (event.target.closest("[data-role]")) showAuthForm(event.target.closest("[data-role]").dataset.role);
    if (event.target.closest("[data-back-roles]")) showRolePicker();
  });
  document.getElementById("modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !modal.classList.contains("hidden")) closeModal(); });
  const themeButton = document.getElementById("theme-toggle");
  const setTheme = dark => {
    document.body.classList.toggle("dark-theme", dark);
    themeButton.setAttribute("aria-label", dark ? "Activer le thème clair" : "Activer le thème sombre");
    themeButton.innerHTML = dark ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>' : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.8A8.4 8.4 0 0 1 8.2 3.9 8.5 8.5 0 1 0 20.2 15.8Z"/></svg>';
  };
  let darkTheme = false;
  try { darkTheme = localStorage.getItem("noyau-theme") === "dark"; } catch (error) { console.warn("Préférence de thème non disponible.", error); }
  setTheme(darkTheme);
  themeButton.addEventListener("click", () => {
    darkTheme = !document.body.classList.contains("dark-theme");
    try { localStorage.setItem("noyau-theme", darkTheme ? "dark" : "light"); } catch (error) { console.error("Impossible de mémoriser le thème.", error); }
    setTheme(darkTheme);
  });
  const menuButton = document.getElementById("mobile-menu");
  menuButton.addEventListener("click", () => {
    const open = document.querySelector(".main-nav").classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
    document.querySelector(".main-nav").classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

loadPublishedListings();
activeProperties = [...properties];
renderCities();
renderProperties();
setupEvents();
try {
  const session = JSON.parse(localStorage.getItem("noyau-session") || "null");
  if (session) setSignedIn(session);
} catch (error) { console.error("Session locale invalide.", error); }
