// Assignment Code
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//  Prompts added

function generatePassword() {
  var numericCharacters = "0123456789";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";

  // Special character functions

  var specialCharacters = "!@#$%^&*/'?:-_()";

  var anwser = "";

  var password = "";

  // Todo Generate password and other logic here

  var passwordLength = parseInt(
    prompt(
      "Please enter the number of characters you want for your password.  It must be more than 8 but less than 128."
    )
  );

  // Group selected characters

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a valid number of characters.");
  } else {
    var lowerCases = confirm("Do you want lowercases in your password?");
    if (lowerCases) {
      anwser += lowercaseCharacters;
    }

    var upperCases = confirm("Do you want uppercases in your password?");
    if (upperCases) {
      anwser += uppercaseCharacters;
    }

    var numbers = confirm("Do you want numbers in your password?");
    if (numbers) {
      anwser += numericCharacters;
    }

    var special = confirm("Do you want special characters in your password?");
    if (special) {
      anwser += specialCharacters;
    }

    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * anwser.length);
      password += anwser[randomIndex];
    }
    return password;
  }
  return "";
}
//   var lowerCases = confirm("Do you want lowercases in your password?");
//   if (lowerCases) {
//     anwser += lowercaseCharacters;
//   }

//   var upperCases = confirm("Do you want uppercases in your password?");
//   if (upperCases) {
//     anwser += uppercaseCharacters;
//   }

//   var numbers = confirm("Do you want numbers in your password?");
//   if (numbers) {
//     anwser += numericCharacters;
//   }

//   var special = confirm("Do you want special characters in your password?");
//   if (special) {
//     anwser += specialCharacters;
//   }

//   for (var i = 0; i < passwordLength; i++) {
//     var randomIndex = Math.floor(Math.random() * anwser.length);
//     password += anwser[randomIndex];
//   }
//   return password;
// }
