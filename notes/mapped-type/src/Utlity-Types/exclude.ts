/* Exclude takes all the properties from a type and removes the specified
 one,  */

interface AnimalExtract {
  name: string;
  gender: string;
  sound: string;
}
interface HumanExtract {
  name: string;
  gender: string;
  nickname: string;
}
/*
 * Exclude key name sound
 * so we take all keys from AnimalExtract type excluding sound
 *  */
type LivingThingExtract = Exclude<keyof AnimalExtract, "sound">;
// Initial type: "name" | "gender"
function sayMyNameExtract(who: Record<LivingThingExtract, string>): void {
  console.log(who.name + " is of type " + who.gender);
}
const animalExtract: AnimalExtract = {
  name: "Lion",
  sound: "Rawwwhhh",
  gender: "Male",
};
const humanExtract: HumanExtract = {
  name: "Jacob",
  nickname: "Jaco-bee",
  gender: "Boy",
};
// number key are not allowed, it takes only string -> Record
// const animalExtractMakeSound: AnimalExtract = {
//   age: 365
// };
sayMyNameExtract(animalExtract); // Lion is of type Male
sayMyNameExtract(humanExtract); // Jacob is of type Boy
// sayMyNameExtract(animalExtractMakeSound);

// -------------------------------------------------------------------------------

// https://www.educative.io/module/lesson/variables-and-types/N8rgAp1Q2vD
// Example 2
interface StrangeObj {
  foo: string;
  bar: number;
  1: string;
  42: number;
}

type MyExtract<T, U> = T extends U ? T : never;

function setStringProp<T, K extends MyExtract<keyof T, string>>(
  obj: T,
  key: K,
  value: T[K]
) {
  obj[key] = value;
}

declare const obj3: StrangeObj;
setStringProp(obj3, "bar", 1);
// setStringProp(obj3, 42, 1); // 🔴 Error!