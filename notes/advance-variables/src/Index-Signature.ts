/* Index Signature */
interface Person {
  id: number;
  name: string;
}

// Applying Index Signature
interface PersonDictionary {
  [id: number]: Person;
}

const dict: PersonDictionary = {
  1: { id: 1, name: "First" }, // applying this -> [ ], is optional
  [10]: { id: 10, name: "Tenth" },
};

// accessing dict object through indexing -> [ ]
console.log(dict[10].name); // Tenth
console.log(dict[1].name); // First
console.log(dict); // {1: {…}, 10: {…}}

// //////////////////
// Better Approach //
// //////////////////
interface Person2 {
  id: number;
  name: string;
}

// creating a Generic Type which can accept any type/Interface
interface MyDictionary<T> {
  [id: number]: T;
}

// passing in Person interface to Generic
const dict2: MyDictionary<Person> = {
  [1]: { id: 1, name: "First" },
  [10]: { id: 10, name: "Tenth" },
};
console.log(dict2[10].name);

// -------------------------------------------------------------------------------------
//* https://javascript.plainenglish.io/getting-started-with-index-signatures-f2b8e15f3c0d#:~:text=Index%20signature%20is%20used%20to,object%20are%20of%20consistent%20types.&text=Assume%20that%20we%20have%20a,consistent%20with%20the%20type%20string. */
// Example 2
let ColorsTheme: {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
};

ColorsTheme = {
  palette: {
    success: {
      main: "green",
    },
    //can add more keys
    error: {
      main: "red",
      canAddSomemore: "with string key",
    },
    // Error
    // warning: {
    //   main: 1231313, // Type 'number' is not assignable to type 'string'.
    // },
  },
};