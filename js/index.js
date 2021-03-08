// easier to use "grab" instead of "document.getElementByID()" everytime. So I made this fxn
const grab = (id) => document.getElementById(id); 
const arrow = grab("arrow-direction");
const applyMenuBtn = grab("apply-menu-btn");
const appForm = grab("app-form-container");
const overlay = grab("overlay");
const modal = grab("modal-holder");
const test = grab("test");
const aboutSection = grab("about-me-page");
const aboutContent = grab("about-content");
var formToggled = false;
var modalToggled = false;
var aboutToggled = false;

const openAppForm = () => {
  if (!formToggled) {
    // If the form isnt showing, add the following classes to make it show
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
  formToggled = !formToggled; // onClick, set this value to it's opposite everytime!
};

// This function accepts a "section" object from "/mentors.js" db
// and passes the indvididual mentor objects to a generation function 
// The generation function generates the HTML representation of the 
// mentor object that it receives, 
//then is appended to a targeted section of the DOM for each item in the DB
const generateMentorsForSection = (data) => {
  const section = grab(data.section);
  const _mentors = data.mentors;
  for (let i = 0; i < data.mentors.length; i++) {
    section.appendChild(generateMentorBox(_mentors[i]));
  }
};

// The function helps target the elements in the modal  and inflates it with content
// from the dynamic data object that is passed as a parameter
const inflateModalWithContent = (data) => {
  const company = grab("modal-company");
  const img = grab("modal-img");
  const email = grab("modal-email");
  const phone = grab("modal-phone");
  const website = grab("modal-website");
  const modalMentorName = grab("modal-mentor-name");
  const modalBio = grab("modal-bio");
  email.innerHTML = data.email;
  phone.innerHTML = data.phone;
  website.innerHTML = data.website;
  modalMentorName.innerHTML = data.name;
  modalBio.innerHTML = data.bio;
  img.src = data.pic;
  company.innerHTML = data.company;
};

// used to switch the state of the modal ON/OFF by swapping classes 
// that change it's display properties
const toggleModal = (data) => {
  if (!modalToggled) {
    modal.classList.add("show-modal");
    modal.classList.remove("modal-off");
    modalToggled = true;
    overlay.style.display = "block";
    inflateModalWithContent(data);
    // overlay.style.style.zIndex = 21;
  } else {
    modal.classList.remove("show-modal");
    modal.classList.add("modal-off");
    modalToggled = false;
    overlay.style.display = "none";
    // overlay.style.style.zIndex = 2;
  }
};

const toggleAboutPage = () => {
  if (!aboutToggled) {
    aboutSection.classList.add("about-on");
    aboutSection.classList.remove("about-off");
    aboutContent.classList.add("show-about-content");
    aboutToggled = true;
  } else {
    aboutContent.classList.remove("show-about-content");
    aboutSection.classList.add("about-off");
    aboutSection.classList.remove("about-on");
    aboutToggled = false;
  }
};


// --------------------------STARTING POINT----------------------------------------------
generateMentorsForSection(mentors[0]);
generateMentorsForSection(mentors[1]);
generateMentorsForSection(mentors[2]);
