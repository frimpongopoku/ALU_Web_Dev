const grab = (id) => document.getElementById(id);
const arrow = grab("arrow-direction");
const applyMenuBtn = grab("apply-menu-btn");
const appForm = grab("app-form-container");
const overlay = grab("overlay");

var formToggled = false;
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

const generateMentorsForSection = (many,id) => {
  const section = grab(id);
  for (let i = 0; i < many; i++) {
    section.appendChild(generateMentorBox());
  }
};

generateMentorsForSection(4,"mu-section");
generateMentorsForSection(4,"gh-section")
generateMentorsForSection(4,"uk-section");
