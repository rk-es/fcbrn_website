(function () {
    var mount = document.getElementById("site-footer");
    if (!mount) {
        throw new Error('Missing element with id "site-footer".');
    }

    mount.innerHTML = `
        <footer>
            <div class="footer-inner">
                <div class="footer-logo-badge">
                    <a href="index.html" aria-label="Zur Startseite">
                        <img src="Logo ohne Text.png" alt="Freie Christliche Bildung Rheinhessen-Nahe e.V." class="footer-logo">
                    </a>
                </div>

                <div class="footer-verse-container">
                    <div class="footer-verse-title">Im Vertrauen auf unseren Herrn</div>
                    <p class="footer-verse">
                        „Und der HERR, unser Gott, sei uns freundlich und fördere das Werk unsrer Hände bei uns.“
                    </p>
                    <div class="footer-verse-ref">Psalm 90,17</div>
                </div>

                <div class="footer-tagline"></div>

                <div class="footer-copyright">
                    <p>&copy; 2026 Freie Christliche Bildung Rheinhessen-Nahe e.V. &middot; Alle Rechte vorbehalten &middot; <a href="impressum.html">Impressum</a> &middot; <a href="datenschutz.html">Datenschutz</a></p>
                </div>
            </div>
        </footer>`;
})();
