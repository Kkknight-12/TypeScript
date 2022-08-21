import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const sorter = new Sorter(numbersCollection)
sorter.sort() // ?
console.log(numbersCollection.data)

// type Reserve = {
// (from: Date, to: Date, destination: string): Reservation
//  (from: Date, destination: string): Reservation
// }

// let reserve: Reserve = (
//   from: Date,
//   toOrDestination: Date | string,
//   destination?: string
// ) => {
//   if (toOrDestination instanceof Date && destination !== undefined) {
//     // Book a one-way trip
//   } else if (typeof toOrDestination === "string") {
//     // Book a round trip
//   }
// };
type GETID = {
  (): number
  (qty: number): number[]
}
// function getId(): number
// function getId(qty: number): number[]

/* 
Error
Type '(qty?: number | undefined) => number[] | 10' 
is not assignable to type 'GETID' 
*/
// let getId: GETID = (qty?: number) => {
//   if (!qty) return 10

//   const arr = []
//   for (let i = 0; i < qty; i++) {
//     arr.push(10)
//   }
//   return arr
// }

// console.log(getId())
// console.log(getId(3))

function getId(): number
function getId(qty?: number): number[]
function getId(qty?: number): unknown {
  if (!qty) return 10

  const arr = []
  for (let i = 0; i < qty; i++) {
    arr.push(10)
  }
  return arr
}
console.log(getId())
console.log(getId(3))
