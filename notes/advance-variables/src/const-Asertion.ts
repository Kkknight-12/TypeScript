const v1 = 10;
// v1 = 10; // const v1: any -> Error: Cannot assign to 'v1' because it is a constant.
let v2 = 10 as const;
v2 = 10;
// v2=30// Type '30' is not assignable to type '10'

// -----------------------------------------------------------------------------------

// Array as const
const myArr1 = [1, 2, 3];
myArr1.push(4);
console.log(myArr1);

let myArr2 = [1, 2, 3] as const;
// myArr2.push(4); // Property 'push' does not exist on type 'readonly [1, 2, 3]'

// testing readonly
let myArr3: readonly [1, 2, 3] = [1, 2, 3];
// myArr3 = [1,2,3] // Ok
// cant be anything other than  [1,2,3]
// -----------------------------------------------------------------------------------

// Object as const

// Example 1
let immutable1 = { id: "1" } as const;
// immutable1.id = 2; // Cannot assign to 'id' because it is a read-only property
// immutable1["newprop"] = 2;
//Element implicitly has an 'any' type because expression of type '"newprop"' can't be used to index type '{ readonly id: "1"; }'.
console.log(immutable1); //  {readonly id: "1"}

// Example 2
let immutable2: {
  readonly id: number;
} = { id: 1 };
console.log(immutable2); //  {readonly id: "1"}

// Nested objects are automatically set with readonly at each level
// Example 3
let person = {
  id: 1,
  name: {
    first: "Patrick",
    last: "Desjardins",
    middleName: null,
  },
  location: {
    country: "USA",
    state: "CA",
  },
  relatives: [
    {
      id: 2,
      name: {
        first: "Person2",
        last: "Person22",
        middle: "Mid",
      },
    },
  ],
} as const;

// Doest not compile:
// person.relatives.push({ id: 2, name: { first: "New", last: "New", middle: "" } });
// Property 'push' does not exist on type 'readonly
// person.id = 4;
// Cannot assign to 'id' because it is a read-only property.

// Example 4
// possible to be more accurate and select only a portion of an object to use as const.

let person2 = {
  id: 1,
  name: {
    first: "Patrick",
    last: "Desjardins",
    middleName: null,
  },
  location: {
    country: "USA",
    state: "CA",
  } as const,
  relatives: [
    {
      id: 2,
      name: {
        first: "Person2",
        last: "Person22",
        middle: "Mid",
      },
    },
  ],
};

// person2.relatives.push({ id: 2, name: { first: "New", last: "New", middle: "" } });
// person2.id = 4;