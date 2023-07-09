interface MyType {
  // Type that has a single field
  id: number;
}

// an interface extending another interface
// any variable that will take this as its type must have
// fields from both MyType and AnotherType
interface AnotherType extends MyType {
  anotherId: number;
} // Another type that has all the field from MyType

//
// a generic function that extends MyType
// it must latest receive fields from MyType
// so will also accept parameter other than MyType
function genericFunction<T extends MyType>(p1: T) {
  console.log(p1); // {id: 1} | {id: 123}
} // A function that take a generic type that must at least have the fields of MyType

// Ways to put constrain on function call

// 1
// create variable and give type
// variable arg type is AnotherType,
// so it must have id and anotherId
// we can't add any other key
const arg: AnotherType = { id: 1, anotherId: 3 }; // Create an

//
genericFunction(arg); // This is legit  because AnotherType extend MyType, thus has all the required fields

// 2
// directly calling function
// if we call the function directly
// the function expect at least id key -> extends MyType
genericFunction({ id: 123 }); // This is legit as well since id is the only required field from MyType

// we can send extra keys if we are at least sending id which mandatory
genericFunction({ id: 123, id2: 99999 }); // This is legit because we have id (and more)

// Error if we don't send id
// genericFunction("send some string") // Argument of type 'string' is not assignable to parameter of type 'MyType