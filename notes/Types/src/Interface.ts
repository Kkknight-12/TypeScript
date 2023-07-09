/*
 * Interface allows a new type to be created with a name and structure. The
 * structure includes all the properties and methods that the type has without
 * any implementation.
 *
 * interface TypeName {
  propertyName: PropertyType;
  methodName: (paramName: ParamType) => MethodReturnType
}*/

// Example 1
// TODO - create the ButtonProps type using an interface
interface ButtonProps {
  text: string;
  onClick: VoidFunction;
}
const BuyButton: ButtonProps = {
  text: "Buy",
  onClick: () => console.log("Buy"),
};

// /////////////////////////////
// Optional interface members //
// /////////////////////////////
interface OptionalInterfaceMembers {
  optionalProperty?: string;
  optionalMethod?: (paramName: string) => Boolean;
}

const OptionalVariable: OptionalInterfaceMembers = {
  optionalProperty: "something",
};

// //////////////////////
// Readonly properties //
// //////////////////////
interface ReadOnlyProp {
  readonly propertyName: string;
}

let readonlyVar: ReadOnlyProp = {
  propertyName: "something",
};
// readonlyVar.propertyName = 'new' // Attempt to assign to const or readonly variable

const BuyButton2: ButtonProps = {
  text: "Buy",
  onClick: () => console.log("Buy"),
};
BuyButton2.text = "＄20"; // is this okay?

// ////////////////////////////////
// Mutate an array with readonly //
// ////////////////////////////////
/*
 * Putting the readonly keyword before an array or object property name only
 * ensures its reference won’t change. So, we can mutate the array but we
 * can’t set the scores property to a different array. */
interface Result {
  readonly name: string;
  readonly scores: number[];
}
let billScores: Result = {
  name: "Bill",
  scores: [90, 65, 80],
};
billScores.scores.push(70);

// we can put an additional readonly modifier before the array type
interface ImmutableResult {
  readonly name: string;
  readonly scores: readonly number[];
}
let tomScores: ImmutableResult = {
  name: "Tom",
  scores: [50, 95, 80],
};
// tomScores.scores.push(70); // Property 'push' does not exist on type 'readonly number[]'

// //////////////////////
// Extending Interface //
// //////////////////////
/* Interfaces can extend other interfaces so that they inherit all the
 properties and methods from the interface being extended.
 We do this using the extends keyword after the new interface name and
 before the interface name that is being extended: */
interface ColoredButtonProps extends ButtonProps {
  color: string;
}

const GreenBuyButton: ColoredButtonProps = {
  color: "Green", // ColoredButtonProps
  text: "Buy", // ButtonProps
  onClick: () => console.log("Buy"), // ButtonProps
};