class navBarHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                    <ul class="menu-li">
                        <li></li>
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html#profile">about me</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html#projects">works</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html#contacts">contact</a>
                            </button>
                        </li>
                    </ul>
            </nav>
        `;
    }
}
class navBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                    <ul class="menu-li">
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html">home</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html#profile">about me</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html#projects">works</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html#contacts">contact</a>
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
                <div class="projects-width" style="justify-content: space-between;">
                <div class="bracket-container" style="height: fit-content">
                    <div class="corner top-left"></div>
                    <div class="corner bottom-right"></div>
                    <div class="bracket-content">
                        <p style="text-align: left" class="title">GRAPHIC</br>& VISUAL</br>DESIGNER</p>
                    </div>
                </div>
                <ul class="footer-li">
                    <li>
                        <a href="mailto:lobiancostefania@gmail.com">
                            <img class="social-content" src="assets/chat-bubble-white.svg">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/stefanialobiancobe" target="_blank" class="social-content">
                            <p class="social">Bē</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/stefania-lo-bianco/" target="_blank" class="social-content">
                            <p class="social">in</p>
                        </a>
                    </li>
                </ul>
                </div>
                <div class="sixty"></div>
                <ul class="social-container" style="align-content: start">
                    <li><p>Rome, Italy</p></li>
                    <li><a href="mailto:lobiancostefania@gmail.com"><p>lobiancostefania@gmail.com</p></a></li>
                    <li><a><p>Download Resume</p></a></li>
                </ul>
            </footer>
        `;
    }
}

customElements.define('nav-home', navBarHome);
customElements.define('nav-works', navBar);
customElements.define('foot-home', footHome);

