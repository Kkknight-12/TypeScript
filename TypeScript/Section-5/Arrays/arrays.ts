// const carMakers :string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// you need not to mention the annotation here
// you need to mention the annotation when you initialize an empty arrray
const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// help with inference when extracting values
const carMakers = ["ford", "toyota", "chevy"];
const car = carMakers[0];
console.log(car);

const myCar = carMakers.pop();
console.log(myCar);

// prevent incompatible values
// carMakers.push(100);

// help with map
const newCarMakers = carMakers.map((car: string): string => {
    // help with getting autocomplete related to string
    return car.toUpperCase();
});

console.log(newCarMakers); // [ 'FORD', 'TOYOTA' ]

// Flexible Types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
console.log(importantDates); // [ 2022-03-07T11:18:27.870Z, '2030-10-10', 2022-03-07T11:18:27.870Z ]

// can't insert any data type other than date or string
// importantDates.push(200);
