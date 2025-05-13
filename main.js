document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const links = document.querySelectorAll(".onglets a");

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href && href.includes(page)) {
            link.classList.add("active");
        }
    });

    // Si la page est la racine ("/" sans fichier), on force Accueil comme actif
    if ((page === "" || page === "index.html") && document.getElementById("home-link")) {
        document.getElementById("home-link").classList.add("active");
    }
});
