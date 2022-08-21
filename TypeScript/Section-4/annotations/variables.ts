///////////////
// Premitive //
//////////////

// this annotation is telling typescript that we are only going to assign number to the variable apple
//   variable : typeAnnotation
const apple: number = 5;

let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

////////////
// Object //
////////////
// built in objects
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false, true];

//classes
// classes are created with capital name
class Car {}

// variable car will refer to instance of car
let car: Car = new Car();

// Object literal
// let point = {
//     x: 10,
//     y: 20,
// };

// adding type annotaion to point
// in curly bracket we are going to define all the properties and there type
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};
console.log(point);

// Function
// different value we can take in ( arguments )
//                              different value we will return
//                                       after the equal to we have our function
// in this case we take number and return nothing
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// when to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }

// 2) when we declare a variable on one line
// and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean = false;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}

console.log(foundWord);

// 3) Variable whose type cannot be inferred correclty
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
console.log(numberAboveZero);
