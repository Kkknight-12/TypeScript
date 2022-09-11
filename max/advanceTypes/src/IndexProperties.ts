// Index Properties
/* 
- ErrorInteface is an object but should
- be flexible regarding what it holds 
- the object only hholds properties for 
- inputs where we have an error
- so that we can also loop through 
- this object with a for in loop to 
- read all the errors we got
- so we are clear about the value type of the property
- but we dont know in advance how many properties
- I'll have and which name the properties will have 
- for such scenario we use index type
- to define index type we use "[ ]"
- property value can't be boolean */

interface ErrorContainer {
  /* 
    - i am saying here
    - i dont know the proerty name
    - i dont know the property count
    - i just know that every property which
    - is added to this object, which is based on the
    - arrow container must have a property name which 
    - can be interpreted as a string
    - and the value for the property must also be a string
    */
  [props: string]: string

  // can also add properties which are sure about
  id: string
  // but can't add number
}

const errorBag: ErrorContainer = {
  id: "007",
  email: "Not a valid email",
  username: "Must start with a capital character!",
}
