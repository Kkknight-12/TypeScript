// TypeGuards

type Combination = string | number
type Numerics = number | boolean

/* 
- type of universal will Number as that is the union between
- Combinable & Numeric
*/
type Universalcn = Combination & Numerics

function add(a: Combination, b: Combination) {
  /* type gaurd -> here typeof is our typeGaurd */
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}

/*
-   
*/

type AdminA = {
  name: string
  privileges: string[]
}
type EmployeeA = {
  name: string
  startDate: Date
}

// unkown employee is either of the two
type UnKownEmployee = AdminA | EmployeeA

const elUn: UnKownEmployee = {
  name: "knight",
  privileges: ["front-end"],
  startDate: new Date(),
}

function printEmployeeInformation(emp: UnKownEmployee) {
  console.log("Name: " + emp.name)

  /* 
    - Type Guard "in"
    - "in" is javascript keyword which allow us to check if this
    - exist as a property on employee 
    - when working with classes we can use
    - another type of type guard i.e ->  instanceof 
*/
  if ("privileges" in emp) {
    console.log("Previleges :", emp.privileges)
  }

  if ("startDate" in emp) {
    console.log("Start Date :", emp.startDate)
  }
}
printEmployeeInformation(elUn)
/* 
- Name: knight 
- Previleges : ['front-end']
- Start Date : Wed Apr 20 2022 17:36:03 GMT+0530 (India Standard Time)
*/

// ------------------------------------------------------

/////////////
// classes //
/////////////
/* 
- When working with classes, you can also use another 
- type of type gaurd, and that would be the instance of
- type gaurd.
*/

class Car {
  drive() {
    console.log("Driving a car....")
  }
}

class Truck {
  drive() {
    console.log("Driving a truck....")
  }
  loadCargo(amount: number) {
    console.log("Loading a cargo..." + amount)
  }
}
/* classes are compiled to contructor function at runtime */

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()

  /*
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000)
  }  
  */

  /* 
  - instanceof is a normal operator built into vanilla javascript 
  - instance of can't be used with interface as interface are not compiled to any Js code and therefore we can't use them at runtime 
  */
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1)
useVehicle(v2)
