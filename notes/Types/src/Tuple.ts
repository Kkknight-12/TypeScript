let tomScore: [string, number];

tomScore = ["Tom", 70]; //  tomScore: [string, number]

// tomScore = ['Tom', "Tom", 70] // Type 'string' is not assignable to type 'number'.
// tomScore = ['Tom', 70, 70] // Type '[string, number, number]' is not assignable to type '[string, number]'

/*
 * Number of elements can be assigned is fixed which is the length of type
 *  declaration.
 *
 * Elements entered must match the position of type declared. */

// /////////////////////////////
// Creating open-ended tuples //
// /////////////////////////////
let openEndT: [string, ...number[]];

openEndT = ["name", 1, 2, 3, 4];
openEndT = ["name", 1];
openEndT = ["name", 1, 2];