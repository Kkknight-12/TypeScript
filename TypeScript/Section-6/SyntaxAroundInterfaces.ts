interface Vehiclee {
    name: string;
    year: Date; // can add complex data types also
    broken: boolean;
    summary(): string; // can add function inside interface
}

const oldCivicc = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const printNewVehiclee = (vehicle: Vehiclee): void => {
    console.log(vehicle.summary());
};
// ad old Civic have the same property name and datatype so we can pass that as an argument
printNewVehiclee(oldCivicc); // Name: civic
