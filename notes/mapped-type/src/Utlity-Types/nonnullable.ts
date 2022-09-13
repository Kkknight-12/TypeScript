/* Non-nullable -> Constructs a type by excluding null and undefined from
 Type. */

// --------------------------------------------------------------------------------

type MyTypes = string | number | Boolean | undefined;
type T0 = NonNullable<MyTypes>;

// MyTypes can be string | number | Boolean | undefined;
const checkingMyTypes = (props: MyTypes) => {
  return props;
};
console.log(checkingMyTypes(undefined), "MyTypes can take undefined");

// T0 is of type NonNullable<MyTypes> which means
// T0 can all the types from MyTypes except null and undefined
const testing = (props: T0) => {
  return props;
};

console.log(testing("string is welcome"));
console.log(testing(88), " Number are also welcome");
console.log(testing(true), " Boolean are also welcome");
// console.log(testing(undefined));

// --------------------------------------------------------------------------------

// Example 2
type T1 = NonNullable<string[] | null | undefined>;

const testing2 = (props: T1) => {
  return props;
};

console.log(testing2(["first name", "last name"]));