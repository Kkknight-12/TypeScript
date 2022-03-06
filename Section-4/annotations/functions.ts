//   we take in numbers as argument
//                               : we return number
const add = (a: number, b: number): number => {
    return a + b;
};

// type inference on return value
const sub = (a: number, b: number) => {
    return a - b;
};

// but we should always provide return value
const mult = (a: number, b: number) => {
    // forgot to provide return
    a * b;
};
