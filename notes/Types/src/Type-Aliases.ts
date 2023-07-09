/* Naming a Type is type aliasing
 * Def -> A type alias allows you to provide a new name for an existing data type into
 * your program. After a type alias is declared, the aliased name can be used instead of
 * the existing type throughout the program
 * */
type Score = { name: string; score: number };

const bobScore: Score = { name: "Bob", score: 80 };
const janeScore: Score = { name: "Jane", score: 90 };

// syntax
// type NewName = ExistingType;