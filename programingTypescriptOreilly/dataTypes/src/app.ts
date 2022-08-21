/*
Data Types 
*/

// any
/*
any makes your value behave like it would in regular JavaScript, and totally prevents the typechecker from working its magic.  

- with the any type (: any), you avoid the exception—it’s your way of telling TypeScript that you know what you’re doing.
*/
let a: any
a = 5
console.log(a)
a = "as"
console.log(a)
a = ["sdasd"]
console.log(a)
let b: any = 999

const c = a + b
console.log(c)

/*
NOTE: DONT USER ANY unless you are completely out of options.  
*/
// ----------------------------------------------------------------

// unknown
/*
- when you dont really have a choice, you have a value whose type you really dont know ahead of time.

- dont use any, instead use unknown
*/

/*
- you can compare unknown values 
  - ==, ===, ||, &&, ?, !
  
- other operation need type check 
  - typeof, instanceof  
*/
let aU: unknown = 30
console.log("aU", aU) // number

let bU = aU === 123
console.log("bU", bU) // false -> boolean

// let cU = aU + 10 // Error: Object is of type 'unknown'
// console.log("cU", cU)

// need a type check
if (typeof aU === "number") {
  let dU = a + 10
  console.log("dU", dU)
}

// ----------------------------------------------------------------

// boolean
// true , false

/*
- value can be compared with
  - ==, ===, ||, &&, ?, !
- can specify value true or false
*/

let aB = true

let bB: boolean
bB = true
console.log("bB", bB)

/*  
let cB : true

console.group("cB", cB = false) // Type 'false' is not assignable to type 'true'.
*/

// ----------------------------------------------------------------

// Type Literal

/*
 - a type that represents single value
 - typescript infer literal type because you used const, value can't be changed
 */

const cB = true

console.log("cB type ->", typeof cB) //b boolean

// ----------------------------------------------------------------

// number

/*
- number can do 
  - +, -, %, <  
*/

let aN = 1234

let bN = Infinity * 0.1

let dN = aN < bN

const eN = 999998

/* 
- let fN : 23.32 = 33.33 // Error -> Type '33.33' is not assignable to type '23.32'. 

use Const so Ts infers that your value is specific number

- you can't use Nan, Infiniy, as type literal
*/

// ----------------------------------------------------------------

// bigint

/*
- newcome to Js
- let you work with larger integer
- with number you can go till -> 2^53
- bigint allow you to use bigger number than 2^53 
- must be an integer 

- need tp use => ES2020 in tsconfig
*/

let aBI = 1234n

const bBI = 1231n

var cBI = aBI + bBI
console.log("cBI ->", cBI) // 2465n

let dBI = a < 12345
console.log("dBI ->", dBI) // false

/* 
let eBI = 2.334n // Error A bigint literal must be an integer 
*/

let fBI: bigint = 100n

let gBI: 100n = 100n

/* 
let hBI: bigint = 100 // Type 'number' is not assignable to type 'bigint'. 
*/

// ----------------------------------------------------------------

// string

/*
 - concatente ( + )
 - slice ( .slice )   
*/

let aS = "lillu"
let bS = "billu"

let cS = aS + " " + bS
console.log("cS", cS)

let eS: string = "aaaa"

let fS: "jhon" = "jhon"

/* 
let gS: "jhon" = "jon" 

Type '"jon"' is not assignable to type '"jhon"'.
*/

// -----------------------------------------------------------------------------

// object

/*
- object types specify the shapes of objects.  
*/
let aObj: object = { b: "x" }

// problem if we access b
/*  
Property 'b' does not exist on type 'object'.
console.log(aObj.b)
*/

/*
object doesn’t tell you a lot about the value it describes, just that the value is a JavaScript object (and that it’s not null).
*/

// -----------------------------------------------------------------------------

/*
can either let TypeScript infer your object’s shape for you, or explicitly describe it inside curly braces({}):  
*/

// skipping exlicit annotation
let aObj2 = { b: "x" } // {b: string}
console.log(aObj2.b) // x

let cObj = {
  c: {
    d: "f",
  },
}
console.log(cObj.c.d) // f

// explicitly describing object shape
let aObj3: { b: number } = {
  b: 12,
}

// -----------------------------------------------------------------------------

// declaring object with const

/*
- things wont change typescript wont infer type more narrowly 
- if you declare an object with const
- objects are mutable, typescript know you can change 
- ( update ) the fields after you create them.
*/

const aObj33: { b: number } = {
  b: 12,
}
console.log("aObj33 -> ", aObj33.b) // 12

// -----------------------------------------------------------------------------

// delcared type must be strictly followed
// with respect to the datatype
// also key name

let cObj3: {
  firstName: string
  lastName: string
} = {
  firstName: "jhon",
  lastName: "watson",
}

console.log("firstName", cObj3.firstName)

class PersonCl {
  // public is short cut for
  // this.firstName = firstName
  constructor(public firstName: string, public lastName: string) {}
}

cObj3 = new PersonCl("matt", "smith")

/*
{firstName: string, lastName: string} describes the shape of an object, and the class instance  
*/

/*
 what happens when we add extra properties, or leave out required ones:


let a: {b: number}
a = {} 
// Error TS2741: Property 'b' is missing in type '{}'
// but required in type '{b: number}'.

a={ b: 1, c: 2  } 
// Error TS2322: Type '{b: number; c: number}' is not assignable
// to type '{b: number}'. Object literal may only specify known
// properties, and 'c' does not exist in type '{b: number}'.  
*/

// --------------------------------------------------------------------

// optional property -> ?
// index signatures -> [key: type] : return type

let aObj4: {
  b: number
  c?: number // c is optional
  [key: number]: boolean // index signatures
}

aObj4 = { b: 1 }
aObj4 = { b: 1, c: undefined }
// aObj4 = { b: 1, c: "d" }
// Error 'string' is not assignable to type 'number'.

//  index signatures
aObj4 = { b: 2, 10: true }
aObj4 = { b: 1, 10: true, 20: false }

/*
  
*/
