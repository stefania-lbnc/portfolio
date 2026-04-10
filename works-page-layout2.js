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
                    <table>
                        <tbody>
                                <tr>
                                  <td><p style="font-style: italic">Type</p></td>
                                  <td><p><slot name="type"></slot></p></td>
                                </tr>
                                <tr>
                                  <td><p style="font-style: italic">Clients</p></td>
                                  <td><p><slot name="clients"></slot></p></td>
                                </tr>
                                <tr>
                                  <td><p style="font-style: italic">Role</p></td>
                                  <td><p><slot name="role"></slot></p></td>
                                </tr>
                                <tr>
                                  <td><p style="font-style: italic">Collaborators</p></td>
                                  <td><p><slot name="collaborators"></slot></p></td>
                                </tr>
                                <tr>
                                  <td><p style="font-style: italic">Deliverables</p></td>
                                  <td><p><slot name="deliverables"></slot></p></td>
                                </tr>
                              </tbody>
                    </table>
                    <div class="areas"><slot name="highlight"></slot></div>
                    <div>
                        <p class="menu">the brief</p>
                        <div class="point-eight"></div>
                        <p><slot name="brief"></slot></p>
                    </div>
                    <div class="projects-width">
                        <p class="two-columns menu" style="font-style: italic"><slot name="quote"></slot></p>
                        <div class="four-columns">
                            <p class="menu">my approach</p>
                            <div class="point-eight"></div>
                            <p><slot name="approach"></slot></p>  
                        </div>
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
