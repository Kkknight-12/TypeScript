// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB)
// }

// const mergeObj = merge({ name: "knight", hobbies: ["Sports"] }, { age: 20 })
/* even though we know both the property exist, we can't access them */
// console.log(mergeObj.name.split(""))
// Property 'name' does not exist on type 'object'

//////////////////////////
// ways to deal with it //
//////////////////////////

// typecasting
// const mergeObj = merge(
//   { name: "knight", hobbies: ["Sports"] },
//   { age: 20 }
// ) as { name: string; hobbies: string[]; age: number }
// console.log(mergeObj.name.split("")) // ['k', 'n', 'i', 'g', 'h', 't']
// console.log(mergeObj.age) // 20

// generic types
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergeObj = merge({ name: "knight", hobbies: ["Sports"] }, { age: 20 })
console.log(mergeObj.name.split("")) // ['k', 'n', 'i', 'g', 'h', 't']
console.log(mergeObj.age) // 20
