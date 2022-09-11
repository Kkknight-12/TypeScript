// function overloading
type Combinationo = string | number
type Numericso = number | boolean

/* 
- type of universal will Number as that is the union between
- Combinable & Numeric
*/
type Universalo = Combinationo & Numericso

// overloading
function addo(a: number, b: number): number
function addo(a: string, b: string): string
function addo(a: number, b: string): string
function addo(a: string, b: number): string
function addo(a: Combinationo, b: Combinationo) {
  /* type gaurd -> here typeof is our typeGaurd */
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = addo("knight", " Luffy")
console.log(result.split(" ")) // can access string methods

const result2 = addo(1, " Luffy")
console.log(result2.split(" "))

const result3 = addo(1, 2)
// console.log(result3.split(" "))// string methods are not available
console.log(result3)
