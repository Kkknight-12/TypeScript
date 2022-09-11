// Optional Chaining

const fechedUserData = {
  id: "d1",
  name: "Knight",
  job: { title: "", description: "My Own Company" },
}

console.log(fechedUserData?.job?.title)

// Nullish Coalescing

const userInput = undefined
// if the left handside value is null or undefined
// go for right handside value
const storedData = userInput ?? "DEFAULT"

console.log(storedData)
