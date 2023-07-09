/*
 * https://www.educative.io/module/page/8q5JgjuQoKnxmMqxO/10370001/5738128375021568/5637690430586880
 * Parameters type takes a function type and returns a tuple type representing
 * types of all parameters of the function */

// creating a replica of Parameters Type
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

const sayHello = (name: string, age: number) =>
  `Hello ${name}, your age is ${age}`;
// function overload can also be passed here as we just need the return type
type sayHelloo = { (name: string, age: number): string };
type SayHelloParams = MyParameters<sayHelloo>; // [string, number]

/*
 * Let’s break down this definition.
 * First, the Parameters type has a type argument constraint that says that T
 * must be a function type ((...args: any) => any).
 * Next, inside the conditional expression we say that T extends (...args: infer P) => any.
 *
 * P is not a type argument, it’s like a type variable which will hold the actual type of
 * function parameters (as a tuple).
 * The infer keyword lets us unwrap a type argument and pick a consistent part.
 *
 * Another way to think about this is that T is matched against the (...args:
 * infer P) => any pattern. If it matches the pattern, then P becomes the type
 * that is at the same place in T as infer P in the pattern. For example, let’s
 * assume that T is (name: string, age: number) => string. It gets matched
 * against (...args: infer P) => any. Since it can also be represented as
 * (...args: [string, number]) => string, it matches the pattern.
 * The equivalent of infer P in T is [string, number], so P gets resolved
 * to [string, number] inside the positive branch of the conditional expression. */

/*
 * https://javascript.plainenglish.io/use-typescript-conditional-types-like-a-pro-7baea0ad05c5
 * Parameters: Constructs a tuple type from the types used in the parameters
 *  of a function type Type. */