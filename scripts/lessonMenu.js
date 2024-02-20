const firstLessonButton = document.querySelector("#firstLessonMenu");
const secondLessonButton = document.querySelector("#secondLessonMenu");
const lessonNavigationElement1 = document.querySelector(".hiddenNav1");
const lessonNavigationElement2 = document.querySelector(".hiddenNav2");
const lessonNavigationElement3 = document.querySelector(".hiddenNav3");
const lessonNavigationElement4 = document.querySelector(".hiddenNav4");
const lessonNavigationElement5 = document.querySelector(".hiddenNav5");
const lessonNavigationElement6 = document.querySelector(".hiddenNav6");
const lessonNavigationElement7 = document.querySelector(".hiddenNav7");
const lessonNavigationElement8 = document.querySelector(".hiddenNav8");
const lessonNavigationElement9 = document.querySelector(".hiddenNav9");
const lessonNavigationElement10 = document.querySelector(".hiddenNav10");

firstLessonButton.addEventListener("click", function () {
	firstLessonButton.classList.toggle("firstOpen");
    lessonNavigationElement1.classList.toggle("firstOpen");
    lessonNavigationElement2.classList.toggle("firstOpen");
    lessonNavigationElement3.classList.toggle("firstOpen");
    lessonNavigationElement4.classList.toggle("firstOpen");
    lessonNavigationElement5.classList.toggle("firstOpen");
});

secondLessonButton.addEventListener("click", function () {
    secondLessonButton.classList.toggle("secondOpen");
    lessonNavigationElement6.classList.toggle("secondOpen");
    lessonNavigationElement7.classList.toggle("secondOpen");
    lessonNavigationElement8.classList.toggle("secondOpen");
    lessonNavigationElement9.classList.toggle("secondOpen");
    lessonNavigationElement10.classList.toggle("secondOpen");
});
