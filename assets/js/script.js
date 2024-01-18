// Select courses' container
const courses = document.getElementsByClassName("courses")[0];

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
