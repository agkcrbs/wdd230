
const currentYear = new Date().getFullYear();
document.getElementById(id = "replaceCurrentYear").innerText = currentYear;

const lastModifiedDate = new Date(document.lastModified).toDateString();
document.getElementById(id = "replaceLastModified").innerText = lastModifiedDate;
