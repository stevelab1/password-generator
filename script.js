// Array of characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


// Get references to elements
const generateBtn = document.querySelector("#generate");
const passwordLength = document.querySelector("#password-length");
const passwordLengthValue = document.querySelector("#password-length-value");
const lowercase = document.querySelector("#lowercase");
const uppercase = document.querySelector("#uppercase");
const numbers = document.querySelector("#numbers");
const special = document.querySelector("#special");

// Update password length value on input change
passwordLength.addEventListener("input", () => {
  passwordLengthValue.textContent = passwordLength.value;
  generateAndUpdatePassword();
});

// Update password generation options on checkbox change
[lowercase, uppercase, numbers, special].forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    validateOptions();
    generateAndUpdatePassword();
  });
});

// Validate options and enable/disable generate button accordingly
function validateOptions() {
  const isChecked =
    lowercase.checked || uppercase.checked || numbers.checked || special.checked;
  generateBtn.disabled = !isChecked;
}

// Generate password and update the textarea
function generateAndUpdatePassword() {
  if (!generateBtn.disabled) {
    const newPassword = generatePassword();
    document.querySelector("#password").value = newPassword;
  }
}

// Generate password based on selected options
function generatePassword() {
  const characters = [];
  if (lowercase.checked) characters.push(...lowerCasedCharacters);
  if (uppercase.checked) characters.push(...upperCasedCharacters);
  if (numbers.checked) characters.push(...numericCharacters);
  if (special.checked) characters.push(...specialCharacters);

  const passwordLengthInt = parseInt(passwordLength.value, 10);
  let result = "";

  for (let i = 0; i < passwordLengthInt; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }

  return result;
}

// Initialize the page
function init() {
  // Set up event listeners for checkboxes first
  [lowercase, uppercase, numbers, special].forEach((checkbox) => {
    checkbox.addEventListener("change", validateOptions);
  });

  // Call validateOptions() after setting up event listeners
  validateOptions();
  generateAndUpdatePassword();
}

init();
