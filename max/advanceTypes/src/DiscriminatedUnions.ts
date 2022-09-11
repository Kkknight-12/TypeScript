//////////////////////////
// Discriminated Unions //
//////////////////////////

// ///////////////////////////
// use of type in interface //
// ///////////////////////////

interface Bird {
  type: "bird"
  /* this is the type assignment where we narrow down the value that may be stored in type to exaclty this string value*/
  flyingSpeed: number
}

interface Horse {
  type: "horse"
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimalIf(animal: Animal) {
  if (animal.type === "bird") {
    console.log(`Moving with speed of ${animal.flyingSpeed}`)
    // Moving with speed of 10
  }

  if ("runningSpeed" in animal) {
    console.log(`Moving with speed of ${animal.runningSpeed}`)
  }
}

moveAnimalIf({ type: "bird", flyingSpeed: 10 })
moveAnimalIf({ type: "horse", runningSpeed: 20 })

// /////////////////////////
// using switch statement //
// /////////////////////////

function moveAnimal(animal: Animal) {
  let speed
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed
      break
    case "horse":
      speed = animal.runningSpeed
  }
  console.log(`Moving with speed of ${speed}`)
}

moveAnimal({ type: "bird", flyingSpeed: 30 })
moveAnimal({ type: "horse", runningSpeed: 20 })
