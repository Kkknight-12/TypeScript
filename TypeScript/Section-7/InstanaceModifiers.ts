/* 
public - This method can be called any where, any time

private - This method can only be called by other methods in this class

protected - This method can be called by other methods in this class, or by other methods in child classes
*/

// parent class
class VehicleI {
    // public drive(): void {
    //     console.log("chugga chugga");
    // }
    protected honk(): void {
        console.log("beep");
    }
}

class CarI extends VehicleI {
    // we can't overwrite modifier
    // of method of parent class ( drive method was public in parent class)
    private drive(): void {
        console.log("vroom vromm");
    }
    // private are accessible only within the class
    startDrivingProcess(): void {
        this.drive();
        // protected can be accessible within the class and in it's child component
        this.honk();
    }
}

// creating instance of Car
const carI = new CarI();
carI.startDrivingProcess();
/* 
vroom vromm
beep 
*/
