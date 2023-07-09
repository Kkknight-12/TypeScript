/* https://www.educative.io/module/lesson/variables-and-types/g7Vl9JYKEL6 */

let myTuple: [number, string];
myTuple = [1, "test"];
myTuple[0] = 3;

// can't anything other than number, string at position 0 and 1
// can't assign anything more than length of tuple
// myTuple[3] = "one more"; // Error: -> is not assignable to type 'undefined'.
// myTuple[4] = 2; // Error: -> is not assignable to type 'undefined'.
// myTuple[5] = true; // Error: -> is not assignable to type 'undefined'.

// --------------------------------------------------------------------------------------

// reassigning another tuple
let firstTuple: [number, number] = [1, 2];
let secondTuple: [number, number, number] = [3, 4, 5];
// secondTuple = firstTuple; // Source has 2 element(s) but target requires 3.
// firstTuple = secondTuple; // Source has 3 element(s) but target allows
// only 2.

// --------------------------------------------------------------------------------------

// adding readonly
let thirdTuple: [number, number] = [1, 2];
let fourthTuple: readonly [number, number] = [3, 4];

thirdTuple[0] = 100;
// fourthTuple[0] = 1000; //  Cannot assign to '0' because it is a read-only property.
console.log(thirdTuple);
console.log(thirdTuple);

// --------------------------------------------------------------------------------------

// using Ts Built in readonly
let fifthTuple: Readonly<[number, number]> = [1, 2];
// fifthTuple[0] = 100; // Cannot assign to '0' because it is a read-only property
console.log(firstTuple);

// --------------------------------------------------------------------------------------

// possible ways to declare tuple readonly
let sixthTuple: readonly [number, number] = [1, 2];
let seventhTuple: Readonly<[number, number]> = [1, 2];
let eightTuple = [1, 2] as const;

// sixthTuple[0] = 0;
// seventhTuple[0] = 0;
// eightTuple[0] = 0;