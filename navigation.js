(function () {
    var mount = document.getElementById("site-nav");
    if (!mount) {
        throw new Error('Missing element with id "site-nav".');
    }

    var isHomePage = window.location.pathname.endsWith("/") || window.location.pathname.endsWith("/index.html");
    var homePrefix = isHomePage ? "" : "index.html";
    var brandHref = isHomePage ? "#" : "index.html";

    mount.innerHTML = `
        <nav>
            <div class="nav-container">
                <a href="${brandHref}" class="nav-brand-logo-link" title="Freie Christliche Bildung Rheinhessen-Nahe e.V.">
                    <img src="Logo ohne Text.png" alt="Freie Christliche Bildung Rheinhessen-Nahe e.V." class="nav-full-logo">
                </a>
                <input type="checkbox" id="navToggle" class="nav-toggle-input" aria-hidden="true" tabindex="-1">
                <label class="mobile-menu-btn" id="menuBtn" for="navToggle" role="button" aria-label="Menü öffnen / schließen">
                    <span class="menu-icon icon-open">&#x2630;</span>
                    <span class="menu-icon icon-close">&#x2715;</span>
                </label>
                <div class="nav-right-group" id="mobileNav">
                    <ul>
                        <li><a href="${homePrefix}#vision">Vision</a></li>
                        <li><a href="${homePrefix}#wer-wir-sind">Über uns</a></li>
                        <li><a href="${homePrefix}#konzept">Konzept</a></li>
                        <li><a href="${homePrefix}#mitmachen">Mitmachen</a></li>
                        <li><a href="${homePrefix}#spenden">Spenden</a></li>
                        <li><a href="${homePrefix}#kontakt">Kontakt</a></li>
                        <li><a href="${homePrefix}#formular" class="nav-cta">Kind vormerken</a></li>
                    </ul>
                </div>
            </div>
        </nav>`;

    var toggle = document.getElementById("navToggle");
    var menuButton = document.getElementById("menuBtn");

    function closeMobileNav() {
        toggle.checked = false;
        menuButton.classList.remove("active");
    }

    window.closeMobileNav = closeMobileNav;

    toggle.addEventListener("change", function () {
        menuButton.classList.toggle("active", toggle.checked);
    });

    document.addEventListener("click", function (event) {
        if (toggle.checked && !event.target.closest(".nav-container")) {
            closeMobileNav();
        }
    });

    mount.querySelectorAll(".nav-right-group a").forEach(function (link) {
        link.addEventListener("click", closeMobileNav);
    });
})();
