/*
 * Generic type allows us to create a specific type by allowing us to pass
 *  types into it as parameters. The parameters are passed inside angle
 * brackets. If there are multiple parameters, they are separated by a comma.
 * const myVar = GenericType<SpecificType1, SpecificType2, ...>
 */

// Array Generic Type
// We pass the type we want the array elements to be into the Array  type
let scores: Array<number>;
scores = [70, 65, 75];

//
type Coordinate = [number, number, number];
let addressCoordinate: Array<Coordinate> = [
  [1, 2, 3],
  [2, 3, 5],
];

//
// Promise Type
const response: Promise<Response> = fetch("https://swapi.dev/api/");
response.then((res) => console.log(res.ok));

//
// Readonly<Type>
// Readonly type simply adds the readonly keyword to each of the object
// properties that is passed into it.
type Action = {
  type: "fetchedName";
  data: string;
};
type ImmutableAction = Readonly<Action>;
// as can be seen all the properties are now readonly
/* {readonly type: "fetchedName", readonly data: string} */

//
// Partial<Type>
type Contact = {
  name?: "Bob";
  email?: "bob@someemail.com";
};
type PartialContacts = Partial<Contact>;
/* type:
{name?: "Bob", email?: "bob@someemail.com"} */

//
// Record<KeyType,ValueType>
/* Record type has two parameters for the types of the key and value.  */
type Result = {
  firstName: string;
  surname: string;
  score: number;
};
type ResultRecord = Record<string, Result>; // type: {[p: string]: Result}
let fName: ResultRecord = {
  "object 1": {
    firstName: "knight",
    surname: "no Surname",
    score: 0,
  },
};