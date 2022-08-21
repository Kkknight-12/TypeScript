// here we just want a function
interface Report {
    summary(): string; // can add function inside interface
}

const oldCiviic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};
const dri = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    },
};
const printSu = (item: Report): void => {
    console.log(item.summary());
};
// ad old Civic have the same property name and datatype so we can pass that as an argument
printSu(oldCiviic); // Name: civic
printSu(dri); // My drink has 40 grams of sugar
