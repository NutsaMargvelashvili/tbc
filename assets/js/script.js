// Select elements
const courses = document.getElementsByClassName("courses")[0];
const carouselItems = document.querySelectorAll(".item");
const carouselLeftArrow = document.getElementsByClassName("left-arrow-btn")[0];
const carouselRightArrow =
  document.getElementsByClassName("right-arrow-btn")[0];
const carouselDots = document.getElementsByClassName("carousel-dots")[0];

// The number of courses
const numberOfCourses = 9;

// The course
const course = `
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
  courses.insertAdjacentHTML("afterbegin", course);
}

//////////////////////////////////////////////

const CAROUSEL_MAX_ITEM_NUM = Math.ceil(carouselItems.length / 3) * 3; // If all pages were fulled with items.
let firstActiveItem = 0 % CAROUSEL_MAX_ITEM_NUM;

// Create three div elements with the class "dot"
for (let i = 0; i < carouselItems.length / 3; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  carouselDots.appendChild(dot);
}

const moveNextSlide = () => {
  firstActiveItem = (firstActiveItem + 3) % CAROUSEL_MAX_ITEM_NUM;

  // Move carousel
  Array.from(carouselItems).forEach(function (item, i) {
    item.classList.remove("active");
    if (i >= firstActiveItem && i < firstActiveItem + 3) {
      item.classList.add("active");
      item.style.left = `${(i - firstActiveItem) * 350}px`;
    }
  });
};

const movePrevSlide = () => {
  console.log(firstActiveItem, "before", CAROUSEL_MAX_ITEM_NUM);
  firstActiveItem =
    Math.abs(firstActiveItem - 3 + CAROUSEL_MAX_ITEM_NUM) %
    CAROUSEL_MAX_ITEM_NUM;
  console.log(firstActiveItem, "after");

  // Move carousel
  Array.from(carouselItems).forEach(function (item, i) {
    item.classList.remove("active");
    if (i >= firstActiveItem && i < firstActiveItem + 3) {
      item.classList.add("active");
    }
  });
};
const carouselInterval = setInterval(() => {
  moveNextSlide();
}, 5000);

// On right arrow click
carouselRightArrow.addEventListener("click", () => {
  moveNextSlide();
});

// On Left arrow click
carouselLeftArrow.addEventListener("click", () => {
  movePrevSlide();
});
