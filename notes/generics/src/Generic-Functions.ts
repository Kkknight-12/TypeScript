interface Person {
  name: string;
  age: number;
}
const persons: Person[] = [{ name: "John", age: 35 }];

// placeholder for arguments -> TElement , TResult
//           Person,  string
function map<TElement, TResult>(
  items: TElement[], // Person [ ]
  mappingFunction: (item: TElement) => TResult // string
): TResult[] {
  // return array of TResult
  const results = [];
  for (let item of items) {
    results.push(mappingFunction(item)); // call second parameter function
  }
  return results;
}

// passing in array of object persons, and a function which return name key
//                Person[]                       Person
const names = map(persons, (person) => person.name);
console.log("names", names);
/*
 * map<Person, string>(
 *   items: Person[],
 *   mappingFunction: (item: Person) => string
 * ): string[]
 */