const element = (tag) => document.createElement(tag);

// I Created 3 css classes that have different times for animation delay 
//and the animation duration
// With these 3 classes in an array, a random number between 0 and 2 all inclusive is generated 
// and the CSS className that represent that index,  
//is returned. 
//This function is particularly called during the generation of the mentor boxes 
// To give off a sort of random transition and appearance of the various boxes 
//everytime a user loads up! (see line 59)
const getAnime = () => {
  const animes = ["fade-in-quick", "fade-in-mid-slow", "fade-in-late"];
  const index = Math.floor(Math.random() * 3); // ref: https://www.w3schools.com/jsref/jsref_random.asp
  return animes[index];
};

// This function crerates fresh html elements 
//and adds predetermined classes then returns a full 
//div of content that represent information for a mentor, from a mentor object passed as a param
const generateMentorBox = (data) => {
  const { pic } = data;
  const _name = data.name;
  let div = element("div");
  let imgDiv = element("div");
  let img = element("img");
  let detailsDiv = element("div");
  let mentorName = element("h5");
  let mentorNameText = element("span");
  let rightArrowIcon = element("i");
  let website = generateTextAndIcon("WEBSITE", "fa-globe");
  let email = generateTextAndIcon("EMAIL", "fa-envelope");
  let phone = generateTextAndIcon("TELEPHONE", "fa-phone");
  let company = generateTextAndIcon(data.company, "fa-building");
  // -----------------------------------
  div.classList.add("one-mentor-card");
  imgDiv.classList.add("img-holder");
  img.classList.add("mentor-img");
  img.src = pic;
  detailsDiv.style.padding = "15px";
  mentorName.classList.add("mentor-name");
  rightArrowIcon.className = "fa";
  rightArrowIcon.classList.add("fa-long-arrow-right");
  rightArrowIcon.id = "right-arrow";
  company.classList.add("r-label");
  // --------------------------------------
  imgDiv.appendChild(img);
  mentorName.appendChild(mentorNameText);
  mentorName.appendChild(rightArrowIcon);
  mentorNameText.innerHTML = _name;
  detailsDiv.appendChild(mentorName);
  detailsDiv.appendChild(website);
  detailsDiv.appendChild(email);
  detailsDiv.appendChild(company);
  div.appendChild(imgDiv);
  div.appendChild(detailsDiv);
  div.addEventListener("click", function () {
    toggleModal(data);
  });
  div.classList.add(getAnime());
  return div;
};


// just another function that generates a simple anchor tag, 
//w/O an icon
const generateTextAndIcon = (content, ic, hasIco = true) => {
  let text = element("a");
  let icon = element("i");
  let span = element("span");
  span.innerHTML = content;
  text.classList.add("card-p");
  if (ic) {
    icon.className = "fa";
    icon.style.marginRight = "5px";
    icon.classList.add(ic);
  }
  if (hasIco) text.appendChild(icon);
  text.appendChild(span);
  return text;
};
