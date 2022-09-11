// https://blog.logrocket.com/how-to-use-keyof-operator-typescript/#using-keyof-with-typescript-generics

/* A common use for the keyof operator is with mapped types, which transform
 existing types to new types by iterating through keys, often via the keyof operator.
  */
// ---------------------------------------------------------------------

// Example 1
// [Property in keyof-and-mapped T] => iterate over properties of type T,
// square bracket is index signature syntax,
// : boolean => and change there type to boolean
type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};

// use the OptionsFlags
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
/*
type FeatureOptions = {
  darkMode: boolean;
  newUserProfile: boolean;
 }
*/

// ---------------------------------------------------------------------

// /////////////////////////////////
// keyof conditional mapped types //
// /////////////////////////////////

// iterate over type T and check
// T[Property] extends Function -> if the property of type function then don't
// do anything,
// if not then change it to boolean
// Example 2
type OptionsFlagsF<T> = {
  [Property in keyof T]: T[Property] extends Function ? T[Property] : boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
  userManagement: string;
  resetPassword: string;
};

type FeatureOptionsF = OptionsFlagsF<Features>;
/**
 * type FeatureOptions = {
    darkMode: () => void;
    newUserProfile: () => void;
    userManagement: boolean;
    resetPassword: boolean;
} */

// ---------------------------------------------------------------------