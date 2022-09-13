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