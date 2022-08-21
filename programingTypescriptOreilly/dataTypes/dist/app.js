"use strict";
let a;
a = 5;
console.log(a);
a = "as";
console.log(a);
a = ["sdasd"];
console.log(a);
let b = 999;
const c = a + b;
console.log(c);
let aU = 30;
console.log("aU", aU);
let bU = aU === 123;
console.log("bU", bU);
if (typeof aU === "number") {
    let dU = a + 10;
    console.log("dU", dU);
}
let aB = true;
let bB;
bB = true;
console.log("bB", bB);
const cB = true;
console.log("cB type ->", typeof cB);
let aN = 1234;
let bN = Infinity * 0.1;
let dN = aN < bN;
const eN = 999998;
let aBI = 1234n;
const bBI = 1231n;
var cBI = aBI + bBI;
console.log("cBI ->", cBI);
let dBI = a < 12345;
console.log("dBI ->", dBI);
let fBI = 100n;
let gBI = 100n;
let aS = "lillu";
let bS = "billu";
let cS = aS + " " + bS;
console.log("cS", cS);
let eS = "aaaa";
let fS = "jhon";
let aObj = { b: "x" };
let aObj2 = { b: "x" };
console.log(aObj2.b);
let cObj = {
    c: {
        d: "f",
    },
};
console.log(cObj.c.d);
let aObj3 = {
    b: 12,
};
const aObj33 = {
    b: 12,
};
console.log("aObj33 -> ", aObj33.b);
let cObj3 = {
    firstName: "jhon",
    lastName: "watson",
};
console.log("firstName", cObj3.firstName);
class PersonCl {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
cObj3 = new PersonCl("matt", "smith");
let aObj4;
aObj4 = { b: 1 };
aObj4 = { b: 1, c: undefined };
aObj4 = { b: 2, 10: true };
aObj4 = { b: 1, 10: true, 20: false };
//# sourceMappingURL=app.js.map