"use strict";
function greet(name) {
    return "hello" + name;
}
let greetExp = function (name) {
    return "hello" + name;
};
let greetArr = (name) => "hello" + name;
let greetFuncCons = new Function("name", 'return "hello " + name');
function log(message, userId) {
    console.log(message, userId || "Not signed in");
}
log("Page loaded");
log("User signed in", "d234q3d");
console.log("--------Optional Parameters Ends----------");
function log2(message, userId = "Not signed in") {
    console.log(message, userId);
}
log2("Page loaded again");
log2("User signed in", "Jhon Wick");
console.log("--------Default Parameters Ends----------");
function log3(message, context) {
    console.log(message, context.userId);
}
log3("Heeyyy", { userId: "Wick123" });
log3("Heeyyy", { appId: "WickaApp123" });
console.log("--------type check Ends----------");
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3));
console.log("--------rest parameter Ends----------");
function doSomething(f) {
    return f(1, 2, 3);
}
const tr = doSomething((...arr) => arr.map((r) => r + 1));
console.log(tr);
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
console.log(add.apply(null, [10, 20]));
console.log(add.call(null, 10, 20));
console.log(add.bind(null, 10, 20)());
console.log("-------- call, apply, bind Ends----------");
let x = {
    a() {
        return this;
    },
    ts: "Ts is fun",
};
console.log(x.a());
let a = x.a;
console.log(a());
function fancyDate2() {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}
console.log("fancyDate2", fancyDate2.call(new Date()));
console.log("-------- this Ends----------");
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let fibonacciGenerator = createFibonacciGenerator();
console.log("fibonacciGenerator", fibonacciGenerator.next());
console.log("fibonacciGenerator", fibonacciGenerator.next());
console.log("fibonacciGenerator", fibonacciGenerator.next());
function* createNumbers() {
    let n = 10;
    while (1) {
        yield n++;
    }
}
let numbers = createNumbers();
console.log(numbers.next());
console.log(numbers.next());
console.log("-------- generator function Ends----------");
let numbersI = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    },
    name: "an object with iterator",
};
for (let a of numbersI) {
    console.log(a);
}
let allNumbers = [...numbersI];
console.log("allNumbers", allNumbers);
console.log(numbersI.name);
console.log("-------- Iterators Ends----------");
let Log = (message, userId = "Not signed in ") => {
    console.log(message, userId);
};
Log("heyyyyaaaa", "IooA123");
function times(f, n) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}
times((n) => console.log(n), 4);
let reserve = (from, toOrDestination, destination) => {
    console.log("RRR", from);
    if (toOrDestination instanceof Date && destination !== undefined) {
        console.log("one-way trip");
    }
    else if (typeof toOrDestination === "string") {
        console.log("round trip");
    }
};
reserve(new Date(), "goa");
reserve(new Date(), new Date(), "goa");
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        console.log("overload 2 running");
        return new Date(y, mOrTimestamp, d);
    }
    else {
        console.log("overload 1 running");
        return new Date(mOrTimestamp);
    }
}
console.log(makeDate(12345678));
console.log(makeDate(5, 5, 5));
function getMonth(date) {
    if (date instanceof Date) {
        return date.getMonth();
    }
    return;
}
function getMonths(date) {
    return date.getMonth();
}
const filter = function (array, f) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};
console.log("filter", filter([1, 2, 3, 4], (_) => _ < 3));
const filter3 = function (array, f) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};
console.log("filter numbers", filter3([1, 2, 3, 4], (_) => _ < 3));
console.log("filter string", filter3(["a", "b", "c"], (_) => _ !== "b"));
let names = [
    { firstName: "beth" },
    { firstName: "caitlyn" },
    { firstName: "xin" },
];
console.log("filter name start with b", filter3(names, (_) => _.firstName.startsWith("b")));
function map(array, f) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (f(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
const arr1 = [1, 2, 3, 4, 5];
console.log(map(arr1, (item) => item > 2));
const arr2 = ["a", "b", "c"];
console.log(map(arr2, (item) => item !== "c"));
console.log(map(arr2, (item) => item !== "a"));
let promise1 = new Promise((resolve) => resolve(45));
promise1.then((result) => console.log(45 * result));
let myEvent = {
    target: document.querySelector("#mybutton"),
    type: "click",
};
//# sourceMappingURL=app.js.map