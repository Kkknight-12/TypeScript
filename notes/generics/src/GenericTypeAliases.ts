/*
 * Generic type alias syntax
 * we can pass types into type alias using following syntax
 *
 * type TypeName <T1, T2,...> = {
 *
 *  }
 *
 *
 * Generic type alias example
 * We can use a type alias to build the generic form we built using an interface in
 * Generic-Interface.ts.
 *
 * */

type FormTA<T> = {
  errors: {
    [P in keyof T]?: string;
  };
  values: T;
};