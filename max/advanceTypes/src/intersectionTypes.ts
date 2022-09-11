// Code goes here!
/*
interface Admin{

}
 
interface Employee{

}

interface ElevatedEmployee extends Employee, Admin {

}
*/

// ///////////////
// Object types //
// ///////////////

// //////////////////
// intersection &  //
// //////////////////

type Admin = {
  name: string
  privilages: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

// el object will have both Admin and Employee
const el: ElevatedEmployee = {
  name: "knight",
  privilages: ["front-end"],
  startDate: new Date(),
}

/*
intersection type can be usefull when used in conjuction with object types as we are doing it here  
*/

// -------------

// //////////////////
// Union types "|" //
// //////////////////

type Combinable = string | number
type Numeric = number | boolean

/* 
- type of universal will Number as that is the union between
- Combinable & Numeric
- common -> number
*/
type Universal = Combinable & Numeric

/*
intersection operator can be used with any types and
it then simply builds intersection of those types.

- In case of union type, it is basically types they have in common. 
- In case of object types, it is combination of these objects. 
*/
