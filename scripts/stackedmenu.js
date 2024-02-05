const menuButton = document.querySelector("#menu");
const navigationElement = document.querySelector(".navigation");

menuButton.addEventListener("click", function () {
	navigationElement.classList.toggle("open");
	menuButton.classList.toggle("open");
});
