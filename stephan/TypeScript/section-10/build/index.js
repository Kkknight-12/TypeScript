"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort(); // ?
console.log(numbersCollection.data);
function getId(qty) {
    if (!qty)
        return 10;
    const arr = [];
    for (let i = 0; i < qty; i++) {
        arr.push(10);
    }
    return arr;
}
console.log(getId());
console.log(getId(3));
//# sourceMappingURL=index.js.map