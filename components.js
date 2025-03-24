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
                    </ul>
            </nav>
        `;
    }
}
class footHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="light-yellow">
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
                </div>
                <ul class="link-container">
                    <li><p style="text-align: right">Rome, Italy</p></li>
                    <li><a href="mailto:lobiancostefania@gmail.com"><p style="text-align: right">lobiancostefania@gmail.com</p></a></li>
                    <li><a class="menu" href="assets/Stefania%20Lo%20Bianco%20Resume.pdf" target="blank"><p style="text-align: right">Download Resume</p></a></li>
                </ul>
            </footer>
        `;
    }
}
class footWorks extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="ninety"></div>
            <div class="ninety mobile"></div>
            <footer class="light-background">
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
                </div>
                <ul class="link-container">
                    <li><p style="text-align: right">Rome, Italy</p></li>
                    <li><a href="mailto:lobiancostefania@gmail.com"><p style="text-align: right">lobiancostefania@gmail.com</p></a></li>
                    <li><a class="menu" href="assets/Stefania%20Lo%20Bianco%20Resume.pdf" target="blank"><p style="text-align: right">Download Resume</p></a></li>
                </ul>
            </footer>
        `;
    }
}

class arrowBtn extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="button-container">
                <div style="position: relative;">
                    <div class="corner-btn top-left"></div>
                    <div class="border-btn btn-content">
                        <div class="menu-btn menu" onclick="goBack()" style="text-align: left">Back</div>
                    </div>
                </div>
                <div style="position: relative;">
                    <div class="corner-btn bottom-right"></div>
                    <div class="border-btn btn-content">
                        <div class="menu-btn menu" onclick="goForward()">Next</div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('nav-home', navBarHome);
customElements.define('nav-works', navBar);
customElements.define('foot-home', footHome);
customElements.define('foot-works', footWorks);
customElements.define('arrow-btn', arrowBtn);

window.addEventListener('scroll', () => {
    const infoContainer = document.querySelector('.info-container');
    const presentation = document.querySelector('.presentation');
    const boardsContainer = document.querySelector('.boards-container');

    const infoContainerInitialWidth = getComputedStyle(infoContainer).width; // Initial width of info-container
    const boardsContainerInitialWidth = getComputedStyle(boardsContainer).width; // Initial width of info-container
    const presentationTop = presentation.getBoundingClientRect().top;

    // When the info-container reaches the top of the viewport
    if (presentationTop <= 0) {
        infoContainer.style.position = 'fixed';
        infoContainer.style.top = '21px';
        infoContainer.style.right = '10vw';
        infoContainer.style.width = infoContainerInitialWidth; // Retain the initial width
        boardsContainer.style.width = boardsContainerInitialWidth; // Retain the initial width
        infoContainer.style.zIndex = '10'; // Ensure it stays on top
    } else {
        // When scrolling back up, revert to original position and layout
        infoContainer.style.position = 'relative';
        infoContainer.style.top = '';
        infoContainer.style.right = '';
        infoContainer.style.width = ''; // Let the CSS control the width
        infoContainer.style.zIndex = ''; // Remove z-index when not fixed
    }
});

function goBack() {
    window.history.back(); // Goes back to the previous page
}

// Pre-established order of pages
const pageOrder = [
    "terraviva.html",        // First page
    "lope.html",     // Second page
    //"artlist.html",   // Third page
    "equipe.html",      // Fourth page
    "brochure.html",
    "magazine.html",
   // "initinere.html",
   // "anaderosa.html",
    "frimm.html",
    "ooom.html"
];

// Function to navigate forward based on the current URL
function goForward() {
    const currentURL = window.location.pathname.split("/").pop(); // Get the current page name
    const currentIndex = pageOrder.indexOf(currentURL); // Find the current page in the array

    if (currentIndex >= 0) {
        // Navigate to the next page in the order, looping back to the first page
        const nextIndex = (currentIndex + 1) % pageOrder.length;
        window.location.href = pageOrder[nextIndex];
    }
}
//hover effect
const buttons = document.querySelectorAll('.my-projects'); // Select all project links

buttons.forEach(button => {
    const typeHover = button.querySelector('.type-hover'); // Find elements inside each button
    const subtitle = button.querySelector('.social');

    button.addEventListener('mouseover', () => {                                                               
        if (typeHover) typeHover.classList.add('show'); // Show type-hover text         
        if (subtitle) subtitle.classList.add('hover-effect'); // Add effect to subtitle
    });                                                                                                        
    button.addEventListener('mouseout', () => {                                                                     
        if (typeHover) typeHover.classList.remove('show'); // Hide type-hover text                                                                          
        if (subtitle) subtitle.classList.remove('hover-effect'); // Remove effect from subtitle
    });
});