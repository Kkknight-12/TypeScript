/* A union type is constructed from existing types using the pipe (|) character: */

let age: number | null;
age = null; // okay
age = 30; // okay
// age = "30"; // Error: Type 'string' is not assignable to type 'number'.

/* How could we change the type of age so that it can be undefined as well as a number or null
 *
 * let age: number | null | undefined;  */

// /////////////////////////////
// String literal union types //
// /////////////////////////////
let fruit: "Banana" | "Apple" | "Pear";
fruit = "Apple";
// fruit = "Chiku"// Type '"Chiku"' is not assignable to type '"Banana" | "Apple" | "Pear"'.

// /////////////////////
// Object union types //
// /////////////////////
type Actions = { type: "loading" } | { type: "loaded"; data: { name: string } };