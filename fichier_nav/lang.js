const translations = {
    fr: {
      accueil: "Accueil",
      a_propos: "À propos",
      services: "Nos Services",
      projets: "Projets",
      contact: "Contact",
      titre_principal: "Bienvenue sur le site de Dandjin",
      paragraphe_intro: "Nous sommes spécialisés dans les travaux de dragage et de construction.",
      // Ajoute ici tous les autres textes à traduire
    },
    en: {
      accueil: "Home",
      a_propos: "About",
      services: "Our Services",
      projets: "Projects",
      contact: "Contact",
      titre_principal: "Welcome to Dandjin's Website",
      paragraphe_intro: "We specialize in dredging and construction work.",
      // Ajoute ici tous les autres textes à traduire
    }
  };
  
  function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key] || key;
    });
    localStorage.setItem("lang", lang);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "fr";
    changeLanguage(savedLang);
  });
  