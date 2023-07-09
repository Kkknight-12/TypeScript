/*
 * INFER keyword
 *
 *  https://www.educative.io/module/page/8q5JgjuQoKnxmMqxO/10370001/5738128375021568/5637690430586880
 *  https://levelup.gitconnected.com/using-typescript-infer-like-a-pro-f30ab8ab41c7
 *
 * https://www.notion.so/infer-keyword-d178088f25f248069eea61bdfa86e2e2
 * */

// ---------------------------------------------------------------------------------------

// Example 1
/*
 * T extends condition ->  (infer U)[] ? U : never
 * condition says (infer U), infer U -> take the value parameter,
 * and if U is an array
 * then return U
 * else return never
 * */
type UnpackedArray<T> = T extends (infer U)[] ? U : never;
type U0 = UnpackedArray<string[]>; // string
// U0 expects a string
// const somt: U0 = ["knight", "Luff"]; // cant pass array of string to U0
type U1 = UnpackedArray<"Knight">; // never
type U2 = UnpackedArray<["knight", "Luff"]>; // "knight" | "Luff"

// ---------------------------------------------------------------------------------------

// Example 2
type returnArray<T> = T extends infer U ? U : never;
type V1 = returnArray<["knight", "Luff"]>; // ["knight", "Luff"]
type V2 = returnArray<"knight">; // "knight"

// ---------------------------------------------------------------------------------------

// Example 3
type CombinedType<T> = T extends { t1: infer U; t2: infer U } ? U : never;
type C1 = CombinedType<{ t1: string; t2: string }>; // string
const C1S: C1 = "str";

type C2 = CombinedType<{
  t1: boolean;
  t2: number;
  j3: number;
  j4: string;
  j5: string;
}>; // boolean |  number
const C2S1: C2 = true;
const C2S2: C2 = 8;

// ---------------------------------------------------------------------------------------

// Example 4
type UnpackedFn<T> = T extends (...args: any[]) => infer U ? U : T;

// when T is Function return -> U
declare function foo(a: string): number;
type UFN = UnpackedFn<typeof foo>; // number

declare function foo2(a: string): number | boolean;
type UFN2 = UnpackedFn<typeof foo2>; // number | boolean

//  when T is not a Function return T
type UFN3 = UnpackedFn<number>; // number

// ---------------------------------------------------------------------------------------

// Example 5
// type UnpackedG<T> = T extends (infer U)[]
//   ? U
//   : T extends (...args: any[]) => infer U
//   ? U
//   : T extends Promise<infer U>
//   ? U
//   : T;
type UnpackedG<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : // : T;
    never;

// never
type T01 = UnpackedG<string>; // string  -> T
// const nam: T01 = "knight";

// string -> T extends (infer U)[]
type T11 = UnpackedG<string[]>; // string
const nam11: T11 = "knight";

type nam12 = UnpackedG<["knight", "luff"]>; // "knight" | "luff"
const namIs: nam12 = "luff"; // can take either "knight" or "luff" value only

//
// string -> T extends (...args: any[]) => infer U
type T13 = UnpackedG<() => string>; // string
type T21 = UnpackedG<(a: string, b: string) => number>; // number

const sayHello2 = (name: string, age: number) =>
  `Hello ${name}, your age is ${age}`;
type SayHelloReturnType = UnpackedG<typeof sayHello2>; // string

// const nam31 = (name: string, email: string) => {
//   return { name, email };
// };
// type T211 = UnpackedG<typeof nam31>; // {name: string, email: string}
type nam31 = { (name: string, email: string): { name: string; email: string } };
type T211 = UnpackedG<nam31>; // {name: string, email: string
const mymy: T211 = { name: "luff", email: "luff@gmail.com" };

//
// T extends Promise<infer U>
type T3 = UnpackedG<Promise<string>>; // string

// T extends (infer U)[]
type T4 = UnpackedG<Promise<string>[]>; // Promise<string>

// step 1 => UnpackedG<Promise<string>[]> -> T extends (infer U)[] -> Promise<string>
// step 2 => UnpackedG<Promise<string>> -> then T extends Promise<infer U> -> string
type T5 = UnpackedG<UnpackedG<Promise<string>[]>>; // string

// ---------------------------------------------------------------------------------------

// Example 6
type FirstIfString<T> = T extends [infer S, ...unknown[]]
  ? S extends string
    ? S
    : never
  : never;

// T extends [infer S, ...unknown[]] ? (S extends string ? S : never) : never

/*
 * In the first conditional type, we determine whether the actual type of the
 * type parameter T is a non-empty tuple type, and declare the type variable
 * S using infer to store the type of the first element of the captured tuple
 * type during pattern matching.
 *
 * In the second conditional type, we continue to determine whether the type
 * variable S is a subtype of the string type and return the type
 * corresponding to the type variable S if the condition is met, otherwise
 * all false branches of the conditional type will return the never type.
 *  */

// string
type A = FirstIfString<[string, number, number]>;

// "Hello"
type B = FirstIfString<["Hello", number, number]>;

// "Hello" | "Js
type C = FirstIfString<["Hello" | "Js", number]>;

// never
type D = FirstIfString<[boolean, string, number]>;

type FirstIfStringCleaner<T> = T extends [infer S extends string, ...unknown[]]
  ? S
  : never;

// ------------------------------------------------------

// void
// R
type UnionToIntersection<U> = (
  U extends any ? (arg: U) => number : never
) extends (arg: infer X) => number // | void
  ? X
  : never;

type T6 = { a: "a" } | { b: "b" } | ((take: string) => string);
type T7 = UnionToIntersection<T6>; // {a: "a"} & {b: "b"} & ((take: string) => string)
type MyType = UnionToIntersection<number | number>; // number

// ------------------------------------------------------

type UnionToIntersectionExperiment<U> = U extends infer R ? R : boolean;

type T6Exp2 = { a: "a" } | { b: "b" } | ((take: string) => string);
type T7Exp2 = UnionToIntersectionExperiment<T6Exp2>;
let o: T7Exp2;
o = { a: "a" };
/*
{a: "a"} | {b: "b"} | ((take: string) => string)
*/

// ------------------------------------------------------

type UnionToIntersectionExperiment00<U> = U extends any
  ? (args: U) => boolean
  : never;

type T6Exp00 = { a: "a" } | { b: "b" } | ((take: string) => string);
type T7Exp00 = UnionToIntersectionExperiment00<T6Exp00>;
/*

((args: {a: "a"}) => boolean) |
((args: {b: "b"}) => boolean) |
((args: (take: string) => string) => boolean)
 */
// ------------------------------------------------------

type UnionToIntersectionExperiment0<U> = (
  U extends any ? (args: U) => boolean : never
) extends (arg: infer X) => boolean // | void
  ? X
  : never;

type T6Exp0 = { a: "a" } | { b: "b" } | ((take: string) => string);
type T7Exp0 = UnionToIntersectionExperiment0<T6Exp0>;
/*
{a: "a"} & {b: "b"} & ((take: string) => string)
*/

// ------------------------------------------------------

type UnionToIntersectionExperiment2<U> = U extends any
  ? (arg: U) => number
  : boolean;

type T6Exp = { a: "a" } | { b: "b" } | ((take: string) => string);
type T7Exp = UnionToIntersectionExperiment2<T6Exp>;
/*
 * ((arg: {a: "a"}) => number) |
 * ((arg: {b: "b"}) => number) |
 * ((arg: (take: string) => string) => number) */

// ------------------------------------------------------

type UnionToIntersectionExperiment3<U> = (
  U extends any ? (args: U) => void : never
) extends (arg: infer X) => void
  ? X
  : never;

type T6Exp3 = { a: "a" } | { b: "b" } | ((take: string) => string);
type T7Exp3 = UnionToIntersectionExperiment3<T6Exp3>;
/*
{a: "a"} | {b: "b"} | ((take: string) => string) */

// ------------------------------------------------------
// https://blog.logrocket.com/understanding-infer-typescript/