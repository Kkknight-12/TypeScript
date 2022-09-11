// another generic function
interface lengthy {
  // must have a length property which should be number
  length: number
}

/*
- element passed in must have a length property
- string, array have property named length
*/
// function countAndDescribe(element: lengthy): [lengthy, string] {
// or
function countAndDescribe<T extends lengthy>(element: T): [T, string] {
  let describtionText = "Got no value"

  if (element.length === 1) {
    describtionText = "Got 1 element"
  } else if (element.length > 1) {
    describtionText = "Got " + element.length + " elements."
  }
  return [element, describtionText]
}

console.log(countAndDescribe("Hi there")) // ['Hi there', 'Got 8 elements.']
console.log(countAndDescribe(["St1", "St2"])) //  [Array(2), 'Got 2 elements.']

console.log("running", countAndDescribe({ length: 123 }))
/*
running (2) [{…}, 'Got 123 elements.']  
0: {length: 123}
1: "Got 123 elements."
*/

/* string or array have a length propertys */
console.log("asdadsad".length) // 8
console.log(["asd", "asd"].length) // 2
