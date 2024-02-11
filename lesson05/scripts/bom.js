const inputElement = document.getElementById("favchap");
const buttonElement = document.querySelector("button");
const unorderedListElement = document.getElementById("list");

let addedChapters = [];

buttonElement.addEventListener("click", function () {
    let inputValue = inputElement.value.trim();
    // check to make sure the input is not blank before doing the following remaining tasks in this list using an if block, otherwise provide a message or at least do nothing and return the .focus() to the input field.
    if (inputValue !== "") { // .Trim() removes front and back whitespace -- tabs, newlines.
        inputValue = inputValue.toLowerCase(); // Convert the input value to lowercase.
        inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1); // Capitalize the first letter.  Omitting the second argument in .slice() defaults to the end of the string (it would be string.length).
        if (!addedChapters.includes(inputValue)) { // .Includes() loops through the array and manually checks each element, whereas the "in" operator checks if a property exists in an object or if an index exists in an array.
            addedChapters.push(inputValue);
            // create a li element
            const listItemElement = document.createElement("li");
            // create a delete button
            const deleteButton = document.createElement("button");
            // populate the li elements textContent or innerHTML with the input value
            deleteButton.setAttribute("aria-label", `Remove ${inputValue}`);
            listItemElement.textContent = inputValue;
            // populate the button textContent with an ❌
            deleteButton.textContent = "❌";
            // append the li element with the delete button
            listItemElement.appendChild(deleteButton);
            // append the li element to the unordered list in your HTML
            unorderedListElement.appendChild(listItemElement);
            // add an event listener to the delete button that removes the li element when clicked
            deleteButton.addEventListener("click", function () {
                // Removal options: .filter(), or .indexOf() and then .splice(index, 1). // .splice(startingIndex, numberOfElementsToRemove)
                const removeThisFromArray = listItemElement.childNodes[0].textContent.trim(); // Text nodes exist even when there are no explicit HTML tags for them.
                addedChapters = addedChapters.filter(item => item !== removeThisFromArray);
                listItemElement.remove(); // .Remove() removes the element it is called on from its parent node in the DOM tree, effectively deleting it from the document.
                // send the focus to the input element
                inputElement.focus(); // .Focus() makes an input field, textarea, or button become the active element on the page, ready for user input.
            });
            inputElement.value = "";
            inputElement.focus();
        } else {
            alert("Duplicate input!");
            inputElement.focus();
        };
    } else {
        alert("Fatal input error!");
        input.focus();
    }
});
