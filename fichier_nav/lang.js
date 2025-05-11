const translations = {
  fr: {
    welcome: "Bienvenue chez DANDJIN DREDGING CONSTRUCTION",
    tagline: "Experts en construction, dragage et travaux maritimes",
    discoverServices: "Découvrir nos services",
    services: "Nos Services",
    dragageText: "Travaux de curage, nettoyage de ports, fleuves et lacs.",
    constructionText: "Ouvrages solides : routes, berges, quais maritimes, etc.",
    transportText: "Services de logistique portuaire, affrètement, et transport de marchandises par voie navigable.",
    about: "À propos de Dandjin",
    about1: "DANDJIN est une entreprise innovante spécialisée dans le dragage, la vente de sable...",
    about2: "Nos opérations sont guidées par l'excellence, la durabilité et l'innovation.",
    trustedBy: "Ils nous font confiance",
    testimonial1: "Travail impeccable pour notre projet de port...",
    testimonial2: "Sable de qualité supérieure livré rapidement...",
    testimonial3: "Dandjin nous accompagne depuis plusieurs années...",
    home: "Accueil",
    about: "À propos",
    services: "Services",
    contact: "Contactez-nous",
    search: "Rechercher..."
  },
  en: {
    welcome: "Welcome to DANDJIN DREDGING CONSTRUCTION",
    tagline: "Experts in construction, dredging and maritime works",
    discoverServices: "Discover our services",
    services: "Our Services",
    dragageText: "Dredging operations, port cleaning, rivers and lakes maintenance.",
    constructionText: "Solid structures: roads, banks, maritime quays, etc.",
    transportText: "Port logistics services, freight and waterway transport.",
    about: "About Dandjin",
    about1: "DANDJIN is an innovative company specialized in dredging, sand sales...",
    about2: "Our operations are driven by excellence, sustainability and innovation.",
    trustedBy: "Our Clients Trust Us",
    testimonial1: "Excellent work on our port project...",
    testimonial2: "Top quality sand delivered quickly...",
    testimonial3: "Dandjin has supported us for years...",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact Us",
    search: "Search..."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Gère les placeholders aussi
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });
}
