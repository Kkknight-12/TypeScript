// here we just want a function
interface Reportable {
    summary(): string; // can add function inside interface
}

const oldCiviccc = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};
// ad old Civic have the same property name and datatype so we can pass that as an argument
printSummary(oldCiviccc); // Name: civic
