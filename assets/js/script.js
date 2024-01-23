// Select elements
const courses = document.getElementsByClassName("courses")[0];
const carouselItems = document.querySelectorAll(".item");
const carouselLeftArrow = document.getElementsByClassName("left-arrow-btn")[0];
const carouselRightArrow =
  document.getElementsByClassName("right-arrow-btn")[0];
const carouselDots = document.getElementsByClassName("carousel-dots")[0];
const accordion = document.getElementsByClassName("accordion")[0];
const accordionItems = document.querySelectorAll(".accordion-item");
const header = document.getElementsByClassName("header")[0];

// The number of courses
const numberOfCourses = 9;

// The course
const courseTemplate = `
            <div class="course">

            <img
                alt=""
                fetchpriority="high"
                height="150"
                src="https://static.wixstatic.com/media/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg"
                srcset="
                    https://static.wixstatic.com/media/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg
                "
                style="width: 300px; height: 150px; object-fit: cover"
                width="300"
            />
            <div class="course-description">
                <h2>iOS Development</h2>
                <p>რეგისტრაცია დასრულებულია</p>
                <button><img alt="arrow" src="assets/img/svg/arrow.svg"/><span>კურსის დეტალები</span></button>
            </div>
            </div>
        `;

for (let i = 0; i < numberOfCourses; i++) {
  // Append the new course to the course container
  courses.insertAdjacentHTML("afterbegin", courseTemplate);
}

//////////////////////////////////////////////

const CAROUSEL_MAX_ITEM_NUM = Math.ceil(carouselItems.length / 3) * 3; // If all pages were fulled with items.
let firstActiveItem = 0 % CAROUSEL_MAX_ITEM_NUM;

// Create dots for the carousel
for (let i = 0; i < carouselItems.length / 3; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  carouselDots.appendChild(dot);
}

// Move to the next slide in the carousel
const moveNextSlide = () => {
  firstActiveItem = (firstActiveItem + 3) % CAROUSEL_MAX_ITEM_NUM;

  // Move carousel
  carouselItems.forEach((item, i) => {
    item.classList.remove("active");
    if (i >= firstActiveItem && i < firstActiveItem + 3) {
      item.classList.add("active");
      item.style.left = `${(i - firstActiveItem) * 350}px`;
    }
  });
};

const movePrevSlide = () => {
  firstActiveItem =
    Math.abs(firstActiveItem - 3 + CAROUSEL_MAX_ITEM_NUM) %
    CAROUSEL_MAX_ITEM_NUM;

  // Move carousel
  carouselItems.forEach((item, i) => {
    item.classList.remove("active");
    if (i >= firstActiveItem && i < firstActiveItem + 3) {
      item.classList.add("active");
    }
  });
};

const carouselInterval = setInterval(() => {
  moveNextSlide();
}, 10000);

// On right arrow click
carouselRightArrow.addEventListener("click", moveNextSlide);

// On Left arrow click
carouselLeftArrow.addEventListener("click", movePrevSlide);

//////////////////////////////////////////////

// Event delegation
accordion.addEventListener("click", (e) => {
  // Click event
  e.preventDefault();
  if (!e.target.closest(".question")) return; // guard clause
  const answer = e.target.closest(".accordion-item")?.querySelector(".answer");
  const arrow = e.target.closest(".accordion-item")?.querySelector("img");
  // // Close every accordion
  accordionItems.forEach((item) => {
    if (item.querySelector(".answer") !== answer) {
      item.querySelector(".answer").classList.add("hidden");
      item.querySelector("img").style.transform = "rotate(0deg)";
    }
  });

  // Show answer if it's hidden and hide if it's shown
  if (answer) answer.classList.toggle("hidden");

  if (arrow) {
    const currentRotation = arrow.style.transform.replace(/[^0-9\-.,]/g, ""); // Extract current rotation value
    arrow.style.transform = currentRotation
      ? `rotate(${parseFloat(currentRotation) + 180}deg)`
      : "rotate(180deg)";
  }
});

////////////////////////////////////////

// As you scroll, increase header's opacity

document.addEventListener("scroll", () => {
  header.style.opacity = window.scrollY > 0 ? "0.9" : "1";
});
