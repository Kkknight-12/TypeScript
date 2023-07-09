/*
 * Sometimes it makes sense to put some restrictions on type arguments. Having
 * these restrictions allows you to make assumptions about the type argument
 * when referring to it inside some function.
 *
 * You can express the restriction using the extends keyword.
 *
 * For example, you might decide to enforce the fact that FormFieldAC should
 * only contain string, number, or boolean values. You will notice that after
 * introducing the restriction, the getFieldValue function no longer compiles. */

// now type generic T must be either string or number or boolean,
// any data type other than this is not accepted
interface FormFieldAC<T extends string | number | boolean> {
  value?: T;
  defaultValue: T;
  isValid: boolean;
}

//
// function getFieldValue<T>(field: FormFieldAC<T>): T { /* ... */ }
// Error ->   Type 'T' does not satisfy the constraint 'string | number |
// boolean'

// string is accepted
function getFieldValue1<T extends string>(field: FormFieldAC<T>): T {
  return field.value ?? field.defaultValue;
}

// union of string or number is also accepted
function getFieldValue2<T extends string | number>(field: FormFieldAC<T>): T {
  return field.value ?? field.defaultValue;
}

// Example 2
/* Constraining with index type query operator */
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // ‘name’ | ‘age’

/*
 * Good example of using a type argument constraint is when typing a function
 * that takes an object and a string representing the name of some property
 * of this object.
 *
 * To achieve this, the function must take two type arguments: T and K. We can
 * put a constraint on K and require it to extend keyof T.  */
function get<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const person: Person = {
  name: "knight",
  age: 31,
};
console.log(get(person, "name")); // ✅ No errors
// get(person, 'foo'); // 🔴 Error-> Argument of type '"foo"' is not assignable to parameter of type 'keyof Person'.