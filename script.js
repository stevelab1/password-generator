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
var generatedRandomPassword = "";

// Function to prompt user for password options
function getPasswordOptions() {
  // Array of user chosen character-types to be included in password generation procedure
  var arrChosenCharacterTypes = [];
  // Failure to choose any character-type state
  var noCharacterTypesChosen = true;

  // Character types options. Validate each input. At least one character type should be selected
  // Lowercase check
  if (
    confirm("Would you like to include lowercase letters in your password?")
  ) {
    noCharacterTypesChosen = false;
    arrChosenCharacterTypes =
      arrChosenCharacterTypes.concat(lowerCasedCharacters);
  }
  // Uppercase
  if (
    confirm("Would you like to include uppercase letters in your password?")
  ) {
    noCharacterTypesChosen = false;
    arrChosenCharacterTypes =
      arrChosenCharacterTypes.concat(upperCasedCharacters);
  }
  // Numeric
  if (
    confirm("Would you like to include numeric characters in your password?")
  ) {
    noCharacterTypesChosen = false;
    arrChosenCharacterTypes = arrChosenCharacterTypes.concat(numericCharacters);
  }
  // Special characters ($@%&*, etc)
  if (
    confirm("Would you like to include special characters in your password?")
  ) {
    noCharacterTypesChosen = false;
    arrChosenCharacterTypes = arrChosenCharacterTypes.concat(specialCharacters);
  }
  // Validate at least one character type selected
  if (noCharacterTypesChosen) {
    alert(
      "You must select at least one character type to include in your password."
    );
  } else {
    return arrChosenCharacterTypes;
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
  }
  
  // Function to generate password with user input
  function generatePassword(arrChosenCharacterTypes) {
  // Length of password. User prompted that it must be between 10 and 64 characters
  var userPasswordLength = prompt("Choose a password length between 10 and 64 characters long:");
  
  // Validate if quantity of characters chosen by the user is a number between 10 and 64
  if (isNaN(Number(userPasswordLength)) || userPasswordLength > 64 || userPasswordLength < 10) {
  alert("Invalid value. Please select a number between 10 and 64.");
  return;
  }
  
  let generatedRandomPassword = "";
  for (var i = 0; i < Number(userPasswordLength); i++) {
  generatedRandomPassword += getRandom(arrChosenCharacterTypes);
  }
  
  return generatedRandomPassword;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
  var password = generatePassword(getPasswordOptions());
  var passwordText = document.querySelector("#password");
  
  if (password === undefined) {
  passwordText.value = "Try again! Remember to choose a NUMBER between 10 and 64 and AT LEAST ONE of the character types.";
  } else {
  passwordText.value = password;
  }
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  
  