/* https://www.educative.io/module/lesson/variables-and-types/R83vG5MoDQO */

interface PersonC {
  name: string;
  dateCreated: Date;
}
interface AnimalC {
  name: string;
}

// Create a generic Type that add modifiedDate only if dateCreated is present
// type Modified<T> = T extends { dateCreated: Date }
//   ? T & { modifiedDate: Date }
//   : boolean;
//
// const p: PersonC = { name: "Pat", dateCreated: new Date() };
// const a: AnimalC = { name: "Jack" };
//
//
// // T & { modifiedDate: Date }
// // ModifiedDate present because "Person" has dateCreated
// const p2: Modified<PersonC> = { ...p, modifiedDate: new Date() };
// console.log(p2);

/**
 * p2:{
 * dateCreated:      ,
 * modifiedDate:       ,
 * name:
 *  } */

// Following line do not transpile because Animal does not have dateCreated
// const a2: Modified<AnimalC> = { ...p, modifiedDate: new Date() };
// console.log("a2", a2);

// boolean;
// const a3: Modified<AnimalC> = false;
// console.log("a3", a3); // false

// ------------------------------------------------------------------------------

/* https://javascript.plainenglish.io/use-typescript-conditional-types-like-a-pro-7baea0ad05c5
 *  https://www.notion.so/Conditional-Types-e97f80355c794b69b34c56caa337fffe
 * */

/**
 * **********DISTRIBUTED CONDITIONAL TYPE*************
 *
 * if the type being checked is a **“naked” type parameter**, i.e. *NOT WRAPPED
 *  By An Array, Tuple, Promise*, etc., the conditional type is called a
 * distributed conditional type.
 *
 * when the incoming checked type is a **union type**, it will be broken into
 * multiple branches during the operation.
 *
 * T extends U ? X : Y
 * T => A | B | C
 * A | B | C extends U ? X : Y  =>
 * (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)}
 *
 * if the type parameter T is wrapped in a conditional type and the conditional
 * type is not a distributed conditional type, so it will not be broken into
 * branches during the operation. */
type Naked<T> = T extends boolean ? "Y" : "N";
type T00 = Naked<number | boolean>; // Initial type: "N" | "Y"

// will not be broken down into branches as the T is wrapped in Array
type WrappedArray<T> = T[] extends boolean[] ? "Y" : "N";
type T111 = WrappedArray<number | boolean[]>; // Initial type: "N"

// ------------------------------------------------------------------------------

/**
 * [K in keyof T] -> loop over the object
 * T[K] extends Function ? K -> if the key is a function then return it
 * never -> else return nothing
 * [keyof T]->  from the filtered object return its keys
 * [keyof T] is array indexing in Ts
 * https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 * */
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

interface UserC {
  id: number;
  name: string;
  age: number;
  updateName(newName: string): void;
}
//
type T5FN = FunctionPropertyNames<UserC>; // "updateName"
type T6FN = FunctionProperties<UserC>; // { updateName: (newName: string) =>
// void; }
type T7FN = NonFunctionPropertyNames<UserC>; // "id" | "name" | "age"
type T8FN = NonFunctionProperties<UserC>; // { id: number; name: string; age:
// number; }

// ----------------------------------------------------------------------------------
/* https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c */
interface Person {
  id: number;
  name: string;
  lastName: string;
  load: () => Promise<Person>;
}

/**
 * map over the given object and check if the condition passed is satisfied
 * than return that key else return *"will taking nothing else"*
 * */
type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition
    ? Key
    : "will taking nothing else";
};

/**
 * passing Person interface and condition string
 * name and lastName are string so they can have string
 * value
 * id and load don't have string value in Person interface
 * so they must have value === "will taking nothing else"
 * */
type filter = FilterFlags<Person, string>;
let printFilter: filter = {
  name: "name",
  lastName: "lastName",
  id: "will taking nothing else",
  load: "will taking nothing else",
};

// console.log(printFilter);
type unionfilterkeys = filter[keyof filter]; // "lastName" | "name"

let printfilterkeysLN: unionfilterkeys = "lastName";
let printfilterkeysFN: unionfilterkeys = "name";