/*
* type constructors are functions that take some types and return other types.
*
* There are a few other interesting type constructors built into TypeScript.
*
* For example,
*
* NonNullable<T> is a function that takes a type and returns the same
* type with null and undefined removed from the domain.
*
* Partial takes a type and returns a type with the same properties as the
* source,but each one optional.

* ReturnType takes a function type and returns the return type of that
* function. */

//
type X1 = NonNullable<string | undefined>; // X1 = string

const varX1: X1 = "something";
// const var2X1: X1 = 9; // Type 'number' is not assignable to type 'string'
// const var3X1: X1 = null; // Type 'null' is not assignable to type 'string'
// const var4X1: X1 = undefined; // Type 'undefined' is not assignable to type 'string'

// now the object passed to Partial will have keys optional
type X2 = Partial<{ name: string; age: number }>; // X2 = { name?: string; age?: number;}

const objX2: X2 = {
  name: "sss",
};

//
function square(x: number): number {
  return x * x;
}

// now what ever the return type of function square is we can store that in
// type X3
type X3 = ReturnType<typeof square>; // X3 = number

/* The key takeaway from this lesson is that generic interfaces are very much like
 * functions that transform types. */