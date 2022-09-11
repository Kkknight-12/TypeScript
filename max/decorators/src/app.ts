//  adding logger function as a decorator to class Person
function Logger(logString: string) {
  console.log("LOGGER FACTORY")
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY")
  return function (constructor: any) {
    console.log("RENDERING - Template")
    const hookEl = document.getElementById(hookId)
    const Fname = new constructor() // 'Function' has no construct signatures.
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector("h1")!.textContent = Fname.name
    }
  }
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max"

  constructor() {
    console.log("creating person object")
  }
}
const person1 = new Person()
console.log(person1)
