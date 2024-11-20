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
                                <a class="menu" href="index.html">contact</a>
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
                                <a class="menu" href="index.html">contact</a>
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
                <div class="bracket-container">
                    <div class="corner top-left"></div>
                    <div class="corner bottom-right"></div>
                    <div class="bracket-content">
                        <p style="text-align: left" class="subtitle">GRAPHIC</br>& VISUAL</br>DESIGNER</p>
                    </div>
                </div>
                    <ul class="menu-li">
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html"><p>home</p></a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html#profile"><p>about me</p></a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html#projects"><p>works</p></a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-btn">
                                <a class="menu" href="index.html"><p>contact</p></a>
                            </button>
                        </li>
                    </ul>
                    <ul class="social-container">
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