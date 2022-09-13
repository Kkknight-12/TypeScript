/* Pick mapped type allows you to select a subset of a type’s properties in order to
 * create a dynamic type. */

interface Animal {
  age: number;
  name: string;

  maximumDeepness: number;

  numberOfLegs: number;
  canSwim: boolean;
  runningSpeed: number;
}

// Example 1
function buyAFish(
  fishEntity: Pick<Animal, "age" | "name" | "maximumDeepness">
) {
  console.log(fishEntity);
}

buyAFish({
  age: 1,
  name: "Clown Fish",
  maximumDeepness: 10,
  // you can only assign "age" | "name" | "maximumDeepness"
  // canSwim: true;
}); // {age: 1, name: 'Clown Fish', maximumDeepness: 10}

/* It is using keyof under the hood. It extracts all six fields of Animal and
 ensure only these strings mentioned in second parameter can be used*/

// ---------------------------------------------------------------------------------

//
/* The Pick mapped type is a quick way to extract a portion of an existing type. It is
important to keep in mind that the passed object’s type is picked up, but the object
itself is not changed.

In the following code, a complete Animal is passed down. However, TypeScript compiles fine,
because it respects the return type requiring the three members. But, the output will contain
every field. The reason is that TypeScript blocks in design type to the appropriate three
members picked in the Pick, but DOES NOT PERFORM RUNTIME MANIPULATION on the
 object. */

// This Approach --> SHOULD NOT BE FOLLOWED
// Example 2
function transformAnAnimationToAFish(
  // @ts-ignore
  fishEntity: Animal
): Pick<Animal, "age" | "name" | "maximumDeepness"> {
  return fishEntity;
  // return { age: 1, name: "name", maximumDeepness: 123, otherStuff: "no too fast" };
}

console.log(
  transformAnAnimationToAFish({
    age: 1,
    name: "Clown Fish",
    maximumDeepness: 10,
    numberOfLegs: 0,
    canSwim: true,
    runningSpeed: 0,
  })
);

/* A more robust piece of code would create a new object by selecting the three values.
 Commenting out line -> return fishEntity; demonstrates that you can build
 an object, but not with other members than the three in the return type of
 the function, thus TypeScript is guiding the developer to avoid a misstep.

Comment out line -> return fishEntity; and adjust return by REMOVING the
 member that is not specified in the  return type ->  (otherStuff). You will see
  that the console prints the three expected members. */

function transformAnAnimationToAFish2(
  // @ts-ignore
  fishEntity: Animal
): Pick<Animal, "age" | "name" | "maximumDeepness"> {
  // return fishEntity;
  return {
    age: 1,
    name: "name",
    maximumDeepness: 123,
    // other can't pass anything other than age, name, maximumDeepness
    // otherStuff: "no too fast",
  };
}

console.log(
  transformAnAnimationToAFish2({
    age: 1,
    name: "Clown Fish",
    maximumDeepness: 10,
    numberOfLegs: 0,
    canSwim: true,
    runningSpeed: 0,
  })
);