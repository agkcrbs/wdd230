let mapContainerElement = document.querySelector("#mapContainer");

// Set this again initially, or it will need double-clicks to open it on small 
// view on the first time, and it will carry its state across resizes.
if (window.innerWidth >= 768) {
    mapContainerElement.style.display = "block";
} else {
    mapContainerElement.style.display = "none";
}

function toggleMap() {
    if (mapContainerElement.style.display === "none") {
        mapContainerElement.style.display = "block";
    } else {
        mapContainerElement.style.display = "none";
    };
};

document.getElementById("mapToggleButton").addEventListener("click", toggleMap);

// Force the map to appear in large view and disapper initially in small view.
// Otherwise, it's too hard to remember only the small-view state.
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        mapContainerElement.style.display = "block"
    } else {
        mapContainerElement.style.display = "none";
    }
});
