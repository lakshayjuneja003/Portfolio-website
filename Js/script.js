// typing animation
var typed = new Typed(".Typing", {
  strings: ["", "Designer", "Full Stack Developer", "Devops Engineer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// main nav/aside logic
const nav = document.querySelector(".Nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".Section");
const totalSection = allSection.length;
const navTogglerBtn = document.querySelector(".Nav-toggler");
const aside = document.querySelector(".Aside");

// show target section
function showSection(element) {
  const target = element.getAttribute("href").split("#")[1];
  allSection.forEach((section) => section.classList.remove("Active", "back-section"));
  document.querySelector("#" + target).classList.add("Active");
}

// toggle aside open/close (for mobile)
function asideSectionToggler(close = false) {
  if (close) {
    aside.classList.remove("open");
    navTogglerBtn.classList.remove("open");
    allSection.forEach((s) => s.classList.remove("open"));
  } else {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    allSection.forEach((s) => s.classList.toggle("open"));
  }
}

// sidebar toggle button
navTogglerBtn.addEventListener("click", () => {
  asideSectionToggler();
});

// universal section navigation
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const raw = link.getAttribute("href");
    if (!raw || raw === "#") return;
    e.preventDefault();

    const targetId = raw.slice(1).toLowerCase();
    const targetSection = Array.from(allSection).find(
      (s) => s.id && s.id.toLowerCase() === targetId
    );
    if (!targetSection) return;

    // switch active section
    allSection.forEach((s) => s.classList.remove("Active", "back-section"));
    targetSection.classList.add("Active");

    // update active nav link
    navList.forEach((item) => {
      const a = item.querySelector("a");
      a.classList.remove("Active");
      if (a.getAttribute("href").slice(1).toLowerCase() === targetId) {
        a.classList.add("Active");
      }
    });

    // auto-close aside on mobile
    if (window.innerWidth < 1200) {
      asideSectionToggler(true);
    }
  });
});
