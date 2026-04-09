class WorksPageLayout extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                @import url('styles/style.css');
                @import url('styles/components.css');
            </style>
            <div class="content-width">
                <div>
                    <div class="project-title">
                        <p class="big-p four-columns"><slot name="title"></slot></p>
                        <p class="areas two-columns display" style="text-align: center"><slot name="year"></slot></p>
                    </div>
                    <p><slot name="description"></slot></p>
                </div>
                <div class="three-two-rem"></div>
                <div class="hero-container">
                    <img src="" alt="Hero Image">
                </div>
                <div class="three-two-rem"></div>
                <div class="profile-width">
                    <div class="areas"><slot name="highlight"></slot></div>
                    <div class="projects-width">
                        <p class="two-columns"><slot name="content-left"></slot></p>
                        <p class="four-columns"><slot name="content-right"></slot></p>
                    </div>
                </div>
            </div>
            <div class="three-two-rem"></div>
            <div class="presentation">
                <slot name="images"></slot>
            </div>
        `;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const heroImage = this.getAttribute('hero-image');
        if (heroImage) {
            this.shadowRoot.querySelector('.hero-container img').src = heroImage;
        }
    }
}

customElements.define('works-page-layout', WorksPageLayout);
