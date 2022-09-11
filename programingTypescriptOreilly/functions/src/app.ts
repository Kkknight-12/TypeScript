// ///////////////////
// function syntax //
// ///////////////////

// named function
function greet(name: string) {
  return "hello" + name
}

// function expression
let greetExp = function (name: string) {
  return "hello" + name
}

// arrow function
let greetArr = (name: string) => "hello" + name

// function constructor
let greetFuncCons = new Function("name", 'return "hello " + name')

// --------------------------------------------------

// //////////////////////
// Optional Parameters //
// //////////////////////

// use ? to mark parameters as optional.
function log(message: string, userId?: string) {
  console.log(message, userId || "Not signed in")
}

log("Page loaded")
log("User signed in", "d234q3d")

console.log("--------Optional Parameters Ends----------")
// --------------------------------------------------

// /////////////////////
// Default Parameters //
// /////////////////////

/*
- TypeScript is smart enough to infer the 
- parameter’s type from its default value,   
*/
function log2(message: string, userId = "Not signed in") {
  console.log(message, userId)
}

log2("Page loaded again")
log2("User signed in", "Jhon Wick")

console.log("--------Default Parameters Ends----------")

// ///////////////////////////////////
// type check  for default parameter//
// ///////////////////////////////////

/*
- add explicit type annotations to your default 
- parameters,   
*/

type Context = {
  appId?: string
  userId?: string
}

function log3(message: string, context: Context) {
  console.log(message, context.userId) // only using userId
}

log3("Heeyyy", { userId: "Wick123" })
log3("Heeyyy", { appId: "WickaApp123" }) // hey undefined

console.log("--------type check Ends----------")

// --------------------------------------------------

// /////////////////
// rest parameter //
// /////////////////

// using rest parameter to take in any number of parameter
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

console.log(sum(1, 2, 3))

/*
- function can have at most one rest parameter, 
- and that parameter has to be the last one in 
- the function’s parameter list  
*/

console.log("--------rest parameter Ends----------")

// --------------------------------------------------

// ///////////
// callback //
// ///////////

function doSomething(f: Function) {
  return f(1, 2, 3)
}

const tr = doSomething((...arr: []) => arr.map((r) => r + 1))

console.log(tr)

// --------------------------------------------------

// /////////////////////
// call, apply, bind  //
// /////////////////////
/*
-In addition to invoking a function with parentheses ()- , JavaScript supports at least two other ways to 
- call a function.   
*/

/*
 - apply binds a value to this within your function 
 - (in this example, we bind this to null), and 
 - spreads its second argument over your function’s 
 - parameters. call does the same, but applies its 
 - arguments in order instead of spreading.

- bind() is similar, in that it binds a this-argument
- and a list of arguments to your function. The
- difference is that bind does not invoke your 
- function; instead, it returns a new function that 
- you can then invoke with (),  
*/

function add(a: number, b: number): number {
  return a + b
}

console.log(add(10, 20))
console.log(add.apply(null, [10, 20]))
console.log(add.call(null, 10, 20))
console.log(add.bind(null, 10, 20)())

console.log("-------- call, apply, bind Ends----------")

// --------------------------------------------------

// ///////
// this //
// ///////

/*
- this has a different value depending on how you
- called your function,  
*/

/*
- The general rule is that this will take the value 
- of the thing to the left of the dot when invoking
- a method.   
*/
let x = {
  a() {
    return this
  },
  ts: "Ts is fun",
}

// this is the object x in the body of a()
console.log(x.a()) // {ts: 'Ts is fun', a: ƒ}

// But if at some point you reassign a before calling
// it, the result will change!
let a = x.a
console.log(a()) // now, this is undefined in the body of a()

/*
- If your function uses this, be sure to declare your
- expected this type as your function’s first 
- parameter (before any additional parameters), and
- TypeScript will enforce that this really is what you
- say it is at every call site. this isn’t treated 
- like other parameters
— it’s a reserved word when used as part of a 
- function signature:  
*/
function fancyDate2(this: Date) {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}

console.log("fancyDate2", fancyDate2.call(new Date()))

console.log("-------- this Ends----------")

// --------------------------------------------------

// /////////////////////
// generator function //
// /////////////////////

// //////////////////////////
// IterableIterator< type > /
/////////////////////////////

/*
- Generator functions convenient way to, well,
-  generate a bunch of values. They give the 
- generator’s consumer fine control over the pace at 
- which values are produced. Because they’re lazy—that
-  is, they only compute the next value when a 
- consumer asks for it—they can do things that can be 
- hard to do other‐ wise, like generate infinite lists.
*/

function* createFibonacciGenerator() {
  let a = 0
  let b = 1
  while (true) {
    yield a
    ;[a, b] = [b, a + b] // a, b -> 1, 2
  }
}

let fibonacciGenerator = createFibonacciGenerator()
console.log("fibonacciGenerator", fibonacciGenerator.next()) // a -> 0
console.log("fibonacciGenerator", fibonacciGenerator.next()) // a -> 1
console.log("fibonacciGenerator", fibonacciGenerator.next()) // a -> 1

/*
- We called createFibonacciGenerator, and that 
- returned an IterableIterator.  
*/

/*
- You can also explicitly annotate a generator, 
- wrapping the type it yields ( gererator yield, they dont return ) 
- in an IterableIterator:  
*/
function* createNumbers(): IterableIterator<number> {
  let n = 10
  while (1) {
    yield n++
  }
}
let numbers = createNumbers()
console.log(numbers.next())
console.log(numbers.next())

console.log("-------- generator function Ends----------")

// --------------------------------------------------

// ////////////
// Iterators //
// ////////////

/*

let someObj = {
  *[Symbol.iterator]() {
 
   } 
}
*/

/*
Iterable -> object that contain a property called
Symbol.iterator. Here numbersI will be that object

Iterators-> object that have method called next().


when you create a generator you get value that is both iterable and an iterator.

numbersI is Iterable which return Iterable Iterator.
*/

let numbersI = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n
    }
  },
  name: "an object with iterator",
}

// Iterate over an iterator with for-of
for (let a of numbersI) {
  console.log(a)
}

// Spread an iterator
let allNumbers = [...numbersI]
console.log("allNumbers", allNumbers)

// will behave just like any other object
console.log(numbersI.name)

console.log("-------- Iterators Ends----------")

// --------------------------------------------------

// //////////////////
// Call Signatires //
// //////////////////

/*

function type or call signature tells whats a function takes in and return
syntanx -> ( a: number, b: number ) => number

call signature only contain type-level code. can express parameter types, this types, return types, optional types, but they can't express default values

some example for function types:

type Greet = (name: string) => string

type Log = ( message: string, userId?: string) => void

type sumVaridicSafe = ( ... numbers: number[] ) => number
*/

type Log = (message: string, userId?: string) => void

let Log: Log = (message, userId = "Not signed in ") => {
  console.log(message, userId)
}

Log("heyyyyaaaa", "IooA123")

/*
- declare a function expression log, 
- and explicitly type it as type Log.

- We don’t need to annotate our parameters twice
- TypeScript infer it for us from Log.

- default value for userId, type couldn’t capture the default value
*/

// --------------------------------------------------

// ////////////////////
// Contextual Typing //
// ////////////////////

function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i)
  }
}

times((n) => console.log(n), 4)

// --------------------------------------------------

// ////////////////////////////
// OverLoaded Function Types //
// ////////////////////////////

/*
- A function with multiple call signatures.
- 
- TypeScript resolves overloads in the order they were declared  
*/
type Reserve = {
  (from: Date, to: Date, destation: string): void
  (from: Date, destinatio: string): void
}

// let reserve: Reserve = (from, to, destination) => {

// }

/*
getting error becuase
- from a caller’s point of view f’s type is the union of those overload signatures.

from f’s implementation’s point of view, 
- there needs to be a single, combined type that can actually be implemented. You need to manually declare this combined call signature when implementing f—it won’t be inferred for you.
*/

let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  console.log("RRR", from)
  if (toOrDestination instanceof Date && destination !== undefined) {
    // Book a one-way trip
    console.log("one-way trip")
  } else if (typeof toOrDestination === "string") {
    // Book a round trip
    console.log("round trip")
  }
}
//  (from: Date, destinatio: string) => void
reserve(new Date(), "goa") // round trip
// (from: Date, to: Date, destation: string) => void
reserve(new Date(), new Date(), "goa") // one-way trip

// example 2
// https://www.typescriptlang.org/docs/handbook/2/functions.html
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    console.log("overload 2 running")
    return new Date(y, mOrTimestamp, d)
  } else {
    console.log("overload 1 running")
    return new Date(mOrTimestamp)
  }
}
console.log(makeDate(12345678))
console.log(makeDate(5, 5, 5))

// ///////////////////////////////////////
// Keeping Overload Signatures Specific //
// ///////////////////////////////////////

/*
- Overload Signatures (Reserve)
- implementation signature ( res )
*/

// let res: Reserve = (from: any, toOrDesti: any, desti?: any) => {
//   // .......
// }

/*
When using overloads, try to keep your implementation’s signature as specific as possible to make it easier to implement the function. 

- Date over any, and a union of Date | string over any
*/

/* 
Reason -> keeping types narrow make it easier to implement a function with a given signature.

If you type a parameter as any and want to use it as a Date, you have to prove to TypeScript that it’s actually a date to use it safely
*/

function getMonth(date: any): number | undefined {
  // we need to take care of the type here
  if (date instanceof Date) {
    return date.getMonth()
  }
  return
}

/*
 if you typed the parameter as a Date upfront, you don’t need to do extra work in the implementation:  
*/

function getMonths(date: Date): number {
  return date.getMonth()
}

// --------------------------------------------------

// ///////////////
// Polymorphism //
// ///////////////

/*
- Concrete types are useful when you know precisely what type you’re expecting, 
- But sometimes, you don’t know what type to expect beforehand, and you don’t want to restrict your function’s behavior to a specific type!
*/

type Filter = {
  (array: number[], f: (item: number) => boolean): number[]
}

const filter: Filter = function (array, f) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}

console.log(
  "filter",
  filter([1, 2, 3, 4], (_) => _ < 3)
) // evaluates to [1, 2]

/*
Typing the array’s elements as number works well for above example, but filter is meant to be a generic function 

- signature doesn’t work for arrays of other types of elements 
*/

type Filter2 = {
  (array: number[], f: (item: number) => boolean): number[]
  (array: string[], f: (item: string) => boolean): string[]
  (array: object[], f: (item: object) => boolean): object[]
}

/*
If you implement a filter function with that signature 

let names = [
  { firstName: "beth" },
  { firstName: "caitlyn" },
  { firstName: "xin" },
]
let result = filter(
    names, (_) => _.firstName.startsWith("b")
) 
result[0].firstName
// Error TS2339: Property 'firstName' does not exist on type 'object'.

we passed an array of objects, but remember that object doesn’t tell you anything about the shape of the object. So each time we try to access a property on an object in the array, TypeScript throws an error, because we didn’t tell it what specific shape the object has.
*/

// /////////////////////////
// Generic type parameter //
// /////////////////////////

type Filter3 = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

/*
What we’ve done here is say: “This function filter uses a generic type parameter T; we don’t know what this type will be ahead of time, so TypeScript if you can infer what it is each time we call filter that would be swell.”  

Once TypeScript infers what T is for a given call to filter, it substitutes that type in for every T it sees.

The funny-looking angle brackets, <>, are how you declare generic type parameters.
*/

const filter3: Filter3 = function (array, f) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}
// (a) T is bound to number
console.log(
  "filter numbers",
  filter3([1, 2, 3, 4], (_) => _ < 3)
) // evaluates to [1, 2]

// (b) T is bound to string
console.log(
  "filter string",
  filter3(["a", "b", "c"], (_) => _ !== "b")
) // evaluates to ['a', 'c']

// (c) T is bound to {firstName: string}
let names = [
  { firstName: "beth" },
  { firstName: "caitlyn" },
  { firstName: "xin" },
]

console.log(
  "filter name start with b",
  filter3(names, (_) => _.firstName.startsWith("b"))
) // [ {firstName: 'beth'} ]

// ///////////////////////////
// When Are Generics Bound? //
// ///////////////////////////

/*
The place where you declare a generic type doesn’t just scope the type, but also dictates when TypeScript will bind a concrete type to your generic. 

If we’d scoped T to the type alias Filter, TypeScript would have required us to bind a type explicitly when we used Filter

type Filter<T> = {
(array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter<number> = (array, f) =>


let stringFilter: Filter<string>: StringFilter = (array, f) =>
*/

// //////////////////////////////////
// Where Can You Declare Generics? //
/////////////////////////////////////
/*

type Filter = {
<T>(array: T[], f: (item: T) => boolean): T[]
}
or

type Filter = <T>(array: T[], f: (item: T) => boolean) => T[]

let filter: Filter = // ...

- T scoped to an individual signature. Because T is scoped to a single signature, TypeScript will bind the T in this signature to a concrete type when you CALL a function of type filter.

---------------------------------

type Filter<T> = {
(array: T[], f: (item: T) => boolean): T[]
}

or

type Filter<T> = (array: T[], f: (item: T) => boolean) => T[]

let filter: Filter<number> = // ...

-  T scoped to all of the signatures. Because T is declared as part of Filter’s type, TypeScript will bind T when you DECLARE a function of type Filter.

---------------------------------

function filter<T>(array: T[], f: (item: T) => boolean): T[] { // ...
}

- A named function call signature, with T scoped to the signature. TypeScript will bind a concrete type to T when you CALL function filter,
*/

// //////////////////////
// create map function //
// //////////////////////

// type mapType = {
//   <T, U>(array: T[], f: (item: T) => U): U[]
// }

function map<T, U>(array: T[], f: (item: T) => U): T[] {
  let result = []
  for (let i = 0; i < array.length; i++) {
    // result[i] = f(array[i])
    if (f(array[i])) {
      result.push(array[i])
    }
  }
  return result
}

const arr1 = [1, 2, 3, 4, 5]
console.log(map(arr1, (item) => item > 2))
//
const arr2 = ["a", "b", "c"]
console.log(map(arr2, (item) => item !== "c"))
// -------------------------------------------------------------

// /////////////////////////
// Generic Type Inference //
// /////////////////////////
/*
  TypeScript does a great job of inferring generic types for you. When you call the map function we wrote earlier, TypeScript infers that T is string and U is boolean:
  function map<T, U>(array: T[], f: (item: T) => U): U[] { // ...
}
map(
 ['a', 'b', 'c'], // An array of T
  _ => _ === 'a' // A function that returns a U 
)
*/

/*
- You can, however, explicitly annotate your generics 
- either annotate every required generic type, or none of them: 
*/

console.log(map<string, boolean>(arr2, (item) => item !== "a"))

/*
TypeScript infers concrete types for your generics from the arguments you pass
into your generic function,   
*/

/*  
let promise = new Promise((resolve) => resolve(45))

promise.then((result) => // Inferred as {}
    console.log(45 * result)) // Error

Why did TypeScript infer result to be {}? Because we didn’t give it enough information to work with—since TypeScript only uses the types of a generic function’s arguments to infer a generic’s type, it defaulted T to {}

we have to explicitly annotate Promises generic type parameter:
*/

let promise1 = new Promise<number>((resolve) => resolve(45))

promise1.then((result) => console.log("promise1", 45 * result))

// -------------------------------------------------------------

// ///////////////////////
// Generic Type Aliases //
// ///////////////////////

/*
- deeper dive into generics
*/
type MyEvent<T> = {
  target: T
  type: string
}

/*
only right place to declare generic is before =,
ie right after type alias's name 

- above code is for DOM event

- when using generic type like MyEvent, explicitly 
- bind its type paramters.
- they wont be inferred for you
*/

// button event example
type ButtonEvent = MyEvent<HTMLButtonElement>

//
let myEvent: MyEvent<HTMLButtonElement | null> = {
  target: document.querySelector("#mybutton"),
  type: "click",
}

// MyEvent can be used to create another type
type TimeEvent<T> = {
  event: MyEvent<T>
  from: Date
  to: Date
}

// you can use generic type alias in function signature

/*  
function triggerEvent<T>(event: MyEvent<T> ):void {
    // .....
}

triggerEvent({
    target: document.querySelector('#myButton')),
    type: 'mouseover'
})

- target field of the object we passed which is
- Element | null
- will be our T.
- It will replace all T occurence with Element | null
*/

// -------------------------------------------------------------

// ///////////////////////
// Generic Type Default //
// ///////////////////////
/* 
type MyEvent3<T extends HTMLElement = HTMLElement> = {
  target: T
  type: string
}

let myEvent3: MyEvent3 = {
  target: document.querySelector("#mybutton"),
  type: "click",
}

myEvent3.target.innerHTML = "Hello World" 


NOTE: Note able to treat Null
*/
