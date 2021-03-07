

const grab = (id) => document.getElementById(id);
const arrow = grab("arrow-direction");
const applyMenuBtn = grab("apply-menu-btn");
const appForm = grab("app-form-container");
const overlay = grab("overlay");
const modal = grab("modal-holder");
const test = grab("test");
var formToggled = false;
var modalToggled = false;

const openAppForm = () => {
  if (!formToggled) {
    // If its not toggled, open up the form
    appForm.classList.remove("close-up");
    appForm.classList.add("open-up");
    arrow.classList.add("fa-long-arrow-right");
    arrow.classList.remove("fa-long-arrow-left");
    overlay.style.display = "block";
  } else {
    appForm.classList.remove("open-up");
    appForm.classList.add("close-up");
    arrow.classList.add("fa-long-arrow-left");
    arrow.classList.remove("fa-long-arrow-right");
    overlay.style.display = "none";
  }
  formToggled = !formToggled;
};

const generateMentorsForSection = (many, id) => {
  const section = grab(id);
  for (let i = 0; i < many; i++) {
    section.appendChild(generateMentorBox());
  }
};

generateMentorsForSection(4, "mu-section");
generateMentorsForSection(4, "gh-section");
generateMentorsForSection(4, "uk-section");

const toggleModal = () => {
  if (!modalToggled) {
    modal.classList.add("show-modal");
    modal.classList.remove("modal-off");
    modalToggled = true;
    overlay.style.display = "block";
    // overlay.style.style.zIndex = 21;
  } else {
    modal.classList.remove("show-modal");
    modal.classList.add("modal-off");
    modalToggled = false;
    overlay.style.display = "none";
    // overlay.style.style.zIndex = 2;
  }
};

console.log(mentors);
