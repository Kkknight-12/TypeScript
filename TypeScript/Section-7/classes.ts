// parent class
class Vehicle {
    drive(): void {
        console.log("chugga chugga");
    }
    honk(): void {
        console.log("beep");
    }
}

// const vehicle = new Vehicle();
// vehicle.drive(); // chugga chugga
// vehicle.honk(); // beep

// child class
/* 
a child class carry on all the methods of parents class */
class Car extends Vehicle {
    // we can overwrite the parent methods
    drive(): void {
        console.log("vroom vromm");
    }
}

// creating instance of Car
const car = new Car();
car.drive(); // chugga chugga
car.honk(); // beep
