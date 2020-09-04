// Question 1
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

lastName.addEventListener("keyup", checkLength);

function checkLength(event) {
    const inputValue = event.target.value.trim();
    const valueLength = inputValue.length;

    if (valueLength >= 5) {
        console.log("value accepted");
        lastNameError.style.display = "none";
    }
    else {
        console.log("the input does not have a value");
        lastNameError.style.display = "block";
    }
}

