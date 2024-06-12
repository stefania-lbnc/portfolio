class homeHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-background-home">
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
</nav>
        `;
    }
}
class mobileHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="mobile-header-home" class=" nav-background-home mobile">
            <div class="hamburger-menu">
                <div class="hamburger-icon" onClick="toggleMenu()">
                    <!-- these three span are going to be the lines of the hamburger menu-->
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="menu-links collapsible">
                    <ul>
                        <li>
                            <button class="menu-mobile menu-btn">
                                <a href="index.html#home">home</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-mobile menu-btn">
                                <a href="index.html#profile">profile</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-mobile menu-btn">
                                <a href="index.html#projects">projects</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
    }
}
class desktopHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-desktop desktop">
                <ul>
                    <li style="width: 36vw"></li>
                    <li>
                    <button class="menu">
                            <a href="index.html">home</a>
                        </button>
                    </li>
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
            <nav class="top-bar-background desktop">
                <div class="nav-desktop">
                    <ul>
                        <li style="width: 36vw"></li>
                        <li>
                        <button class="menu">
                                <a href="index.html">home</a>
                            </button>
                        </li>
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
                </div>
            </nav>
        `;
    }
}
class mobileHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="mobile-header" class="top-bar-background mobile">
                <div class="hamburger-menu">
                <div class="hamburger-icon" onClick="toggleMenu()">
                    <!-- these three span are going to be the lines of the hamburger menu-->
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="menu-links collapsible" style="background-color: white">
                    <ul>
                        <li>
                            <button class="menu-mobile menu-btn">
                                <a href="index.html#home">home</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-mobile menu-btn">
                                <a href="index.html#profile">profile</a>
                            </button>
                        </li>
                        <li>
                            <button class="menu-mobile menu-btn">
                                <a href="index.html#projects">projects</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        `;
    }
}
class desktopFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="negative-space-10 desktop">
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
class mobileFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="negative-space-10 mobile" style="border-top: 1px solid black;">
                <ul class="contact-info">
                    <li class="material-symbols-outlined">
                        <a href="mailto:lobiancostefania@gmail.com">mail</a>
                    </li>
                    <li class="icon">
                        <a onclick="window.open('https://www.behance.net/stefanialobiancobe')">
                        <img src="assets/behance.svg"></a>
                    </li>
                    <li class="icon">
                        <a onClick="window.open('https://www.linkedin.com/in/stefania-lo-bianco/')">
                        <img src="assets/linkedin.svg"></a>
                    </li>
                </ul>
            </footer>
            `;
    }
}

customElements.define('footer-desktop', desktopFooter);
customElements.define('footer-mobile', mobileFooter);
customElements.define('nav-bar', homeHeader);
customElements.define('nav-mobile-bar', mobileHome);
customElements.define('nav-desk', desktopHeader);
customElements.define('mobile-bar', mobileHeader);