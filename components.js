class homeHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav  class="nav-desktop-home">
                <ul>
                    <li style="width: 44vw"></li>
                    <li>
                        <button class="menu">
                            <a href="index.html#profile">profile</a>
                        </button>
                    </li>
                    <li>
                        <button class="menu">
                            <a href="index.html#projects">projects</a>
                        </button>
                    </li>
                </ul>
            </nav>
        `;
    }
}
class mobileHeader extends HTMLElement {
}
class desktopHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav  class="nav-desktop">
                <ul>
                    <li>
                        <button class="menu">
                            <a href="index.html#profile">profile</a>
                        </button>
                    </li>
                    <li>
                        <button class="menu">
                            <a href="index.html#projects">projects</a>
                        </button>
                    </li>
                </ul>
            </nav>
        `;
    }
}
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="negative-space">
                <ul class="contact-info">
                    <li class="link">
                        <a href="mailto:lobiancostefania@gmail.com">lobiancostefania@gmail.com</a>
                    </li>
                    <li class="link">
                        <a onclick="window.open('https://www.behance.net/stefanialobiancobe')">behance</a>
                    </li>
                    <li class="link">
                        <a onClick="window.open('https://www.linkedin.com/in/stefania-lo-bianco/')">linkedin</a>
                    </li>
                </ul>
            </footer>
            `;
    }
}

customElements.define('footer-component', Footer);
customElements.define('nav-bar', homeHeader);
customElements.define('nav-desk', desktopHeader);
customElements.define('mobile-nav-bar', mobileHeader);