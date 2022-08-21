// parent class
class VehicleF {
    // color: string ;

    // constructor(color: string) {
    //     this.color = color;
    // }

    // or
    constructor(public color: string) {}
}

const vehicleF = new VehicleF("blue");
console.log(vehicleF.color);
