// MAIN DATA
let data = {
  // Tech stack
  techStack: ["mysql", "git", "python", "sass", "html", "css", "javascript"],

  // Experience
  experience: [
    // image file name
    // heading
    // description
    // link-text to be displayed
    // link
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

  // Project data
  projects: [
    // name of the project
    // description
    // status whether completed or not
    // techstack used
    // line-text to be displayed
    // link
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

  // Footer links
  links: [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/tejasva-khandelwal/",
    },
    {
      name: "twitter",
      link: "https://twitter.com/tejasva_087",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/tejuss087/",
    },
    {
      name: "github",
      link: "https://github.com/tejasva-087",
    },
    {
      name: "replit",
      link: "https://replit.com/@tejasva-087",
    },
    {
      name: "leetcode",
      link: "https://leetcode.com/tejasva-087/",
    },
    {
      name: "codewars",
      link: "https://www.codewars.com/users/Tejas-087",
    },
    {
      name: "udemy",
      link: "https://www.udemy.com/user/tejasva-khandelwal/",
    },
  ],
};

///////////////////////////////
// Function to insert HTML
///////////////////////////////

const insertHTML = function (position, htmlContent, element) {
  element.insertAdjacentHTML(position, htmlContent);
};

//////////////////////////////////////////////////
// CREATING AND INSERTING HTML (techstack icons)

const techStackBox = document.querySelector(".tech-icon-box");

const techStackHtml = data.techStack.reduce((acc, val) => {
  return (acc += `<img src="/assets/icons/${val}.png" alt="${val} icon" class="icon icon-mid-bg" />`);
}, "");

insertHTML("afterbegin", techStackHtml, techStackBox);

////////////////////////////////////////////////////
// CREATING AND INSERTING HTML (experience section)

// Buttons
const btnContainer = document.querySelector(".tab-comp-btn-container");

const expBtnHtml = data.experience.reduce((acc, val, i) => {
  return (acc += `<button class="tab-comp-btn tab-comp-btn${
    i === 0 ? "--active" : ""
  } text-sml" data-btn-no="${i}"> ${val.name} </button>`);
}, "");

insertHTML("afterbegin", expBtnHtml, btnContainer);

// data
const dataContainer = document.querySelector(".tab-comp-data-container");

const expDataHtml = data.experience.reduce((acc, val, i) => {
  return (acc += `
  <div class="tab-comp-data tab-comp-data${
    i === 0 ? "--active" : ""
  }" id="temp-comp-data--${i}">
    <img
      src="./assets/experience/${val.image}"
      alt="${val.image} logo"
      class="tab-comp-img margin-bottom-sml-2"
    />
    <h3 class="text-mid-light text-primary-light-1 margin margin-bottom-sml-2">
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
  </div>`);
}, "");

insertHTML("beforeend", expDataHtml, dataContainer);

////////////////////////////////////////////////////
// CREATING AND INSERTING HTML (project section)

// Setting the grid size on the basis of the project array length
document.documentElement.style.setProperty(
  "--slider-size",
  `${data.projects.length}`
);

const slider = document.querySelector(".slider");

const projectDataHtml = data.projects.reduce((acc, val) => {
  return (
    acc +
    `
    <div class="slider-box">
      <h3 class="heading-tertiary">${val.name}</h3>
      <p class="text-sml tag">${val.status}</p>
      <p class="text text-mid slider-box-description">
        ${val.description}
      </p>
      <div class="slider-box-tech-stack">
        <p class="text-mid">Made using:</p>
        ${val.techStack.reduce((acc, val) => {
          return (
            `<img src="/assets/icons/${val}.png" alt="${val}" class="icon-sml" />` +
            acc
          );
        }, "")}
      </div>
      <div class="slider-box-link">
        <a href="${val.link}" class="link link-main" target="_blank">
          <div class="flex-center">
            <span>${val.linkText}</span>
            <i class="ph ph-arrow-right"></i>
          </div>
        </a>
      </div>
    </div>
  `
  );
}, "");

insertHTML("afterbegin", projectDataHtml, slider);

////////////////////////////////////////////////////
// CREATING AND INSERTING HTML (footer)

// copyright content
const copyrightText = document.querySelector(".footer-copyright");

const curentYear = new Date().getFullYear();

copyrightText.innerHTML = `
  <span> Copyright <i class="ph ph-copyright"></i> ${curentYear}</span>
  <a href="https://www.linkedin.com/in/tejasva-khandelwal/" class="link link-white-txt" target="_blank">Tejasva Khandelwal</a> 
  <span>All rights reserved.</span>
`;

// Footer links
const footerNavLinks = document.querySelector(".footer-nav-list");
const navLinkHmtl = data.links.reduce((acc, val) => {
  return (
    acc +
    `<li class="footer-nav-item">
    <a href="${val.link}" class="link link-white-txt" target="_blank">
      <img
        src="./assets/socials/${val.name}.png"
        alt="${val.name}"
        class="icon icon-mid-bg"
      />
    </a>
  </li>`
  );
}, "");
insertHTML("beforeend", navLinkHmtl, footerNavLinks);

//////////////////////////////////
// Functionality for components
//////////////////////////////////

//////////////////////////////////////////////////////////////////
// TABBED COMPONENT FUNCTIONALITY

// FUNCTIONALITY implementing (event deligation)
btnContainer.addEventListener("click", (e) => {
  // Cheking for the element that triggered event
  if (!e.target.classList.contains("tab-comp-btn")) return;

  // Removing the active class from all the elements
  btnContainer
    .querySelector(".tab-comp-btn--active")
    .classList.remove("tab-comp-btn--active");
  dataContainer
    .querySelector(".tab-comp-data--active")
    .classList.remove("tab-comp-data--active");

  // Adding active class to the target component
  e.target.classList.add("tab-comp-btn--active");
  document
    .getElementById(`temp-comp-data--${e.target.dataset.btnNo}`)
    .classList.add("tab-comp-data--active");
});

//////////////////////////////////////////////////////////////////
// SLIDER FUNCTIONALITY
const sliderBox = document.getElementsByClassName("slider-box");
const sliderBtnLeft = document.querySelector(".slider-btn--left");
const sliderBtnRight = document.querySelector(".slider-btn--right");

let maxLen = sliderBox.length - 1;
let current = 0;

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

//////////////////////////////
// INTERSECTION OBSERVERS
//////////////////////////////

////////////////////////////////
// Section scroll in animation

const allSection = document.querySelectorAll(".section");
// Adding a hidden class to the section
allSection.forEach((section) => section.classList.add("section-hidden"));

const revealElements = function (ent, obs) {
  const [entry] = ent;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  obs.unobserve(entry.target);
};
const sectionObs = new IntersectionObserver(revealElements, {
  root: null,
  threshold: 0.2,
});

allSection.forEach((section) => {
  sectionObs.observe(section);
});

//////////////////////////////
// lazy loading

const galleryImgBox = document.querySelector(".gallery-img-box");
const galleryImg = document.querySelectorAll(".gallery-img");

const loadImg = function (ent, observer) {
  const [entry] = ent;

  // changing the image paths
  galleryImg.forEach((img) => (img.src = img.dataset.src));

  // Checking fot the load event
  window.addEventListener("load", function () {
    galleryImgBox.classList.remove("lazy-img");
  });

  observer.unobserve(galleryImgBox);
};

const galleryBoxObs = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "300px",
});

galleryBoxObs.observe(galleryImgBox);

/////////////////////////
// RESIZE EVENT
/////////////////////////

const viewportWidth = window.visualViewport;
if (viewportWidth.width <= 700) {
  [...btnContainer.children].forEach((ele, i) => {
    ele.textContent = i + 1;
  });
}

window.addEventListener("resize", () => {
  const viewportWidth = window.visualViewport;
  if (viewportWidth.width <= 700) {
    [...btnContainer.children].forEach((ele, i) => {
      ele.textContent = i + 1;
    });
  } else {
    [...btnContainer.children].forEach((ele, i) => {
      ele.textContent = data.experience[i].name;
    });
  }
});
