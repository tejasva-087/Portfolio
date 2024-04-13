const data = {
  techStack: ["mysql", "git", "python", "sass", "html", "css", "javascript"],

  projects: [
    {
      name: "Website for Himshri spices",
      description:
        "This is the site I am creating for a small spice startup called 'Himshree spices' to show case their products and connecting people through whatsapp business.",
      status: "underway",
      techStack: ["sass", "css", "html", "javascript"],
      linkText: "view site",
      link: "https://himshri-masala-optimised-version.netlify.app/",
    },
    {
      name: "MySQL connector module",
      description:
        "This is a python module that I have been working on. What this module basically do is that if a person with little knowlegde about RDBms and no knowledge of sql can interact with database create, store, modify etc the tables with few lines of python code.",
      status: "cooking",
      techStack: ["python", "mysql"],
      linkText: "view code",
      link: "https://github.com/tejasva-087/SQL-Connector-Module",
    },
    {
      name: "Mark up",
      description:
        "This is a project that I created in my high school this is basically a software that help segrigate the boards marks sent by the CBSE from a text file to a csv or xls file. Currently been upgrading it making it a desktop application using electron also attaching it with a mysql for storing data in database.",
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
