// Get the button:
let mynav = document.getElementsByClassName("nav-background");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mynav.style.display = "inline-flex";
    } else {
        mynav.style.display = "none";
    }
}