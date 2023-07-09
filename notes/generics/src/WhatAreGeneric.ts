// Generic Component that has properties that can change depending on the implementation
interface MyComponent<TProps> {
  name: string;
  id: number;
  props: TProps;
}

// First property that has a string
interface Props1 {
  color: string;
}

// Second property that has a number
interface Props2 {
  size: number;
}

// First component that has color in property because it is generic with Props1
const component1: MyComponent<Props1> = {
  name: "My Component One",
  id: 1,
  props: { color: "red" },
};

// Second component that has size in property because it is generic with Props2
const component2: MyComponent<Props2> = {
  name: "My Component Two",
  id: 2,
  props: { size: 100 },
};

console.log(component1);
console.log(component2);

//
// Generic List
let list1: number[] = [1, 2, 3];
list1.push(4); // Can only push number
// list1.push('4'); //Error -> Argument of type 'string' is not assignable to
// parameter of type 'number'.
console.log(list1);

let list2: any[] = [1, 2, 3];
list2.push("Here_is_a_string");
list2.push(false);
console.log(list2); // You can push any type of value

const a: Array<string> = new Array("abc", "def");
const s: string = a[0]; // No cast required
// we have auto complete assistance form Ts
console.log(s.substr(0, 1)); // Access to string members

// Any List
const a2: Array<any> = new Array("abc", "def");
const s2 = a2[0] as string; // need to typecast to tell ts the data type
// we don't have auto complete assistance from Ts
// console.log(s2.substringg(0, 1)); // TypeScript does not safe guard
console.log(s2.substr(0, 1)); // TypeScript does not safe guard