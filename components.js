class navBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav style="justify-content: space-between;">
                    <ul>
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html">Stefania Lo Bianco</a>
                            </button>
                        </li>
                    </ul>
                    <ul class="link-container">
                         <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html#projects">works</a>
                            </button>
                        </li>
                        <li>
                             <button class="menu-btn">
                                <a class="menu" href="index.html#about">manifesto</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="contacts.html">get in touch</a>
                            </button>
                        </li>
                    </ul>
            </nav>
        `;
    }
}
class navBarContacts extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav style="background-color: black">
                    <ul class="link-container">
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html">home</a>
                            </button>
                        </li>
                         <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html#projects">works</a>
                            </button>
                        </li>
                        <li>
                             <button class="menu-btn">
                                <a class="menu" href="index.html#about">manifesto</a>
                            </button>
                        </li>
                    </ul>
            </nav>
        `;
    }
}
class footHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <ul class="link-container">
                    <li>
                        <a href="https://www.behance.net/stefanialobiancobe" target="_blank" class="social-content">
                            <p class="menu">Bēhance</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/stefania-lo-bianco/" target="_blank" class="social-content">
                            <p class="menu">LinkedIn</p>
                        </a>
                    </li>
                </ul>
                <ul class="link-container display">
                    <li><a href="mailto:lobiancostefania@gmail.com"><p class="menu" style="text-align: right">lobiancostefania@gmail.com</p></a></li>
                    <li class="menu"><a href="assets/Stefania%20Lo%20Bianco%20Resume.pdf" target="blank"><p class="menu" style="text-align: right">Résumé</p></a></li>
                </ul>
                <ul class="link-container display">
                    <li><p>Designed by<br><a href="index.html">Stefania Lo Bianco</a> </p></li>
                </ul>
            </footer>
        `;
    }
}
class footWorks extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="seven-two-rem"></div>
            <div class="seven-two-rem mobile"></div>
            <footer class="porcelain">
                <ul class="link-container">
                    <li>
                        <a href="https://www.behance.net/stefanialobiancobe" target="_blank" class="social-content">
                            <p class="menu">Bēhance</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/stefania-lo-bianco/" target="_blank" class="social-content">
                            <p class="menu">LinkedIn</p>
                        </a>
                    </li>
                </ul>
                <ul class="link-container display">
                    <li><a href="mailto:lobiancostefania@gmail.com"><p class="menu" style="text-align: right">lobiancostefania@gmail.com</p></a></li>
                    <li class="display"><a href="assets/Stefania%20Lo%20Bianco%20Resume.pdf" target="blank"><p class="menu" style="text-align: right">Résumé</p></a></li>
                </ul>
            </footer>
        `;
    }
}
class arrowBtn extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="button-container display">
                <div style="position: relative;">
                    <div class="border-btn btn-content">
                        <p class="menu-btn" onclick="goBack()" style="text-align: left">Back</p>
                    </div>
                </div>
                <div style="position: relative;">
                    <div class="border-btn btn-content">
                        <p class="menu-btn"><a href="index.html#projects">All works</a></p>
                    </div>
                </div>
                <div style="position: relative;">
                    <div class="border-btn btn-content">
                        <p class="menu-btn" onclick="goForward()">Next</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('nav-bar', navBar);
customElements.define('nav-contacts', navBarContacts);
customElements.define('foot-home', footHome);
customElements.define('foot-works', footWorks);
customElements.define('arrow-btn', arrowBtn);

window.addEventListener('scroll', () => {
    const infoContainer = document.querySelector('.info-container');
    const presentation = document.querySelector('.my-projects');
    const boardsContainer = document.querySelector('.four-columns');

    if (!infoContainer || !presentation || !boardsContainer) return;

    const infoContainerInitialWidth = getComputedStyle(infoContainer).width;
    const boardsContainerInitialWidth = getComputedStyle(boardsContainer).width;
    const presentationTop = presentation.getBoundingClientRect().top;

    if (presentationTop <= 0) {
        infoContainer.style.position = 'fixed';
        infoContainer.style.top = '21px';
        infoContainer.style.right = '10vw';
        infoContainer.style.width = infoContainerInitialWidth;
        boardsContainer.style.width = boardsContainerInitialWidth;
        infoContainer.style.zIndex = '10';
    } else {
        infoContainer.style.position = 'relative';
        infoContainer.style.top = '';
        infoContainer.style.right = '';
        infoContainer.style.width = '';
        infoContainer.style.zIndex = '';
    }
});

function goBack() {
    window.history.back();
}
const pageOrder = [
    "magazine.html",
    "blindex.html",
    "terraviva.html",
    "equipe.html",
    "lope.html",
    "iccrom.html",
    "frimm.html",
];

function goForward() {
    const currentURL = window.location.pathname.split("/").pop();
    const currentIndex = pageOrder.indexOf(currentURL);

    if (currentIndex >= 0) {
        const nextIndex = (currentIndex + 1) % pageOrder.length;
        window.location.href = pageOrder[nextIndex];
    }
}
const buttons = document.querySelectorAll('.my-projects');
const worksPreviewImg = document.getElementById('works-preview-img');

buttons.forEach(button => {
    const typeHover = button.querySelector('.type-hover');
    const projects = button.querySelector('.big-p');
    const previewSrc = button.dataset.preview;

    button.addEventListener('mouseover', () => {
        if (typeHover) typeHover.classList.add('show');
        if (projects) projects.classList.add('hover-effect');
        if (worksPreviewImg && previewSrc) {
            worksPreviewImg.src = previewSrc;
            worksPreviewImg.classList.add('active');
        }
    });
    button.addEventListener('mouseout', () => {
        if (typeHover) typeHover.classList.remove('show');
        if (projects) projects.classList.remove('hover-effect');
        if (worksPreviewImg) worksPreviewImg.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skills");
    if (skills.length === 0) return;
    let index = 0;

    function showNextSkill() {
        skills.forEach(skill => {
            skill.classList.remove("active");
            skill.style.display = "none";
        });

        skills[index].classList.add("active");
        skills[index].style.display = "grid";

        index = (index + 1) % skills.length;
    }

    showNextSkill();
    setInterval(showNextSkill, 4000);
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function (event) {
    touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 30;

    if (touchEndX - touchStartX > swipeThreshold) {
        if (window.prevButton) window.prevButton.click();
    }

    if (touchStartX - touchEndX > swipeThreshold) {
        if (window.nextButton) window.nextButton.click();
    }
}

const pinWrap = document.querySelector('.pin-wrap');
if (pinWrap) {
    const DARK_TEXT = [17, 14, 3];
    const LIGHT_TEXT = [255, 254, 242];
    const GOLD_BG = [237, 220, 160];
    const DARK_BG = [17, 14, 3];

    function lerp(a, b, t) {
        return a + (b - a) * t;
    }

    function mixRgb(from, to, t) {
        const r = Math.round(lerp(from[0], to[0], t));
        const g = Math.round(lerp(from[1], to[1], t));
        const b = Math.round(lerp(from[2], to[2], t));
        return `rgb(${r}, ${g}, ${b})`;
    }

    function updateUiColor() {
        const rect = pinWrap.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = -rect.top;
        let progress = total > 0 ? scrolled / total : 0;
        progress = Math.min(Math.max(progress, 0), 1);

        document.documentElement.style.setProperty('--ui-color', mixRgb(DARK_TEXT, LIGHT_TEXT, progress));
        document.documentElement.style.setProperty('--ui-bg', mixRgb(GOLD_BG, DARK_BG, progress));
    }

    updateUiColor();
    window.addEventListener('scroll', updateUiColor);
    window.addEventListener('resize', updateUiColor);
}
/* ====================================================================
   Hero animato + cornice fissa + footer — solo sulle pagine che hanno
   #heroPin (oggi: index.html). Sulle altre pagine questo blocco non
   fa nulla, il resto del sito non viene toccato.
   Completamente reversibile: dal primo scroll in poi tutto e' guidato
   dalla posizione di scroll, in entrambe le direzioni — tornare su
   riporta davvero l'hero al punto di partenza, non solo la cornice.
   ==================================================================== */
(function () {
    const heroPin = document.getElementById('heroPin');
    if (!heroPin) return;

    function lerp(a, b, t) { return a + (b - a) * t; }
    function clamp01(t) { return Math.min(Math.max(t, 0), 1); }

    const bgSplit = document.getElementById('bgSplit');
    const frameFixed = document.getElementById('frameFixed');
    const siteFooter = document.getElementById('siteFooter');
    const footerEls = siteFooter.querySelectorAll('a, .chevron');
    const fillLeft = document.getElementById('scrollFillLeft');
    const fillRight = document.getElementById('scrollFillRight');
    const trackLeft = document.querySelector('.track-left');
    const markerLeft = document.getElementById('markerLeft');
    const markerRight = document.getElementById('markerRight');
    const sweepLine = document.getElementById('sweepLine');
    const slide1 = document.getElementById('heroSlide1');
    const slide2 = document.getElementById('heroSlide2');

    // Aggiorna tutto (testo, puntini, linea, sfondo, footer) in base a un
    // singolo pct 0->1. Usata sia dall'autoplay che dallo scroll: e' la
    // stessa funzione che disegna avanti e indietro, per questo tornare
    // su con lo scroll riporta l'hero esattamente al punto di partenza.
    function update(pct) {
        const trackTop = trackLeft.offsetTop;
        const trackHeight = trackLeft.getBoundingClientRect().height;
        const trackBottom = trackTop + trackHeight;

        // confine del testo: copre l'intero schermo, con un'inclinazione
        // tra i due lati per l'effetto diagonale (puo' uscire da 0-100%,
        // normale per un clip-path a schermo intero)
        const centerY = lerp(0.95, 0.05, pct) * window.innerHeight;
        const halfTilt = (trackHeight / 4) * (1 - 2 * pct);
        const textLeftY = centerY - halfTilt;
        const textRightY = centerY + halfTilt;

        // puntini: restano sempre dentro la traccia visibile
        const leftY = lerp(trackBottom, trackTop, pct);
        const rightY = lerp(trackTop, trackBottom, pct);

        markerLeft.style.top = leftY + 'px';
        markerLeft.style.bottom = 'auto';
        markerRight.style.top = rightY + 'px';
        markerRight.style.bottom = 'auto';

        fillLeft.style.height = Math.min(Math.max(leftY - trackTop, 0), trackHeight) + 'px';
        fillRight.style.height = Math.min(Math.max(trackBottom - rightY, 0), trackHeight) + 'px';

        const leftX = markerLeft.getBoundingClientRect().left + 3.5;
        const rightX = markerRight.getBoundingClientRect().left + 3.5;
        sweepLine.setAttribute('x1', leftX);
        sweepLine.setAttribute('y1', leftY);
        sweepLine.setAttribute('x2', rightX);
        sweepLine.setAttribute('y2', rightY);
        sweepLine.style.opacity = (pct > 0.001 && pct < 0.999) ? '1' : '0';

        const leftYpct = (textLeftY / window.innerHeight) * 100;
        const rightYpct = (textRightY / window.innerHeight) * 100;
        const clipBelow = `polygon(0% ${leftYpct}%, 100% ${rightYpct}%, 100% 100%, 0% 100%)`;
        slide1.style.clipPath = `polygon(0% 0%, 100% 0%, 100% ${rightYpct}%, 0% ${leftYpct}%)`;
        slide2.style.clipPath = clipBelow;
        bgSplit.style.clipPath = clipBelow;

        slide1.style.transform = `scale(${1 - 0.18 * pct})`;
        slide2.style.transform = `scale(${0.82 + 0.18 * pct})`;

        footerEls.forEach(el => {
            const r = el.getBoundingClientRect();
            const cx = r.left + r.width / 2;
            const boundaryY = leftY + (rightY - leftY) * (cx - leftX) / (rightX - leftX);
            el.style.color = (r.top > boundaryY) ? '#FCF9EE' : '#110E03';
        });
        frameFixed.classList.toggle('on-dark', pct > 0.5);
    }

    // quanta corsa di scroll copre l'hero (il tratto in cui e' sticky):
    // scrollY diviso per questo, saturato 0-1, e' il pct — bidirezionale
    // per costruzione, nessuno stato "bloccato" da annullare tornando su
    function introRange() { return Math.max(heroPin.offsetHeight - window.innerHeight, 1); }

    const HOLD_1 = 2600;
    const SWEEP = 1100;
    function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

    let lastPct = 0;
    let userTookOver = false;
    let startTime = null;

    // Autoplay: gira finche' l'utente non scrolla. Al primo scroll si ferma
    // da solo (controllo in cima al frame) e da li' in poi decide lo scroll.
    function autoplayFrame(now) {
        if (userTookOver) return;
        if (startTime === null) startTime = now;
        const elapsed = now - startTime;

        let pct;
        if (elapsed < HOLD_1) pct = 0;
        else if (elapsed < HOLD_1 + SWEEP) pct = easeInOut((elapsed - HOLD_1) / SWEEP);
        else pct = 1;

        lastPct = pct;
        update(pct);

        if (elapsed < HOLD_1 + SWEEP + 400) {
            requestAnimationFrame(autoplayFrame);
        }
        // finita la corsa, l'hero resta fermo li' se l'utente non scrolla
        // mai — pronto comunque a rispondere appena inizia a farlo
    }
    requestAnimationFrame(autoplayFrame);

    // Oltre l'hero-pin (l'utente ha scrollato piu' in la' del tratto sticky):
    // il cuneo finisce di chiudersi e lo sfondo/footer restano scuri.
    // Anche questo e' reversibile: risalendo, il cuneo si riapre.
    // il confine del testo, allo stesso pct=1 con cui finisce l'hero:
    // il cuneo qui sotto deve ripartire esattamente da questi valori,
    // non da 0%/100% — con l'inclinazione non coincidono mai
    function textBoundaryAtEnd() {
        const trackHeight = trackLeft.getBoundingClientRect().height;
        const centerY = 0.05 * window.innerHeight;
        const halfTilt = (trackHeight / 4) * (1 - 2);
        const leftYpct = ((centerY - halfTilt) / window.innerHeight) * 100;
        const rightYpct = ((centerY + halfTilt) / window.innerHeight) * 100;
        return { leftYpct, rightYpct };
    }

    function updatePastHero() {
        const rect = heroPin.getBoundingClientRect();
        const pastPx = Math.max(-rect.bottom, 0);
        const closeRange = window.innerHeight * 0.4;
        const closeProgress = clamp01(pastPx / closeRange);

        if (pastPx <= 0) return; // ancora dentro l'hero-pin: ci pensa update() dentro onScroll

        if (closeProgress >= 1) {
            bgSplit.style.clipPath = 'none';
        } else {
            const end = textBoundaryAtEnd();
            const wl = lerp(end.leftYpct, -15, closeProgress);
            const wr = lerp(end.rightYpct, -15, closeProgress);
            bgSplit.style.clipPath = `polygon(0% ${wl}%, 100% ${wr}%, 100% 100%, 0% 100%)`;
        }
        sweepLine.style.opacity = '0';
        frameFixed.classList.add('on-dark');
        footerEls.forEach(el => { el.style.color = '#FCF9EE'; });
    }

    function onScroll() {
        userTookOver = true;
        const scrollY = window.scrollY;
        const range = introRange();

        if (scrollY <= range) {
            const pct = clamp01(scrollY / range);
            lastPct = pct;
            update(pct);
        }
        updatePastHero();
    }
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', () => update(lastPct));
})();


/* ====================================================================
   Linee della cornice, versione semplice: per le pagine che hanno
   #frameFixed ma non #heroPin (contatti, pagine progetto). Segue
   solo lo scroll della pagina, nessuna animazione a tempo.
   ==================================================================== */
(function () {
    const frameFixed = document.getElementById('frameFixed');
    const heroPin = document.getElementById('heroPin');
    if (!frameFixed || heroPin) return; // solo pagine senza hero

    const fillLeft = document.getElementById('scrollFillLeft');
    const fillRight = document.getElementById('scrollFillRight');
    const markerLeft = document.getElementById('markerLeft');
    const markerRight = document.getElementById('markerRight');
    const trackLeft = document.querySelector('.track-left');
    if (!trackLeft) return;

    function update() {
        const trackTop = trackLeft.offsetTop;
        const trackHeight = trackLeft.getBoundingClientRect().height;
        const scrolled = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? Math.min(Math.max(scrolled / max, 0), 1) : 0;
        const fillPx = pct * trackHeight;

        fillLeft.style.height = fillPx + 'px';
        markerLeft.style.top = (trackTop + fillPx) + 'px';
        fillRight.style.height = fillPx + 'px';
        markerRight.style.top = (trackTop + trackHeight - fillPx) + 'px';
    }
    update();
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
})();

/* ====================================================================
   Mezza cornice sulle pagine progetto: solo la linea sinistra,
   legata allo scroll della pagina — nessuna animazione a tempo qui.
   ==================================================================== */
(function () {
    const frame = document.querySelector('.frame-fixed.half');
    if (!frame) return;

    const track = frame.querySelector('.track-left');
    const fill = frame.querySelector('.fill-left');
    const marker = frame.querySelector('.marker-left');

    function update() {
        const trackTop = track.offsetTop;
        const trackHeight = track.getBoundingClientRect().height;
        const scrolled = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? Math.min(Math.max(scrolled / max, 0), 1) : 0;
        const fillPx = pct * trackHeight;
        fill.style.height = fillPx + 'px';
        marker.style.top = (trackTop + fillPx) + 'px';
    }
    update();
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
})();

