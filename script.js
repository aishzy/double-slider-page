// Overlay Panels
const signupbtn = document.getElementById("signupbtn");
const signinbtn = document.getElementById("signinbtn");
const container = document.getElementById("container");

// Form Containers
const registerbtn = document.getElementById("registerbtn");
const loginbtn = document.getElementById("loginbtn");

// Overlay panel event listener
signupbtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signinbtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});
