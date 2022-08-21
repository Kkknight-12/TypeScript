const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
};

// adding an annotation turn arry in to the tuple
// as it will prevernt the reordering or arry
// const pepsi: [string, boolean, number] = ["brown", true, 40];

// better way to define annotation
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 30];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", true, 0];
