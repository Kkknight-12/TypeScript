/* Extract allows us to extract from a set of types the one that is common
 in another type.

 type OnlyArrayType = Extract< string | string[] | number[],  unknown[] >;

 *  code shows that the first generic argument has three variables
 * (string, string[], and number) and
 * the second generic type is unknown[] which means any kind of array.

 * Extract returns string[] | number[]as a type because they are the only
 * two that fulfill the conditions of an array.
 */

interface AnimalE {
  name: string; // common
  sound: string;
}
interface HumanE {
  name: string; // common
  nickname: string;
}

type LivingThing = Extract<keyof AnimalE, keyof HumanE>;
function sayMyName(who: Record<LivingThing, string>): void {
  console.log(who.name); // who: Record<"name", string>
  // console.log(who.sound); // Error -> Property 'sound' does not exist on type
  // 'Record"name", string>'.
}
const animal: AnimalE = { name: "Lion", sound: "Rawwwhhh" };
const human: HumanE = { name: "Jacob", nickname: "Jaco-bee" };
sayMyName(animal);
sayMyName(human);