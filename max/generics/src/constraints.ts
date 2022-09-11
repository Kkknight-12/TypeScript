// Constraints
// extends keyword
// to tell typescript what type of data it can expect
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

// error Argument of type 'number' is not assignable to parameter of type 'object'.
// const mergeObj2 = merge2({ name: "knight", hobbies: ["Sports"] }, 20)
// console.log(mergeObj2) // {name: 'knight', hobbies: Array(1)}
