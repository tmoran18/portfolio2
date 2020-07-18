const MENU_LINKS = document.getElementById("menuLinks");
const BURGER = document.querySelector(".hamburger_menu");
const MEDIA_QUERY = window.matchMedia("(min-width: 700px)");
const INPUTS = document.querySelectorAll(".input_container");

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

// Onload highlight the firstname input and first_name Label
INPUTS.forEach((input) => {
  input.childNodes[3].addEventListener("focus", (e) => {
    resetActiveInputs();
    e.currentTarget.classList.add("active_input");
    e.currentTarget.previousElementSibling.classList.add("active_label");
  });
});

const resetActiveInputs = () => {
  INPUTS.forEach((input) => {
    const INPUT = input.childNodes[3];
    const LABEL = input.childNodes[1];
    INPUT.classList = "active_input" && INPUT.classList.remove("active_input");
    LABEL.classList = "active_label" && LABEL.classList.remove("active_label");
  });
};
