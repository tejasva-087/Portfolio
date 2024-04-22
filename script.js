const data = {
  techStack: ["mysql", "git", "python", "sass", "html", "css", "javascript"],

  projects: [
    {
      name: "This portfolio website",
      description:
        "I implemented a somewhat dynamic functionality so that i don't have to copy and past the html code again and again. I would highly appreciate if you would look at the code.",
      status: "completed",
      techStack: ["sass", "css", "html", "javascript"],
      linkText: "view repo",
      link: "https://github.com/tejasva-087/Portfolio",
    },
    {
      name: "Website for Himshri spices",
      description:
        "This is the site I am creating for a small spice startup called 'Himshree spices' to show case their products and connecting the customers through whatsapp business to the seller.",
      status: "underway",
      techStack: ["sass", "css", "html", "javascript"],
      linkText: "view site",
      link: "https://himshri-masala-optimised-version.netlify.app/",
    },
    {
      name: "MySQL connector module",
      description:
        "This is a python module, I am working on which can help users with no knowledge of sql queries to interact with database and create, modify etc the tables in the database.",
      status: "cooking",
      techStack: ["python", "mysql"],
      linkText: "view code",
      link: "https://github.com/tejasva-087/SQL-Connector-Module",
    },
    {
      name: "Mark up",
      description:
        "This is a software that segrigate the boards marks sent by the CBSE from a text file to a csv or xls file. Currently been upgrading it making it a desktop application using electron and integrating with mysql.",
      status: "evolving",
      techStack: [
        "mysql",
        "electron",
        "python",
        "sass",
        "html",
        "css",
        "javascript",
      ],
      linkText: "view documentation (old)",
      link: "https://drive.google.com/file/d/13ZYQyw4csshy7nouL9haH1vzzlD0x9Mk/view?usp=sharing",
    },
  ],

  experience: [
    {
      image: "firefox.png",
      name: "Mozilla Firefox Club",
      description: `I'm so grateful for the opportunity to join the club as a web developer!  Following a competitive selection process, I was thrilled to receive the offer and I can't wait to learn from the talented team and help the club achieve its goals.`,
      linkText: "View repo",
      link: "https://github.com/tejasva-087/mozilla-firefox-event-management-site",
    },
    {
      image: "healthotech.png",
      name: "Health-O-Tech",
      description:
        "I'm thrilled to have been selected as a Core Member of the technical team for Health-O-Tech! After a screening process and interview, I'm honored to be offered this position. I can't wait to leverage my skills and collaborate with the talented team and grow together.",
      linkText: "appointment letter",
      link: "https://drive.google.com/file/d/1qCDYbqO4gayI0XfO8VIUp5IOOSDCH7OE/view?usp=drive_link",
    },
    {
      image: "codex.webp",
      name: "Code-X",
      description:
        "So this was a Frontend and Marketing hackathos and my first hackathon at VIT Bhopal. Me and my team gave our best and ended up getting selected for the first two rounds. Even though we didn't won we absolutely enjoyed it. It was so fun :)",
      linkText: "View repo",
      link: "https://github.com/tejasva-087/codex_tejasva-khandelwal-70.17.159.182",
    },
    {
      image: "halocon.webp",
      name: "Halocon 4.0",
      description:
        "Back in high school I got selected for this hakathon. It was a Python hackathon including two rounds. Me and my partner cleared the first round and secured the 4th position among 20 other schools. It was absolutely amazing.",
      linkText: "View certificate",
      link: "https://drive.google.com/file/d/1o8Lq9dTj5xJI5luEXGeuWadOCOFk2Xd9/view?usp=sharing",
    },
  ],
};

///////////////////////////////
// INSERTING TECHSTACK ICONS
///////////////////////////////

// HTML ELEMENTS
const techStackBox = document.querySelector(".tech-icon-box");

// FUNCTIONALITY
data.techStack.forEach((val) => {
  let html = `<img
     src="/assets/icons/${val}.png"
     alt="${val} icon"
     class="icon-mid-bg"
  />`;
  techStackBox.insertAdjacentHTML("afterbegin", html);
});

///////////////////////////////
// CREATING PROJECT WORK
///////////////////////////////

// HTML ELEMENTS
const slider = document.querySelector(".slider");

// FUNCTIONALITY
data.projects.forEach((val) => {
  let imagetechStackHTML = ``;
  val.techStack.forEach((ele) => {
    imagetechStackHTML += `<img src="/assets/icons/${ele}.png" alt="${ele}" class="icon-sml" />`;
  });
  let html = `<div class="slider-box">
  <h3 class="heading-tertiary">${val.name}</h3>
  <p class="text-sml tag">${val.status}</p>
  <p class="text text-mid slider-box-description">
    ${val.description}
  </p>
  <div class="slider-box-tech-stack">
    <p class="text-mid">Made using:</p>
    ${imagetechStackHTML}
  </div>
  <div class="slider-box-link">
    <a href="${val.link}" class="link link-main" target="_blank">
      <div class="flex-center">
        <span>${val.linkText}</span>
        <i class="ph ph-arrow-right icon"></i>
      </div>
    </a>
  </div>
</div>
  `;
  slider.insertAdjacentHTML("afterbegin", html);
});

///////////////////////////////
// SLIDER FUNCTIONALITY
///////////////////////////////
const sliderBox = document.getElementsByClassName("slider-box");
const sliderBtnLeft = document.querySelector(".slider-btn--left");
const sliderBtnRight = document.querySelector(".slider-btn--right");

let maxLen = sliderBox.length - 1;
let current = 0;

// Setting up the grid size
document.documentElement.style.setProperty("--slider-size", `${maxLen + 1}`);

const slideRight = function () {
  current++;
  current = current <= maxLen ? current : 0;
  [...sliderBox].forEach((val) => {
    val.style.transform = `translateX(${current * -100}%)`;
  });
};

const slideLeft = function () {
  current--;
  current = current < 0 ? maxLen : current;
  [...sliderBox].forEach((val) => {
    val.style.transform = `translateX(${current * -100}%)`;
  });
};

sliderBtnRight.addEventListener("click", slideRight);
sliderBtnLeft.addEventListener("click", slideLeft);

//////////////////////////////////
// CREATING TABBED COMPONENT HTML
//////////////////////////////////

// HTML ELEMENTS
const btnContainer = document.querySelector(".tab-comp-btn-container");
const dataContainer = document.querySelector(".tab-comp-data-container");

// CREATING TAB BTN COMPONENT
data.experience.forEach((val, i) => {
  btnContainer.insertAdjacentHTML(
    "beforeend",
    `<button class="tab-comp-btn tab-comp-btn${
      i === 0 ? "--active" : ""
    } text-sml" data-btn-no="${i}">
    ${val.name}
  </button>`
  );
});
// CREATING TAB DATA COMPONENT
data.experience.forEach((val, i) => {
  dataContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="tab-comp-data tab-comp-data${
      i === 0 ? "--active" : ""
    }" id="temp-comp-data--${i}">
    <img
    src="./assets/experience/${val.image}"
    alt="${val.image} logo"
    class="tab-comp-img margin-bottom-sml-2"
  />
  <h3
    class="text-mid-light text-primary-light-1 margin margin-bottom-sml-2"
  >
    ${val.name}
  </h3>
  <p class="text-mid text-primary-light-1 margin-bottom-sml-2">
    ${val.description}
  </p>
  <div class="text-sml text-primary-white-1">
    <a href="${val.link}" class="link link-white-bg" target="_blank">
      <div class="flex-center">
        <span>${val.linkText}</span>
        <i class="ph ph-arrow-right"></i>
      </div>
    </a>
  </div>
  </div>`
  );
});

//////////////////////////////////
// TABBED COMPONENT fUNCTIONALITY
//////////////////////////////////

// Implement event deligation
btnContainer.addEventListener("click", (e) => {
  // Cheking for the element that triggered event
  if (e.target.classList.contains("tab-comp-btn")) {
    // Removing the active class from all the elements
    btnContainer
      .querySelector(".tab-comp-btn--active")
      .classList.remove("tab-comp-btn--active");
    dataContainer
      .querySelector(".tab-comp-data--active")
      .classList.remove("tab-comp-data--active");

    // Adding active class to the target component
    e.target.classList.add("tab-comp-btn--active");
    console.log(
      document
        .getElementById(`temp-comp-data--${e.target.dataset.btnNo}`)
        .classList.add("tab-comp-data--active")
    );
  }
});
