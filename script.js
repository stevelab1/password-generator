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

// Final generated random password
var generatedPassword = "";

// Function to prompt user for password options
function getPasswordOptions() {
  // Array of user chosen character-types to be included in password generation procedure
  var arrChosenCharacterTypes = [];
  // Failure to choose any character-type state
  var noCharacterTypesChosen = true;

  function getPasswordLength() {
    // Length of password. User prompted that it must be between 10 and 64 characters
    var userPasswordLength = prompt(
      "Choose a password length between 10 and 64 characters long:"
    );

    // Validate if quantity of characters chosen by the user is a number between 10 and 64
    if (
      isNaN(Number(userPasswordLength)) ||
      userPasswordLength > 64 ||
      userPasswordLength < 10
    ) {
      userPasswordLength = prompt("Invalid value. Please select a number between 10 and 64:");
    } else {
      return userPasswordLength;
    }
  }
  getPasswordLength();
  // * Character types
  //     * Lowercase
  //     * Uppercase
  //     * Numeric
  //     * Special characters ($@%&*, etc)
  // * Code should validate for each input and at least one character type should be selected

  //validation check

  // typeof
}
// Function for getting a  random element from an array
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
  getPasswordOptions();

  if (password === undefined) {
    passwordText.value = "Try again! Remember to choose a NUMBER between 10 and 64 and AT LEAST ONE of the character types.";
  } 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
