// An interface with many fields of many types
interface Animal {
  age: number;
  name: string;
  maximumDeepness: number;
  numberOfLegs: number;
  canSwim: boolean;
  runningSpeed: number;
}

// ---------------------------------------------------------------------

// Handling Issue Without Record
function receiveInputFromUser(props: Animal): Animal {
  const wellTypedObject: Animal = {
    // const wellTypedObject: typeof props = {
    age: Number(props.age),
    name: props.name,
    maximumDeepness: Number(props.maximumDeepness),
    numberOfLegs: Number(props.numberOfLegs),
    canSwim: Boolean(props.age),
    runningSpeed: Number(props.runningSpeed),
  };
  return wellTypedObject;
}
console.log(
  receiveInputFromUser({
    age: 13,
    name: "Fish",
    numberOfLegs: 2,
    maximumDeepness: 123,
    canSwim: true,
    runningSpeed: 0,
    // you can't assign any key which is not mentioned in Animal Interface
    // and that needs to have key of type which it had in Animal Interface
    // babitaJiKiparty: "Nahi hai"
  })
);

// ---------------------------------------------------------------------

// ///////////////
// Using Record //
// ///////////////
/* The Record type is a way to build a new type with several members of a
   single type. For example, if you need an object with three members of type
   string, first parameter takes a union of desired fields and the second
   parameter is the type of these fields.
*/
// Create a type with three string fields
type RecordType1 = Record<"m1" | "m2" | "m3", string>;
// Instantiate a variable from the type
const x: RecordType1 = { m1: "s1", m2: "s2", m3: "s3" };
console.log(x);

// ---------------------------------------------------------------------

// Example 1
// A function that need to take all the animal fields but from a string type
// first argument will be key of Animal Object and second will be string
function receiveInputFromUserR(dataIn: Record<keyof Animal, string>): Animal {
  const wellTypedObject: Animal = {
    age: Number(dataIn.age),
    name: dataIn.name,
    maximumDeepness: Number(dataIn.maximumDeepness),
    numberOfLegs: Number(dataIn.numberOfLegs),
    canSwim: Boolean(dataIn.age),
    runningSpeed: Number(dataIn.runningSpeed),
  };
  return wellTypedObject;
}
console.log(
  receiveInputFromUserR({
    age: "13",
    name: "Fish",
    numberOfLegs: "2",
    maximumDeepness: "123",
    canSwim: "true",
    runningSpeed: "0",
  })
);

// How It Works
// dataIn : Record< keyof Animal, string >
// is equivalent to
// dataIn: Record<"age" | "name" | "maximumDeepness" | "numberOfLegs" |
// "canSwim" | "runningSpeed", string>
//
// without the possibility of typos and without necessary to keep all the
// strings synchronized with the Animal interface.

// ---------------------------------------------------------------------

// Example 2
// Construct a type with set of properties K of T
// { [P in K]: T } -> if P exist in K which is an object
// then return the T which is boolean ( line 110 )
type ownRecord<K extends string | number | symbol, T> = { [P in K]: T };
// map through the keys of AcceptedFlags and turn them to boolean
type AcceptedFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

/*
 * {
 * darkMode: boolean,
 * newUserProfile: boolean
 * } */
type ChangeToBoolean = ownRecord<keyof AcceptedFlags, boolean>;

// using record in Function
// function changeToBoolean<T extends FeatureOptions3>(obj: T) {
function changeToBoolean<T>(obj: T) {
  console.log(obj);
}
const obj = {
  darkMode: true,
  newUserProfile: true,
  somethingExtra: "sas",
  year: 2023,
};
changeToBoolean<ChangeToBoolean>(obj);
/*
 * {darkMode: true, newUserProfile: true, somethingExtra: 'sas', year: 2023}
 */

// creating new Variable
let newObj: ChangeToBoolean = {
  darkMode: false,
  newUserProfile: true,
  // if darkMode and newUserProfile are used as key
  // than their value can be boolean only
  // newUserProfile: 1,
  // newUserProfile: 'true',
  // somethingNew: true,
  // year:2023,
};
console.log(newObj);
// darkMode: false, newUserProfile: true}