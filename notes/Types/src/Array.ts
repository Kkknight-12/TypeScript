/*
 * Arrays
 * Js Arrays can hold mixed value types
 */

const items = [];
items.push(1);
items.push("two");
items.push(false);

console.log(items); // [1, 'two', false]

// //////////////////////////////
// Using the Array generic type /
// //////////////////////////////
const numbers: Array<number> = [];
numbers.push(1);
// numbers.push("two"); // Argument of type 'string' is not assignable to
// parameter of type 'number'.
// numbers.push(false); // Argument of type 'boolean' is not assignable to parameter of type 'number'.

console.log(numbers); // [1]

// If we declared the array as follows, would we still get a type error?
// const items2: Array<number> = [1, "two", false];
// Type 'string'/'boolean' is not assignable to type 'number'.

// Conclusion
// *** In Ts array can hold only one type of data ***

// /////////////////////////////////////
// Alternative way to declare an array /
// Using the square bracket notation   /
// /////////////////////////////////////
/* an alternative and arguably simpler method of creating strongly-typed arrays  */
const items2: number[] = [];

// --------------------------------------------------------------------------------

// Example 1
// Rest parameter
function logScores(firstName: string, ...scores: number[]) {
  console.log(firstName, scores);
}
// logScores("Mike", 90, 65, "65") // Argument of type 'string' is not assignable to parameter of type 'number'
logScores("Mike", 90, 65);