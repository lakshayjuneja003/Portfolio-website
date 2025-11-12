// Style Switcher Toggle
const StyleswitcherToggler = document.querySelector(".Style-switcher-toggler");
StyleswitcherToggler.addEventListener('click', () => {
    document.querySelector(".Style-switcher").classList.toggle("open");
});

// Hide Style Switcher on Scroll
window.addEventListener('scroll', () => {
    if (document.querySelector(".Style-switcher").classList.contains("open")) {
        document.querySelector(".Style-switcher").classList.remove("open");
    }
});

// Theme Colors
const alternateStyles = document.querySelectorAll(".Alternate-style");

function setActiveStyle(color) {
    localStorage.setItem('selectedStyle', color);
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
}

// Load saved color style on page load or set default to red (Color-1)
window.addEventListener("load", () => {
    const selectedStyle = localStorage.getItem('selectedStyle');
    if (selectedStyle) {
        setActiveStyle(selectedStyle);
    } else {
        setActiveStyle('Color-1');
    }
});

// Theme Light and Dark Mode
const dayNight = document.querySelector(".Day-night");

dayNight.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Load saved theme mode on page load
window.addEventListener("load", () => {
    const darkMode = localStorage.getItem('darkMode');
    
    // Default to dark mode if not set
    if (darkMode === 'enabled' || darkMode === null) {
        document.body.classList.add("dark");wh
        dayNight.querySelector("i").classList.add("fa-sun");
        localStorage.setItem('darkMode', 'enabled');
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
