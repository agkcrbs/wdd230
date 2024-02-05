
// Also consider this: https://openscriptureapi.org
const desiredElementVariable1 = "#p36"; // Find this from "view source" or "inspect element".
const desiredElementVariable2 = "#p37";
let urlVariable = "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/93?lang=eng&id=p36-p37#p36";
urlVariable = "https%3A%2F%2Fwww.churchofjesuschrist.org%2Fstudy%2Fscriptures%2Fdc-testament%2Fdc%2F93%3Flang%3Deng%26id%3Dp36-p37%23p36"; // Otherwise, the address isn't found.
// Use a third-party CORS (Cross-Origin Resource Sharing) proxy service.
urlVariable = "https://corsproxy.org/?" + urlVariable; // Otherwise, the Church website blocks access from my local development environment for security purposes.

// fetch(urlVariable, {
//     mode: 'no-cors'
// })

fetch(urlVariable)
// This optional second argument is also used for RequetInit authentication requests:
// fetch('https://example.com/page', {
//     method: 'GET', // Specify the HTTP method (default is 'GET')
//     headers: {
//         // Include any headers if needed
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer token123'
//     }
// })
// Otherwise, this as a second argument: 'mode = "no-cors"' returns an empty page.
//    .then(response => { response.text(); console.log("This is the log of the response:"); console.log(response); }) // Chaining these together makes the next functions operate on the output of the previous functions.
// But, if I do that, it returns the whole mess above and leaves it unparsable.  It would have been fine with just that line, without the logs.  But with them, I need to explicitly return the text content.
    .then(response => {
        // console.log("This is the log of the response:");
        // console.log(response);
        return response.text(); // Return the promise from response.text()
        })
    .then(textContent => { // So this is operating on the text content presumably returned from the .text() method above.
        // console.log("This is the log of the fetched HTML (text) content:");
        // console.log(textContent); // Log the fetched HTML content
        // Parse the HTML and extract the desired text
        const parsedHTML = new DOMParser().parseFromString(textContent, "text/html");
        // console.log("This is the log of the parsed HTML:");
        // console.log(parsedHTML); // Log the parsed HTML content

        // Or: const desiredText = parsedHTML.querySelector(".desired-element").textContent;
        const desiredElement1 = parsedHTML.querySelector(desiredElementVariable1);
        // console.log("This is the log of the desired element:");
        // console.log(desiredElement1); // Log the parsed HTML content
        const desiredElement2 = parsedHTML.querySelector(desiredElementVariable2);
        const desiredElementTitle = parsedHTML.querySelector("title")

        // Here, programmatically remove those footnote superscripts...  They have little IDs attached in the HTML ("marker"), or just use their tag (<sup>).
        // Remove all <sup> elements from the verses.
        const supElements1 = desiredElement1.querySelectorAll("sup");
        const supElements2 = desiredElement2.querySelectorAll("sup");
        // "QuerySelectorAll() does not return a JavaScript array; it returns a NodeList, which is similar to an array but with some differences.
        // Here are the key differences:
        // NodeList vs. Array: While both NodeList and arrays are collections of nodes or elements, NodeList does not have all the methods available to arrays, such as map(), filter(), etc. However, you can still iterate over a NodeList using methods like forEach() or a traditional for loop.
        // Live vs. Static: NodeList is usually live, meaning it automatically updates as the document structure changes. If elements matching the selector are added or removed from the document after obtaining the NodeList, it will reflect those changes. In contrast, arrays are static; once created, they do not change unless modified explicitly.
        // Accessing Elements: NodeList elements can be accessed using bracket notation (like an array) or the item() method. For example, nodeList[0] or nodeList.item(0).
        // Array-Like Properties: While NodeList is not an array, it has some array-like properties, such as length, which indicates the number of nodes in the list."
        supElements1.forEach(element => element.remove());
        supElements2.forEach(element => element.remove());

        // Extract the text content from the element(s).
        const desiredTitle = desiredElementTitle ? desiredElementTitle.textContent.trim() : "Element not found";
        const desiredText1 = desiredElement1 ? desiredElement1.textContent.trim() : "Element not found";
        const desiredText2 = desiredElement2 ? desiredElement2.textContent.trim() : "Element not found";
        // console.log("This is the log of the desired text:");
        // console.log(desiredText1);
        // console.log(desiredText2);

        // Now insert these into the pop-up:
        const popUp = document.getElementById("popUp");
        // popUp.textContent = `${desiredText1}\n${desiredText2}`; // This doesn't display rightly.
        // const newPopUpPar1 = document.createElement("p"); newPopUpPar1.textContent = desiredText1; popUp.appendChild(newPopUpPar1); // No, no... do this shortlier in one line with .innerHTML.
        popUp.innerHTML = `<p>${desiredTitle}</p><p>${desiredText1}</p><p>${desiredText2}</p>`;

        // Show/hide the pop-up on mouseover (make this conditional on viewport size!):
        const navScripture = document.getElementById("navScripture");
        console.log(window.innerWidth);
        
        function checkWidthPopUp() {
            if (window.innerWidth > 768) {
                navScripture.addEventListener("mouseover", () => {
                    // popUp.style.display = "block"; // This shows the display before mouse-over on first pageload...
                    popUp.style.setProperty("display", "block");
                })
                navScripture.addEventListener("mouseout", () => {
                    // popUp.setAttribute('style', 'display: none;'); // This leaves the in-line property there on mouse-out.
                    popUp.style.removeProperty("display");
                });
            } else { // RemoveEventListener may not work; instead, add a reverse-listener.  The mouseout one seems unnecessary.
                navScripture.addEventListener("mouseover", () => {
                    popUp.style.removeProperty("display");
                });
            };
        };

        // Call checkWidthPopUp initially to set up the event listener based on the initial viewport size.
        checkWidthPopUp();

        // Add an event listener for a window-resize event.
        window.addEventListener("resize", checkWidthPopUp);
    })
    .catch(error => console.error("Error fetching data:", error));


