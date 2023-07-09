/*
 * is usage
 * & usage
 * adding object with &
 * is still unclear */

// Example 1
type Nominal<T, K extends string> = T & { _brand: K };

type NonEmptyString = Nominal<string, "nonempty">;

const isNonEmpty = (s: string): s is NonEmptyString => s.length > 0;
// console.log("isNonEmpty", isNonEmpty("knight")); // isNonEmpty true

const fooo = (s: NonEmptyString) => console.log("FOO", s); // FOO abcd

const bar = "abcd";
// fooo(bar);
// error: Argument of type 'string' is not assignable to parameter of type 'NonEmptyString'.

if (isNonEmpty(bar)) {
  console.log("bar", bar); // bar "abcd"
  fooo(bar); //  "abcd" & {_brand: "nonempty"}
}

//
// Example 2
interface Cat {
  numberOfLives: number;
}
interface Dog {
  isAGoodBoy: boolean;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numberOfLives !== undefined;
}

console.log("isCat", isCat({ numberOfLives: 2 })); // true

// Example
type UserId = string & { __brand: "UserId" };
type ArticleId = string & { __brand: "ArticleId" };

// declare const userId: UserId;

const isUserId = (input: string): input is ArticleId => input.length > 0;

function getArticle(articleId: ArticleId) {
  return articleId;
}

const send = "asd--";
console.log(isUserId(send));

if (isUserId(send)) {
  // '"asd--" & { __brand: "ArticleId"; }'
  console.log(getArticle(send));
}