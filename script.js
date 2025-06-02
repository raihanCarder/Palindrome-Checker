const button = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");


button.addEventListener("click", () => {
    const inputValue = textInput.value;

    if (textInput.value === "") {
        alert("Please input a value");
    }
    else {

        const cleanString = cleanInput(inputValue).toUpperCase();

        if (isPalindrome(cleanString)) {
            result.textContent = `${inputValue} is a Palindrome.`;
        }
        else {
            result.textContent = `${inputValue} is not a Palindrome.`;
        }

    }
});

function isPalindrome(input) {

    if (input.length === 0) {
        return true;
    }

    let start = 0;
    let end = input.length - 1;

    while (start < end) {
        if (input[start] !== input[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;

}

function cleanInput(str) {
    const regex = /[^a-zA-Z0-9]/g;
    return str.replace(regex, "");
}