const MENU_LINKS = document.getElementById("menuLinks");
const BURGER = document.querySelector(".hamburger_menu");
const MEDIA_QUERY = window.matchMedia("(min-width: 700px)");
const FORM = document.querySelector("form");

const mobileNav = () => {
  MENU_LINKS.className === "menu_links"
    ? (MENU_LINKS.className += " mobile" + " transition")
    : (MENU_LINKS.className = "menu_links");
};

const closeMobileNav = (MEDIA_QUERY) => {
  if (MEDIA_QUERY.matches) {
    MENU_LINKS.className = "menu_links";
    BURGER.classList.remove("change");
  }
};

BURGER.addEventListener("click", mobileNav);
MEDIA_QUERY.addListener(closeMobileNav); // Attach listener function on state changes
closeMobileNav(MEDIA_QUERY); // Call listener function at run time

const animateBurger = (hamburger_menu) =>
  hamburger_menu.classList.toggle("change");

FORM.addEventListener("change", (e) => {
  console.log(e.target);
});

// Onload highlight the firstname input and first_name Label
