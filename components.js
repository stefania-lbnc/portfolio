class deskHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="desk-nav light-yellow">
                    <ul class="page-width">
                        <li></li>
                        <li>
                            <button class="menu-btn brackets">
                                <a class="menu" href="index.html#profile">about me</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn brackets">
                                <a class="menu" href="index.html#projects">works</a>
                            </button>
                        </li>
                    </ul>
            </nav>
        `;
    }
}
class deskNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="desk-nav" style="background-color: white">
                    <ul class="page-width">
                        <li>
                            <button class="menu-btn brackets">
                                <a class="menu" href="index.html">Home</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn brackets">
                                <a class="menu" href="index.html#profile">about me</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn brackets">
                                <a class="menu" href="index.html#projects">works</a>
                            </button>
                        </li>
                    </ul>
            </nav>
        `;
    }
}
class mobileHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="mobile-nav light-yellow">
                    <ul class="page-width" style="justify-content: space-between">
                        <li>
                            <button class="menu-btn brackets">
                                <a class="menu" href="index.html#profile">about me</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn brackets">
                                <a class="menu" href="index.html#projects">works</a>
                            </button>
                        </li>
                    </ul>
            </nav>
        `;
    }
}
class mobileNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="mobile-nav" style="background-color: white">
                    <ul class="page-width" style="justify-content: space-between">
                        <li>
                            <button class="menu-btn brackets">
                                <a class="menu" href="index.html">Home</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn brackets">
                                <a class="menu" href="index.html#profile">about me</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn brackets">
                                <a class="menu" href="index.html#projects">works</a>
                            </button>
                        </li>
                    </ul>
            </nav>
        `;
    }
}
class deskFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="o-1-fifth">
                <div class="footer-width">
                    <div class="connection">
                        <ul>
                            <il class="dates">Location</il>
                            <il><p>Rome, Italy</p></il>
                        </ul>
                        <ul>
                            <il class="dates">Contact me</il>
                            <il><p>lobiancostefania@gmail.com</p></il>
                            <il><p>www.behance.net/stefanialobiancobe</p></il>
                            <il><p>https://www.linkedin.com/in/stefania-lo-bianco/</p></il>
                        </ul>
                    </div>
                    <div style="scale: 0.5">
                        <a href="index.html">
                            <img class="img-contain" src="assets/logo.svg">
                        </a>
                    </div>
                </div>
            </footer>
            `;
    }
}
class mobFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="o-1-fifth">
                <div class="footer-width">
                    <div class="connection">
                        <ul>
                            <il class="dates">Location</il>
                            <il><p>Rome, Italy</p></il>
                        </ul>
                        <ul class="connection" style="justify-content: end">
                            <il class="roles">Graphic Designer</il>
                            <il class="roles">Visual Designer</il>
                        </ul>
                        <ul style="font-size: 32px">
                            <il class="dates">Contact me</il>
                            <il><p>lobiancostefania@gmail.com</p></il>
                            <div class="jobs-dates">
                            <il><a href="https://www.behance.net/stefanialobiancobe"><img class="img-contain" src="assets/behance.svg" style="width: 40px"></a></il>
                            <il><a href="https://www.linkedin.com/in/stefania-lo-bianco/"><img class="img-contain" src="assets/linkedin.svg" style="width: 40px"></a></il>
</div>
                        </ul>
                    </div>
                </div>
            </footer>
            `;
    }
}

customElements.define('nav-home', deskHome);
customElements.define('nav-pro', deskNav);
customElements.define('nav-mob-home', mobileHome);
customElements.define('nav-mob-pro', mobileNav);
customElements.define('desk-footer', deskFooter);
customElements.define('mob-footer', mobFooter);