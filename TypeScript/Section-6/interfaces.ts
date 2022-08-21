// Long Type Annotation
const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
};

const printVehicle = (vehicle: {
    name: string;
    year: number;
    broken: boolean;
}): void => {
    console.log(`Name ${vehicle.name}`);
    console.log(`Year ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
};
printVehicle(oldCivic);
/* 
This type of annotation canbe very long and will be harder to read
*/

///////////////
//Interface////
// using Interface to improve annotation

// when we create a interface we create a new type
// interface name start with a capital letter

interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const printNewVehicle = (vehicle: Vehicle): void => {
    console.log(`Name ${vehicle.name}`);
    console.log(`Year ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
};
// ad old Civic have the same property name and datatype so we can pass that as an argument
printNewVehicle(oldCivic);
