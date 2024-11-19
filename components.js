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
            </footer>
        `;
    }
}

customElements.define('nav-home', navBarHome);
customElements.define('nav-works', navBar);
customElements.define('foot-home', footHome);