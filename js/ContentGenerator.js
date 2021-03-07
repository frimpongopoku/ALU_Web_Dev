const element = (tag) => document.createElement(tag);
const getAnime = () => {
  const animes = ["fade-in-quick", "fade-in-mid-slow", "fade-in-late"];
  const index = Math.floor(Math.random() * 3); // ref: https://www.w3schools.com/jsref/jsref_random.asp
  return animes[index];
};
const generateMentorBox = (data) => {
  const { pic } = data;
  const _name = data.name;
  let div = element("div");
  let imgDiv = element("div");
  let img = element("img");
  let detailsDiv = element("div");
  let mentorName = element("h5");
  let rightArrowIcon = element("i");
  let website = generateTextAndIcon("WEBSITE", "fa-globe");
  let email = generateTextAndIcon("EMAIL", "fa-envelope");
  let phone = generateTextAndIcon("TELEPHONE", "fa-phone");
  // -----------------------------------
  div.classList.add("one-mentor-card");
  imgDiv.classList.add("img-holder");
  img.classList.add("mentor-img");
  img.src = pic;
  detailsDiv.style.padding = "15px";
  mentorName.classList.add("mentor-name");
  rightArrowIcon.className = "fa";
  rightArrowIcon.classList.add("fa-long-arrow-right");
  // --------------------------------------
  imgDiv.appendChild(img);
  mentorName.appendChild(rightArrowIcon);
  mentorName.innerHTML = _name;
  detailsDiv.appendChild(mentorName);
  detailsDiv.appendChild(website);
  detailsDiv.appendChild(email);
  detailsDiv.appendChild(phone);
  div.appendChild(imgDiv);
  div.appendChild(detailsDiv);
  div.addEventListener("click", function () {
    toggleModal(data);
  });
  div.classList.add(getAnime());
  return div;
};

const generateTextAndIcon = (content, ic) => {
  let text = element("a");
  let icon = element("i");
  let span = element("span");
  span.innerHTML = content;
  text.classList.add("card-p");
  icon.className = "fa";
  icon.style.marginRight = "5px";
  icon.classList.add(ic);
  text.appendChild(icon);
  text.appendChild(span);
  return text;
};
