// Type Casting
const userInputElement = document.getElementById("user-input")

// checking if the userInputElement is not null
if (userInputElement) {
  // treat userInputElement as HTMLInputElement
  // then get the value
  ;(userInputElement as HTMLInputElement).value = "hi there!"
}
