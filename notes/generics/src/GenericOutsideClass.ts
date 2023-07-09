/* new heading with old examples */

function countElementInArray<T>(elements: T[]): number {
  return elements.length;
}

function returnFirstElementInArray<T>(elements: T[]): T | undefined {
  if (elements.length > 0) {
    return elements[0];
  }
  return undefined;
}
const arr = [1, 2, 3];
console.log(countElementInArray(arr)); // 3
console.log(returnFirstElementInArray(arr)); // 1

/*
 * The two functions are examples of what can be accomplished with generic
 *  without residing inside a class. Both take an array of type T. The first
 *  one uses that type to return a number that is the length of the array.
 *  The second returns a particular T element of the array. */

// writing ! to specify that we know that
// return will not be undefined.
const bigger = returnFirstElementInArray(arr)! * 10;
console.log("bigger", bigger); // 1

const arr2 = ["Test", "is", "good"];
const first = returnFirstElementInArray(arr2);
console.log("first", first); // Test
console.log(arr2.indexOf(first!));