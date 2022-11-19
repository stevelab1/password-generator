// Array of special characters to be included in password
var specialCharacters = [
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

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  // Length of password must be at least 10 characters but no more than 64

  var userPasswordLength = prompt(
    "How long do you want your password to be? Must be between 10 and 64 characters."
  );

  // Validate if quantity of characters chosen by the user is a number
  if (isNaN(Number(userPasswordLength))) {
    alert("Invalid value. Please select a number between 10 and 64.");
  } else {
    alert("It is a number.");
  }

  // * Character types
  //     * Lowercase
  //     * Uppercase
  //     * Numeric
  //     * Special characters ($@%&*, etc)
  // * Code should validate for each input and at least one character type should be selected

  // if (userPasswordLength === "64") {
  //   prompt("secure password: " + userPasswordLength);
  // }

  i;

  //validation check

  // typeof
}
getPasswordOptions();
// Function for getting a random element from an array
function getRandom(arr) {
  //  randomly select from the array with random generator
  // forEach YES (not map as creates new array (make array please))? for loop?

  return arr[Math.floor(Math.random() * arr.length)];
}

var special = getRandom(specialCharacters);
var numeric = getRandom(numericCharacters);
var lowerCase = getRandom(lowerCasedCharacters);
var upperCase = getRandom(upperCasedCharacters);
console.log(special);
console.log(numeric);
console.log(lowerCase);
console.log(upperCase);

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
