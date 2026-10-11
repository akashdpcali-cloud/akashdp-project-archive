import { projectsData, achivements, aboutData } from "./data.js";

const projectsTab = document.querySelector(".header-projects");
const achivementsTab = document.querySelector(".header-achivements");

const cardContainer = document.querySelector(".grid-section-cards");
const popupOverlay = document.querySelector(".popup-overlay");
const popupText = document.querySelector(".popup-discription");
const popupClose = document.querySelector(".popup-close-button");

const profilePicture = document.querySelector(".profile-box-picture");
const username = document.querySelector(".profile-box-username");
const thoughts = document.querySelector(".profile-box-quot");
const techStack = document.querySelector(".tech-stack-box-data");
const social = document.querySelector(".social-media-div");

// ------------------------ABOUT SECTION--------------------------------
profilePicture.innerHTML = `
                            <img
                              src=${aboutData.profilePic}
                              alt=""
                              class="profile-box-picture-img"
                            />
                            `;

username.innerHTML = `${aboutData.name}`;

thoughts.innerHTML = `${aboutData.quot}`;

let techstackHTML = "";

aboutData.techStack.forEach((item) => {
  techstackHTML += `<div class="tech-stack-bax-tech">${item}</div>`;
});

techStack.innerHTML = techstackHTML;

let socialmediaHTML = "";

aboutData.socialMedia.forEach((item) => {
  socialmediaHTML += `
                      <a href=${item.socialLink} target="_blank" class="social-media">
                        <img
                          src=${item.socialPic}
                          alt=""
                          class="social-media-icon"
                        />
                        <div class="social-media-name">${item.socialName}</div>
                      </a>
                    `;
});

social.innerHTML = socialmediaHTML;

function popup(discription) {
  popupText.textContent = discription;
  popupOverlay.classList.add("active");
}

function closePopup() {
  popupOverlay.classList.remove("active");
}

popupClose.addEventListener("click", closePopup);

// click on the dark area outside the box
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) closePopup();
});

// Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopup();
});

function renderProjects() {
  let html = "";

  projectsData.forEach((project) => {
    html += `
  <div class="grid-section-card">
        <div class="grid-section-card-data">
          <div class="grid-section-card-header">
            <div class="grid-section-card-title">${project.title}</div>
            <div class="grid-section-card-read-button" data-id="${project.id}"  >Read</div>
          </div>

          <div class="grid-section-card-stack-type">${project.projectType}</div>
          <div class="grid-section-card-json">
            ${project.techStack
              .map(
                (stack) => `
                <div class="grid-section-card-key-value-pair">
                  <div class="grid-section-card-key">${stack.key}:</div>
                  <div class="grid-section-card-value">${stack.value}</div>
                </div>`,
              )
              .join("")}
          </div>

          <div class="grid-section-card-links-div">
            ${project.projectLinks
              .map(
                (link) => `
                <div class="grid-section-card-links-block">
                  <div class="grid-section-card-links-left-part">
                    <img src="${link.linkImg}" alt="" class="grid-section-card-links-img" />
                    <div class="grid-section-card-links-name">${link.linkTitle}</div>
                  </div>
                  <a href="https://${link.linkUrl}" target="_blank" class="grid-section-card-links-right-part">open</a>
                </div>`,
              )
              .join("")}
          </div>
         </div>
        <div class="grid-section-card-img">
          <img
            src="${project.projectImg}"
            alt=""
            class="grid-section-card-desktop-img"
          />
        </div>
      </div>
  `;
  });

  cardContainer.innerHTML = html;
}

function renderAchivements() {
  let html = "";

  achivements.forEach((project) => {
    html += `
  <div class="grid-section-card">
        <div class="grid-section-card-data">
          <div class="grid-section-card-header">
            <div class="grid-section-card-title">${project.title}</div>
           
          </div>

          <div class="grid-section-card-stack-type">${project.projectType}</div>
          <div class="grid-section-card-json">
            ${project.techStack
              .map(
                (stack) => `
                <div class="grid-section-card-key-value-pair">
                  <div class="grid-section-card-key">${stack.key}:</div>
                  <div class="grid-section-card-value">${stack.value}</div>
                </div>`,
              )
              .join("")}
          </div>

          <div class="grid-section-card-links-div">
            ${project.projectLinks
              .map(
                (link) => `
                <div class="grid-section-card-links-block">
                  <div class="grid-section-card-links-left-part">
                    <img src="${link.linkImg}" alt="" class="grid-section-card-links-img" />
                    <div class="grid-section-card-links-name">${link.linkTitle}</div>
                  </div>
                  <a href="https://${link.linkUrl}" target="_blank" class="grid-section-card-links-right-part">open</a>
                </div>`,
              )
              .join("")}
          </div>
         </div>
        <div class="grid-section-card-img">
          <img
            src="${project.projectImg}"
            alt=""
            class="grid-section-card-desktop-img"
          />
        </div>
      </div>
  `;
  });

  cardContainer.innerHTML = html;
}

cardContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".grid-section-card-read-button");
  if (!btn) return;

  const project = projectsData.find((p) => p.id === Number(btn.dataset.id));
  popup(project.projectDiscription);
});

function setActive(tab) {
  projectsTab.classList.toggle("active", tab === projectsTab);
  achivementsTab.classList.toggle("active", tab === achivementsTab);
}

projectsTab.addEventListener("click", () => {
  renderProjects();
  setActive(projectsTab);
});

achivementsTab.addEventListener("click", () => {
  renderAchivements();
  setActive(achivementsTab);
});

renderProjects();
setActive(projectsTab);
