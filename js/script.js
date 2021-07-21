// **************
// DOM SELECTORS
// **************
const submitBtn = document.getElementById("submitBtn");
const alert = document.getElementById("alert");
const alertMsg = document.getElementById("alertMsg");

// **************
// FUNCTIONS
// **************
// Show error alerts
const showErrorAlert = () => {
  alertHeading.innerText = "Are you forgetting something?";
  alertMsg.innerText =
    "Please enter some text in the input box above before pressing the button.";
  alert.classList.add("alert-danger");
  alert.classList.remove("invisible");
};

// Reset all alerts: Alerts don't show up
const resetAlerts = () => {
  alert.classList.add("invisible");
  alert.classList.remove("alert-danger");
  alertMsg.classList.remove("display-6");
  alertMsg.innerText = "";
  alertHeading.innerText = "";
};

// Reverse the string
const reverseString = (userInput) => {
  let result = "";

  for (let i = userInput.length - 1; i >= 0; i--) {
    result += userInput[i];
  }
  return result;
};

// Display the reversed string in the DOM
const displayString = (stringToDisplay) => {
  alertHeading.innerText = "Your reversed string is:";
  alertMsg.innerText = stringToDisplay;
  alertMsg.classList.add("display-6");
  alert.classList.add("alert-primary");
  alert.classList.remove("invisible");
};

const getUserInput = () => {
  // Clear previously shown alerts
  resetAlerts();

  // Get user's input
  const userString = document.getElementById("userString");

  // Check if a valid string was entered
  if (!userString.value || userString.value.length === 0) {
    // If invalid string was entered, display an alert message
    showErrorAlert();
  } else {
    // If valid string was entered:
    // Reverse the string using a helper function
    const reversedString = reverseString(userString.value);
    console.log(reversedString);

    // Display the reversed string in the DOM
    displayString(reversedString);
  }

  // Reset the input to empty state for the user's next input
  userString.value = "";
};

// **************
// EVENT LISTENERS
// **************
submitBtn.addEventListener("click", getUserInput);
