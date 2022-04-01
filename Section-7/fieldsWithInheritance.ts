// parent class
class VehicleFie {
    // color: string ;
    // constructor(color: string) {
    //     this.color = color;
    // }

    // or
    constructor(public color: string) {}
    protected honk(): void {
        console.log("beep");
    }
}

const vehicleFie = new VehicleFie("blue");
console.log(vehicleFie.color); // blue

// adding constructor on child class
class CarFie extends VehicleFie {
    // not adding public to second argument as
    // it is refering to parent class property
    constructor(public wheels: number, color: string) {
        // passing on the color property to the parent class
        super(color);
    }
    private drive(): void {
        console.log("vroom");
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
        console.log(this.color); // red
    }
}

const carFie = new CarFie(4, "red");
carFie.startDrivingProcess();
