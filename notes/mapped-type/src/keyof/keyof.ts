// https://blog.devgenius.io/how-to-use-the-keyof-type-operator-in-typescript-6d5e0ea6740f

/* keyof
 * keyof type operator takes an object type and create a union type -> ( | )
 * of its key.
 *  */

type User = {
  name: string;
  age: number;
  // adding new key here will be reflected in type UserKey
};

// we create a union type of keys of User type using keyof type operator
type UserKey = keyof User;
// UserKey -> "name" | "age"

// ------------------------------------------------------------------------

// Example 1
// creating array of users, each with a User Type
const users: User[] = [
  {
    name: "Chadda Saab",
    age: 91,
  },
  {
    name: "Singh Saab",
    age: 71,
  },
];

/*
* - T → we are expecting to receive an object.
- K → K will be keys of T or we can say K can only be assigned  keys of T object.
- getData function take two parameter
  - 1 → array of Object which will become T
  - 2 → any key of  the parameter 1 object
*  */
function getData<T, K extends keyof T>(dataList: T[], dataType: K): T[K][] {
  console.log("dataList", dataList);
  //  [ {name: 'Chadda Saab', age: 91}
  //    ,{name: 'Singh Saab', age: 71} ]
  console.log("dataType", dataType); // age
  // we will iterate over the array of object and return key which are
  // getting in parameter
  return dataList.map((data: T): T[K] => data[dataType]);
}

console.log(getData(users, "age")); // [91,71]
/*
 * to address the key it should be wrapped in quotes
 * let user_one = {name: 'Singh Saab', age: 71}
 * user_one['age'] => 71
 *  */

// ------------------------------------------------------------------------
// https://javascript.plainenglish.io/typescript-generics-explained-with-practical-examples-ff9865bc8f4a

// Example 2
// type User2 will be an object which
// will have key name of type string
// and key age of type number
type User2 = { name: string; age: number };
// variable user will be of type User2 but array of User2
const user2: User2[] = [
  { name: "Aman Lal", age: 300 },
  { name: "Champak Lal", age: 2 },
];

function filterArrayByValue<T, K extends keyof T>(
  items: T[], // type array
  propertyName: K, // type K which is key from object T
  // valueToFilter: string, type string
  valueToFilter: T[K] // value of object T
): T[] {
  // iterate over the Items array of object and only return array of objects
  // with property name is equal to value send in parameter => propertyName
  // and valueToFilter.
  return items.filter(
    (item: T): Boolean => item[propertyName] === valueToFilter
  );
}

console.log(filterArrayByValue(user2, "name", "Champak Lal"));
// [  {name: 'Champak Lal', age: 2} ]