// type Nominal<T, K extends string> = T & { __brand: K };
//
// type NonEmptyString = Nominal<string, "nonempty">;
//
// const isNonEmpty = (s: string): s is NonEmptyString => s.length > 0;
// console.log(isNonEmpty("knight"));
//
// const fooo = (s: NonEmptyString) => console.log(s);
//
// const bar = "abcd";
// // fooo(bar);
// // error: Argument of type 'string' is not assignable to parameter of type 'NonEmptyString'.
//
// if (isNonEmpty(bar)) {
//   fooo(bar); // OK
// }
//
// interface Cat {
//   numberOfLives: number;
// }
// interface Dog {
//   isAGoodBoy: boolean;
// }
//
// function isCat(animal: Cat | Dog): animal is Cat {
//   return (animal as Cat).numberOfLives !== undefined;
// }
//
// console.log(isCat({ numberOfLives: 2 }));