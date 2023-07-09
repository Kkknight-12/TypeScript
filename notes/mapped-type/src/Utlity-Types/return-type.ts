/*
*  https://www.educative.io/module/lesson/variables-and-types/JYwnovLjnDo
*
*  In some cases, you may want to extract the returned type of a function.
*  TypeScript comes with a ReturnType mapping function that gives you this
*  information.

*  For example, if you have a function that returns a string, you can use
*  ReturnType<yourFunction> and it will return the type string.
* */

// Example 1
// a function that return string
function getName(): string {
  return "Name";
}
//                   assigning type getName to FunctionType

// getName type is a function, and it's return type is string
type FunctionType = ReturnType<typeof getName>; // string
const varX: FunctionType = "This is a string";
console.log(varX);

/*
 * Here's what's happening in more detail:
 * typeof getName returns the type of the getName function,
 * which is ( arg: string ) => string.
 * ReturnType<typeof getName> takes the type of the getName function as a
 * type argument and returns the return type of the function, which is string.
 *  */

// any random function overloading
type getReturnType = { (a: string, b: boolean): number };
type FunctionType2 = ReturnType<getReturnType>; // number

// ------------------------------------------------------------------------------------

// ReturnType with many return types
/*
* The code above uses typeof to get the type signature of the function which
* is ()=>string, and ReturnType gets the string. What about when the function
* does not explicitly specify a return type?

* TypeScript can infer this information for you, even when the function can
* return several objects. In the example below, an object that is not defined
* is returned 50% of the time, and the other 50% of the time, an object with
* a similar field but different types, is returned. */

// Example 2
function getSomething() {
  if (Math.random() < 0.5) {
    return {
      cond: "under 0.5",
      typeScript: true,
    };
  } else {
    return {
      cond: 1,
      typeScript: "3.7",
      moreField: true,
    };
  }
}
type functionType2 = ReturnType<typeof getSomething>;
/*
 * {cond: string, typeScript: boolean, moreField?: undefined} |
 * {cond: number, typeScript: string, moreField: boolean}
 * */

/*
 * The interesting part is that TypeScript specified moreField?: undefined for
 * the first part of the union. The reason is that the second part returns the
 * member as boolean, but this is not in the first part. TypeScript returns a type
 * that is balanced in terms of structure among the possible return values. */

// Example 3
function getSomething2() {
  if (Math.random() < 0.5) {
    return 1;
  } else {
    return "1";
  }
}

type functionType3 = ReturnType<typeof getSomething2>; // 1 | "1"
/*
 * If a function returns two primitive types, a union of the values is
 * returned. However, TypeScript is smart enough to narrow the type
 * down if possible. For example, the following example does not return
 * number | string but the literal 1 | "1". */
// ------------------------------------------------------------------------------------

// ReturnType with asynchronous functions

// Example 4
async function asyncFunction() {
  return await Math.random();
}
type functionType4 = ReturnType<typeof asyncFunction>; // Promise<number>
/* This piece of code returns the type, Promise<number>. */

// Example 5
/*
 * But, what if we wanted the type number which is the generic parameter?
 * It is possible with a conditional type.  */
type ReturnTypeFromPromise<T> = T extends Promise<infer U> ? U : T;
type functionType5 = ReturnTypeFromPromise<functionType4>; // number

/*
 * The condition type checks if the returned type T extends Promise<?>. If
 * it does, it can infer the type into U and return it. Otherwise, it returns
 * the whole type. */

// ------------------------------------------------------------------------------------

/* https://www.educative.io/module/page/8q5JgjuQoKnxmMqxO/10370001/5738128375021568/5637690430586880
 * https://www.notion.so/infer-keyword-Return-Type-Parameter-Examples-d178088f25f248069eea61bdfa86e2e2
 * */

type CustomReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : boolean;

const sayHelloCustom = (name: string, age: number) =>
  `Hello ${name}, your age is ${age}`;

type SayHelloReturnTypeCustom = CustomReturnType<typeof sayHelloCustom>; // string
// ------------------------------------------------------------------------------------