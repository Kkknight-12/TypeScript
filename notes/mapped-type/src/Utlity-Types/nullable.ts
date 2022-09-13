/* Similar to the optional Partial<T>, you can create your own Nullable<T>
 * as there no built-in function in Ts for Nullable though there is for
 *  NonNullable.
 * STEPS
 * first step is to build it with plain interface or type
 * then adjust it by adapting with a generic parameter. <T>
 * */

// if we have the entity Cat, we might want to create a NullableCat type as
// a first step second step then would be to make it possible to null a Dog
// or any other object.

/*
 interface Cat {
  age: number;
  weight: number;
  numberOfKitty: number;
}

const cat1: Cat = { age:1, weight: 2, numberOfKitty: 0 };

// NullableCat1 have union with the null type. It allows to visualize the dual type.

interface NullableCat1 {
  age: number | null;
  weight: number | null;
  numberOfKitty: number | null;
}
 */

interface Cat {
  age: number;
  weight: number;
  numberOfKitty: number;
}

const Tom: Cat = { age: 1, weight: 2, numberOfKitty: 0 };

// nullable cat -> mapped type
// if the there is key then return the key else return Null
type NullableCat = { [P in keyof Cat]: Cat[P] | null };

// null can be assigned to any of the property now
// this case=> numberOfKitty
const Tommy: NullableCat = { age: 2, weight: 10, numberOfKitty: null };

console.log("Tommy", Tommy);
// {age: 2, weight: 10, numberOfKitty: null}

// Example 2
// in above example we have hardcoded Cat interface we can make the Nullable
// dynamic

type Nullable<T> = { [P in keyof T]: T[P] | null };

const cat2: Nullable<Cat> = { age: 1, weight: null, numberOfKitty: null };

console.log("CAT 2 ", cat2);
// {age: 1, weight: null, numberOfKitty: null}