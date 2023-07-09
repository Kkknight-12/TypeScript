interface PersonAC {
  id: string;
  name: string;
  birthYear: number;
}

// Example 1
function getIds(persons: PersonAC[]) {
  return persons.map((person) => person.id);
}
console.log("getIds", getIds([{ id: "1212", name: "a", birthYear: 1200 }]));
// getIds ['1212']

// Example 2
function getIds2<T extends Record<"id", string>>(elements: T[]) {
  return elements.map((el) => el.id);
}

// getIds2([{}]) // Property 'id' is missing in type '{}' but required in type 'Record"id", string>'
// getIds2({})
// Type '{}' is missing the following properties from type 'Record<"id", string>[]': length, pop, push,
// concat, and 29 more.
console.log("getIds2 ", getIds2([{ id: "123", secId: "12312313" }])); // ['123']

// Example 3
// if we just want to have an object we can remove [] from parameter
function getIds3<T extends Record<"id", string>>(elements: T) {
  return elements.id;
}
console.log("getIds3 ", getIds3({ id: "123", secId: "12312313" })); // 123