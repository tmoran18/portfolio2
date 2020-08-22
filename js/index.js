// Globals
const MENU_LINKS = document.getElementById("menuLinks");
const NAV_LINKS = document.querySelectorAll("#menuLinks a");
const BURGER = document.querySelector(".hamburger_menu");
const MEDIA_QUERY = window.matchMedia("(min-width: 700px)");
const MEDIA_QUERY_MOBILE = window.matchMedia("(max-width: 900px)");
const INPUTS = document.querySelectorAll(".input_container");
const GRADES_BTN = document.querySelector("#grades_btn");
const GRADES_CONTAINER = document.querySelector(".grades_container");
const WORK_CARD_CONTAINER = document.querySelector(".work_card_container");
const WORK_CARD_BTNS = document.querySelectorAll(".learn_more_btn");
const WORK_CLOSE_BTN = document.querySelectorAll(".close_btn");
const NEXT = document.querySelectorAll(".next");
const PREV = document.querySelectorAll(".prev");
const THEME = document.querySelector(".theme_icon_container");
const BODY = document.querySelector("body");
const LIGHT_ICON = document.querySelector('[data-theme="light"]');
const DARK_ICON = document.querySelector('[data-theme="dark"]');
const LOGO_DARK = document.querySelector(".logo_dark");
const LOGO_LIGHT = document.querySelector(".logo_light");

let modalName = "";

// Toggles adding mobile class to menu
const mobileNav = () => {
  MENU_LINKS.className === "menu_links"
    ? (MENU_LINKS.className += " mobile")
    : (MENU_LINKS.className = "menu_links");
  console.log("small");
};

// closes the mobile nav if screen opens
const closeMobileNav = (MEDIA_QUERY) => {
  if (MEDIA_QUERY.matches) {
    MENU_LINKS.className = "menu_links";
    BURGER.classList.remove("change");
  }
};

BURGER.addEventListener("click", () => {
  mobileNav();
  setTimeout(() => {
    MENU_LINKS.className = "menu_links";
    BURGER.classList.remove("change");
  }, 3000);
});

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

// Resets focus outline and colors on inputs
const resetActiveInputs = () => {
  INPUTS.forEach((input) => {
    const INPUT = input.childNodes[3];
    const LABEL = input.childNodes[1];
    INPUT.classList = "active_input" && INPUT.classList.remove("active_input");
    LABEL.classList = "active_label" && LABEL.classList.remove("active_label");
  });
};

// Close mobile nav if link clicked
NAV_LINKS.forEach((link) => {
  link.addEventListener("click", (e) => {
    MENU_LINKS.className = "menu_links";
    BURGER.classList.remove("change");
  });
});

// Event listener to show grades
GRADES_BTN.addEventListener("click", () => {
  if (GRADES_CONTAINER.classList.contains("hide")) {
    GRADES_CONTAINER.classList.remove("hide");
    GRADES_CONTAINER.classList.add("flex");
    GRADES_BTN.textContent = "Hide my grades";
  } else {
    GRADES_CONTAINER.classList.remove("flex");
    GRADES_CONTAINER.classList.add("hide");
    GRADES_BTN.textContent = "See my grades";
  }
});

// Hide Work Cards
// Show specific modal
WORK_CARD_BTNS.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Hide the word card container
    modalName = e.target.id;
    WORK_CARD_CONTAINER.classList.add("hide");
    // Show the correct modal as per button clicked
    document
      .querySelector(`[data-modal='${modalName}']`)
      .classList.remove("hide");
  });
});

// Close the Modal
WORK_CLOSE_BTN.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(`[data-modal='${modalName}']`).classList.add("hide");
    WORK_CARD_CONTAINER.classList.remove("hide");
    // set the current slide back to 1;
    resetSlide();
  });
});

// Slider

const nextSlide = () => {
  // Get current class of opened modal
  const current = document.querySelector(
    `[data-modal='${modalName}'] .slider .slide.current`
  );
  // Get all slides in opened modal
  const slides = document.querySelectorAll(
    `[data-modal='${modalName}'] .slider .slide`
  );
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
};

const prevSlide = () => {
  const current = document.querySelector(
    `[data-modal='${modalName}'] .slider .slide.current`
  );
  const slides = document.querySelectorAll(
    `[data-modal='${modalName}'] .slider .slide`
  );
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
};

NEXT.forEach((nextBtn) => {
  nextBtn.addEventListener("click", nextSlide);
});

PREV.forEach((prevBtn) => {
  prevBtn.addEventListener("click", prevSlide);
});

// Reset the current back to first slide
const resetSlide = () => {
  const slides = document.querySelectorAll(
    `[data-modal='${modalName}'] .slider .slide`
  );
  document
    .querySelector(`[data-modal='${modalName}'] .slider .slide.current`)
    .classList.remove("current");
  slides[0].classList.add("current");
};

// Dark / Light theme
THEME.addEventListener("click", () => {
  if (BODY.classList.contains("light")) {
    BODY.classList.remove("light");
    LIGHT_ICON.classList.remove("hide");
    DARK_ICON.classList.add("hide");
    LOGO_LIGHT.classList.add("hide");
    LOGO_DARK.classList.remove("hide");
  } else if (!BODY.classList.contains("light")) {
    BODY.classList.add("light");
    LIGHT_ICON.classList.add("hide");
    DARK_ICON.classList.remove("hide");
    LOGO_LIGHT.classList.remove("hide");
    LOGO_DARK.classList.add("hide");
  }
});
