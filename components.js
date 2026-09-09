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
   ==================================================================== */
(function () {
    const heroPin = document.getElementById('heroPin');
    if (!heroPin) return;

    function lerp(a, b, t) { return a + (b - a) * t; }

    const bgSplit = document.getElementById('bgSplit');
    const frameFixed = document.getElementById('frameFixed');
    const siteFooter = document.getElementById('siteFooter');
    const fillLeft = document.getElementById('scrollFillLeft');
    const fillRight = document.getElementById('scrollFillRight');
    const trackLeft = document.querySelector('.track-left');
    const markerLeft = document.getElementById('markerLeft');
    const markerRight = document.getElementById('markerRight');
    const sweepLine = document.getElementById('sweepLine');
    const slide1 = document.getElementById('heroSlide1');
    const slide2 = document.getElementById('heroSlide2');
    const footerEls = siteFooter.querySelectorAll('a, .chevron');

    function update(pct) {
        const trackTop = trackLeft.offsetTop;
        const trackHeight = trackLeft.getBoundingClientRect().height;

        // un'unica linea per tutto: puntini, linea visibile, testo, sfondo.
        // il centro si muove da sotto al testo a sopra; l'inclinazione
        // (dal reale andamento opposto dei due lati) conta solo a meta' passaggio
        const centerY = lerp(0.95, 0.05, pct) * window.innerHeight;
        const halfTilt = (trackHeight / 2) * (1 - 2 * pct);
        const leftY = centerY - halfTilt;
        const rightY = centerY + halfTilt;

        markerLeft.style.top = leftY + 'px';
        markerLeft.style.bottom = 'auto';
        markerRight.style.top = rightY + 'px';
        markerRight.style.bottom = 'auto';

        const fillPxLeft = Math.min(Math.max(leftY - trackTop, 0), trackHeight);
        const fillPxRight = Math.min(Math.max((trackTop + trackHeight) - rightY, 0), trackHeight);
        fillLeft.style.height = fillPxLeft + 'px';
        fillRight.style.height = fillPxRight + 'px';

        const leftX = markerLeft.getBoundingClientRect().left + 3.5;
        const rightX = markerRight.getBoundingClientRect().left + 3.5;
        sweepLine.setAttribute('x1', leftX);
        sweepLine.setAttribute('y1', leftY);
        sweepLine.setAttribute('x2', rightX);
        sweepLine.setAttribute('y2', rightY);
        sweepLine.style.opacity = (pct > 0.001 && pct < 0.999) ? '1' : '0';

        const leftYpct = (leftY / window.innerHeight) * 100;
        const rightYpct = (rightY / window.innerHeight) * 100;

        const clipBelow = `polygon(0% ${leftYpct}%, 100% ${rightYpct}%, 100% 100%, 0% 100%)`;
        slide1.style.clipPath = `polygon(0% 0%, 100% 0%, 100% ${rightYpct}%, 0% ${leftYpct}%)`;
        slide2.style.clipPath = clipBelow;
        bgSplit.style.clipPath = pct <= 0.001
            ? 'polygon(0% 110%, 100% 110%, 100% 110%, 0% 110%)'
            : (pct >= 0.999 ? 'none' : clipBelow);

        slide1.style.transform = `scale(${1 - 0.18 * pct})`;
        slide2.style.transform = `scale(${0.82 + 0.18 * pct})`;

        function boundaryYat(x) { return leftY + (rightY - leftY) * (x - trackLeft.getBoundingClientRect().left) / (window.innerWidth - 2 * trackLeft.getBoundingClientRect().left); }
        footerEls.forEach(el => {
            const r = el.getBoundingClientRect();
            const cx = r.left + r.width / 2;
            const onLight = pct >= 0.999 || (pct > 0.001 && r.top > boundaryYat(cx));
            el.style.color = onLight ? '#110E03' : '#FCF9EE';
        });

        frameFixed.classList.toggle('on-dark', pct > 0.5);
    }

    // Animazione a tempo: tempo per leggere ciascuna frase, poi il passaggio.
    const HOLD_1 = 2600;
    const SWEEP = 1100;
    function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

    let lastPct = 0;
    let heroIntroDone = false;
    let startTime = null;
    let leftYatIntroEnd = 0, rightYatIntroEnd = 0, scrollYAtIntroEnd = 0;
    let wedgeLeftPct = 0, wedgeRightPct = 0;

    function frame(now) {
        if (startTime === null) startTime = now;
        const elapsed = now - startTime;

        let pct;
        if (elapsed < HOLD_1) pct = 0;
        else if (elapsed < HOLD_1 + SWEEP) pct = easeInOut((elapsed - HOLD_1) / SWEEP);
        else pct = 1;

        lastPct = pct;
        update(pct);

        if (elapsed < HOLD_1 + SWEEP + 50) {
            requestAnimationFrame(frame);
        } else {
            heroIntroDone = true;
            leftYatIntroEnd = parseFloat(markerLeft.style.top);
            rightYatIntroEnd = parseFloat(markerRight.style.top);
            wedgeLeftPct = (leftYatIntroEnd / window.innerHeight) * 100;
            wedgeRightPct = (rightYatIntroEnd / window.innerHeight) * 100;
            scrollYAtIntroEnd = window.scrollY;
            updateLinesFromScroll();
        }
    }
    requestAnimationFrame(frame);
    window.addEventListener('resize', () => heroIntroDone ? updateLinesFromScroll() : update(lastPct));

    // Dopo l'intro, le linee continuano dallo stesso punto (non si azzerano)
    // e seguono lo scroll fino in fondo alla pagina.
    function updateLinesFromScroll() {
        const trackTop = trackLeft.offsetTop;
        const trackHeight = trackLeft.getBoundingClientRect().height;
        const trackBottom = trackTop + trackHeight;

        const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
        const remaining = Math.max(totalScrollable - scrollYAtIntroEnd, 1);
        const extraScroll = Math.max(window.scrollY - scrollYAtIntroEnd, 0);
        const pct2 = Math.min(extraScroll / remaining, 1);

        const leftY = lerp(leftYatIntroEnd, trackBottom, pct2);
        const rightY = lerp(rightYatIntroEnd, trackTop, pct2);

        fillLeft.style.height = Math.max(leftY - trackTop, 0) + 'px';
        markerLeft.style.top = leftY + 'px';
        markerLeft.style.bottom = 'auto';

        fillRight.style.height = Math.max(trackBottom - rightY, 0) + 'px';
        markerRight.style.top = rightY + 'px';
        markerRight.style.bottom = 'auto';

        sweepLine.style.opacity = '0';

        const wedgeProgress = Math.min(pct2 * 3, 1);
        if (wedgeProgress >= 1) {
            bgSplit.style.clipPath = 'none';
        } else {
            const wl = lerp(wedgeLeftPct, -10, wedgeProgress);
            const wr = lerp(wedgeRightPct, -10, wedgeProgress);
            bgSplit.style.clipPath = `polygon(0% ${wl}%, 100% ${wr}%, 100% 100%, 0% 100%)`;
        }
    }
    window.addEventListener('scroll', () => { if (heroIntroDone) updateLinesFromScroll(); });
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

