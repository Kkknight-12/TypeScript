/* mapped type Omit is the inverse of Pick. Omit takes everything except the member selected.
 * Omit is preferred only where only a few fields need to be removed  */

interface AnimalOM {
  age: number;
  name: string;

  maximumDeepness: number;

  numberOfLegs: number;
  canSwim: boolean;
  runningSpeed: number;
}

// Omit -> Second Parameter will remove three fields
function NotAFish(
  fishEntity: Omit<AnimalOM, "numberOfLegs" | "canSwim" | "runningSpeed">
) {
  console.log(fishEntity);
}

NotAFish({
  age: 1,
  name: "Clown Fish",
  maximumDeepness: 10,
});

// Pick -> passing Interface/Type T, take all keys mentioned in second
// parameter
// Exclude -> out of all keys of interface/Type T, exclude Type K
// so, we are picking everything after excluding mentioned keys
type CustomOmit<T, K> = Pick<T, Exclude<keyof T, K>>;

/*
{[P in keyof T extends K ? never : keyof T]: T[P]}
 * loop over all the keys of T which is P,
 * if the P is key which is mentioned in K then return nothing
 * else return Key P
 * we return value => T[P] of the filtered T*/