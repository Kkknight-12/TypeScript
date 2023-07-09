/* Map */
interface Person {
  id: number;
  name: string;
}
/* Map is like a object
 * set keyword is used to add new key: value pair to it */

let myMap = new Map<number, Person>(); // key is of type number and value is
// of type {id: number, name: string}

myMap.set(1, { id: 1, name: "First" });
myMap.set(10, { id: 10, name: "Tenth" });

// .has method is used to check if the key exist on Map object
// .get is used to access that key
if (myMap.has(10)) {
  console.log(myMap.get(10)!.name); // using ! to say that we know that the
  // key exist on myMap
}

// ////////////////////////////
// ! is called band operator //
// ////////////////////////////

/*
In the Map example, we are using the bang operator !. This operator is useful when
indicating to TypeScript that it shouldn’t throw an error. The example was safe because
we are looking to see if the value exists with has. */
if (myMap.has(10)) {
  console.log(myMap.get(10)!.name);
}
/* Next, we are accessing the value. Because the Map has the object and no undefined
value can be stored, since we defined the type to be Map<Person>, we know that it is
possible to access the property name without getting a null reference exception. */