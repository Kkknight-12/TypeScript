interface AnimalRE {
  age: number;
  name: string;

  maximumDeepness: number;

  numberOfLegs: number;
  canSwim: boolean;
  runningSpeed: number;
}
interface HumanRE {
  age: number;
  name: string;
}

// Create a Type from the intersection of Animal and HUman that will be of type string
type LivingThingRE = Record<Extract<keyof AnimalRE, keyof HumanRE>, string>;
const creatureRE: LivingThingRE = {
  age: "1",
  name: "John",
};
console.log(creatureRE);