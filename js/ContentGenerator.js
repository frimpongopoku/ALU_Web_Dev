const element = (tag) => document.createElement(tag);

const generateMentorBox = () => {
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
  img.src = "https://i.pravatar.cc/300";
  detailsDiv.style.padding = "15px";
  mentorName.classList.add("mentor-name");
  rightArrowIcon.className = "fa";
  rightArrowIcon.classList.add("fa-long-arrow-right");
  // --------------------------------------
  imgDiv.appendChild(img);
  mentorName.appendChild(rightArrowIcon);
  mentorName.innerHTML = "Richard Bradson";
  detailsDiv.appendChild(mentorName);
  detailsDiv.appendChild(website);
  detailsDiv.appendChild(email);
  detailsDiv.appendChild(phone);
  div.appendChild(imgDiv);
  div.appendChild(detailsDiv);

  return div;
};

const generateTextAndIcon = (content, ic) => {
  let text = element("a");
  let icon = element("i");
  let span = element("span");
  span.innerHTML = content;
  text.classList.add("card-p");
  icon.className = "fa";
  icon.style.marginRight = "5px"
  icon.classList.add(ic);
  text.appendChild(icon);
  text.appendChild(span);
  return text;
};
