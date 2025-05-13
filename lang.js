// Charger le fichier global avec toutes les langues
async function loadTranslations() {
  const response = await fetch('lang.json'); // un seul fichier
  return await response.json();
}

function applyTranslations(lang, translations) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const currentLang = localStorage.getItem('lang') || 'fr';
  const allTranslations = await loadTranslations();
  applyTranslations(currentLang, allTranslations);

  const languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    languageSelect.value = currentLang;

    languageSelect.addEventListener('change', async (e) => {
      const selectedLang = e.target.value;
      localStorage.setItem('lang', selectedLang);
      applyTranslations(selectedLang, allTranslations);
    });
  }
});
