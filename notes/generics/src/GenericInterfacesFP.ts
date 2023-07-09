interface FormField<T> {
  value?: T;
  defaultValue: T;
  isValid: boolean;
}

// Very specialized. Only works with `FormField<string>`.
// the data type of the key -> value and defaultValue must be string
function getStringFieldValue(field: FormField<string>): string {
  if (!field.isValid || field.value === undefined) {
    // Thanks to the specialization, the compiler knows the exact type of `field.defaultValue`.
    return field.defaultValue.toLowerCase();
  }
  return field.value;
}

// Generic. Can be called with any `FormField`.
// here the data type of key -> value and defaultValue can be anything
function getFieldValue<T>(field: FormField<T>): T {
  if (!field.isValid || field.value === undefined) {
    // On the other hand, we don't know anything about the type of `field.defaultValue`.
    return field.defaultValue;
  }
  return field.value;
}

const formObj = {
  value: "asas",
  defaultValue: "AAA-a",
  isValid: false,
};

const formObj2 = {
  value: 66,
  defaultValue: 8,
  isValid: false,
};

const formObjDup = {
  value: "asas",
  isValid: false,
  extraFields: "extra value",
};

// const result = getStringFieldValue(formObjDup); // Property 'defaultValue' is missing
// const result = getStringFieldValue(formObj2); // Type 'number' is not
// assignable to type 'string'
const result = getStringFieldValue(formObj);
console.log(result);

// const result2 = getFieldValue(formObjDup); // Property 'defaultValue' is missing
const result2 = getFieldValue(formObj); // Property 'defaultValue' is missing
const result3 = getFieldValue(formObj2); // Property 'defaultValue' is
// missing
console.log(typeof result2); // string
console.log(typeof result3); // number