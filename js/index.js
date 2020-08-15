// Globals
const MENU_LINKS = document.getElementById('menuLinks');
const NAV_LINKS = document.querySelectorAll('#menuLinks a');
const BURGER = document.querySelector('.hamburger_menu');
const MEDIA_QUERY = window.matchMedia('(min-width: 700px)');
const INPUTS = document.querySelectorAll('.input_container');
const GRADES_BTN = document.querySelector('#grades_btn');
const GRADES_CONTAINER = document.querySelector('.grades_container');
const WORK_CARD_CONTAINER = document.querySelector('.work_card_container');
const WORK_CARD_BTNS = document.querySelectorAll('.learn_more_btn');
const WORK_CLOSE_BTN = document.querySelector('.close_btn');
const WORK_MODAL = document.querySelector('.work_modal');

// Toggles adding mobile class to menu
const mobileNav = () => {
	MENU_LINKS.className === 'menu_links'
		? (MENU_LINKS.className += ' mobile')
		: (MENU_LINKS.className = 'menu_links');
};

// closes the mobile nav if screen opens
const closeMobileNav = (MEDIA_QUERY) => {
	if (MEDIA_QUERY.matches) {
		MENU_LINKS.className = 'menu_links';
		BURGER.classList.remove('change');
	}
};

BURGER.addEventListener('click', () => {
	mobileNav();
	setTimeout(() => {
		MENU_LINKS.className = 'menu_links';
		BURGER.classList.remove('change');
	}, 3000);
});

MEDIA_QUERY.addListener(closeMobileNav); // Attach listener function on state changes
closeMobileNav(MEDIA_QUERY); // Call listener function at run time

const animateBurger = (hamburger_menu) =>
	hamburger_menu.classList.toggle('change');

// Onload highlight the firstname input and first_name Label
INPUTS.forEach((input) => {
	input.childNodes[3].addEventListener('focus', (e) => {
		resetActiveInputs();
		e.currentTarget.classList.add('active_input');
		e.currentTarget.previousElementSibling.classList.add('active_label');
	});
});

// Resets focus outline and colors on inputs
const resetActiveInputs = () => {
	INPUTS.forEach((input) => {
		const INPUT = input.childNodes[3];
		const LABEL = input.childNodes[1];
		INPUT.classList = 'active_input' && INPUT.classList.remove('active_input');
		LABEL.classList = 'active_label' && LABEL.classList.remove('active_label');
	});
};

// Close mobile nav if link clicked
NAV_LINKS.forEach((link) => {
	link.addEventListener('click', (e) => {
		MENU_LINKS.className = 'menu_links';
		BURGER.classList.remove('change');
	});
});

// Event listener to show grades
GRADES_BTN.addEventListener('click', () => {
	if (GRADES_CONTAINER.classList.contains('hide')) {
		GRADES_CONTAINER.classList.remove('hide');
		GRADES_CONTAINER.classList.add('flex');
		GRADES_BTN.textContent = 'Hide my grades';
	} else {
		GRADES_CONTAINER.classList.remove('flex');
		GRADES_CONTAINER.classList.add('hide');
		GRADES_BTN.textContent = 'See my grades';
	}
});

// Hide Work Cards
WORK_CARD_BTNS.forEach((btn) => {
	btn.addEventListener('click', () => {
		// Hide the word card container
		WORK_CARD_CONTAINER.classList.add('hide');
		WORK_MODAL.classList.remove('hide');
	});
});
// Show Work Modal

WORK_CLOSE_BTN.addEventListener('click', () => {
	WORK_MODAL.classList.add('hide');
	WORK_CARD_CONTAINER.classList.remove('hide');
});
