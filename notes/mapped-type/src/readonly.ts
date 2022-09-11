// The interface that we want to have readonly without defining another interface
interface OriginalInterface {
  x: number;
  y: string;
}

// The mapped type that map a generic type with the readonly constraint
type ReadonlyInterface<T> = { readonly [P in keyof T]: T[P] };

// Function that convert the object from one type to another
function genericInterfaceToReadOnly<T>(o: T): ReadonlyInterface<T> {
  return o;
  // return Object.freeze(o);
}

const original: OriginalInterface = { x: 0, y: "1" };
const originalReadonly = genericInterfaceToReadOnly(original);
console.log(originalReadonly.x); // error TS2540: Cannot assign to 'x'
// cant reassign value to read only
// console.log((originalReadonly.x = 9)); // error TS2540: Cannot assign to 'x'