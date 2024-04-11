// Code to automatically insert HTML for tech stack

// HTML ELEMENTS
const techIconBox = document.querySelector(".tech-icon-box");

// Fetching data from the json file and making the changes accordingly
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    // Inserting the techStack Data
    data.techStack.forEach((val) => {
      techIconBox.insertAdjacentHTML(
        "afterbegin",
        `<img src="/assets/icons/${val}.png" alt="${val} icon" class="icon-mid-bg" />`
      );
    });
  });
