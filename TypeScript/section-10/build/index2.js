"use strict";
class Sorter {
    //   collection: number[];
    //   constructor(collection: number[]) {
    //     this.collection = collection;
    //   }
    // using modifier inside of constructor argument
    constructor(collection) {
        this.collection = collection;
    }
    // creating a sort method
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // all of this only works if collection is array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // if this collection is a string | number | boolean | symbol
                if (typeof this.collection === "string") {
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
