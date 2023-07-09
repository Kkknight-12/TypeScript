type T1 = { x: string };
type T2 = { y: number };
type T3 = { z: boolean };
type IntersectType1 = T1 & T2 & T3;
type IntersectType2 = T1 & T2;
type IntersectType3 = T3 & T1;

// const inter1: T1 = { x: "x1", y: 2 }; // Won't compile: y does not exist in T1
const inter2: T1 & T2 = { x: "x1", y: 2 }; // Compile
const inter3: IntersectType3 = { x: "x1", z: false }; // Compile

// function intersectGeneric<TT1, TT2>(t1: TT1, t2: TT2): TT1 & TT2 {
//   const returnValue = <TT1 & TT2>{};
//   for (let index in t1) {
//     (returnValue as TT1)[index] = t1[index];
//   }
//   for (let index in t2) {
//     (returnValue as TT2)[index] = t2[index];
//   }
//   return returnValue;
// }
//
// type obj1T = {
//   [propName: string]: string;
// };
// type obj2T = {
//   phone: number;
//   address: string;
// };
//
// let obj1: obj1T = {
//   name: "knight",
//   work: "dev",
// };
// let obj2: obj2T = {
//   phone: 1234,
//   address: "someplace",
// };
// console.log(intersectGeneric<obj1T, obj2T>(obj1, obj2));

function intersectGeneric<TT1, TT2>(t1: TT1, t2: TT2): TT1 & TT2 {
  const returnValue = <TT1 & TT2>{};
  for (let index in t1) {
    (returnValue as TT1)[index] = t1[index];
  }
  for (let index in t2) {
    (returnValue as TT2)[index] = t2[index];
  }
  return returnValue;
}

type obj1T = {
  // index signature
  [propName: string]: string;
};
type obj2T = {
  phone: number;
  address: string;
};

let obj1: obj1T = {
  name: "knight",
  work: "dev",
};
let obj2: obj2T = {
  phone: 1234,
  address: "someplace",
};
console.log(intersectGeneric<obj1T, obj2T>(obj1, obj2));
/*
address: "someplace"
name: "knight"
phone: 1234
work: "dev" */

const returnValue: obj1T = {};