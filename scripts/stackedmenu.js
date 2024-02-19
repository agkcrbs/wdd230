const menuButton = document.querySelector("#menu");
const navigationElement = document.querySelector("nav");
const mainElement = document.querySelector("main");

menuButton.addEventListener("click", function () {
	navigationElement.classList.toggle("open");
	menuButton.classList.toggle("open");
	mainElement.classList.toggle("open");
});
