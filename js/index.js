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

const generateMentorsForSection = (data) => {
  const section = grab(data.section);
  const _mentors = data.mentors;
  for (let i = 0; i < data.mentors.length; i++) {
    section.appendChild(generateMentorBox(_mentors[i]));
  }
};


const inflateModalWithContent = (data) =>{
  const img = grab("modal-img");
  const email = grab("modal-email")
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
}
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


// ------------------------------------------------------------------------
generateMentorsForSection(mentors[0]);
generateMentorsForSection(mentors[1]);
generateMentorsForSection(mentors[2]);

