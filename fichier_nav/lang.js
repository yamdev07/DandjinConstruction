// Fonction pour charger les traductions depuis le fichier JSON
async function loadTranslations() {
  const response = await fetch('lang.json');
  const data = await response.json();
  return data;
}

// Appliquer les traductions dynamiquement
function applyTranslations(lang, translations) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Détection de la langue et application des traductions
document.addEventListener('DOMContentLoaded', async () => {
  const translations = await loadTranslations();
  const currentLang = localStorage.getItem('lang') || 'fr'; // Langue par défaut
  applyTranslations(currentLang, translations);

  // Gestion du changement de langue via un sélecteur
  const languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    languageSelect.value = currentLang;
    languageSelect.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      localStorage.setItem('lang', selectedLang);
      applyTranslations(selectedLang, translations);
    });
  }
});
