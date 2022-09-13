/*
https://javascript.plainenglish.io/typescript-generics-whats-with-the-angle-brackets-4e242c567269

 Generic programming is a style of computer programming in which
 algorithms are written in terms of types to be specified later
 */

// syntax
const syntaxFunc = <T>(arg: T) => arg;
console.log(syntaxFunc<number>(12)); // 12

/* as can be seen we are passing two different arguments in the above
 function call.
 - one within the parentheses
 - another withing < > brackets

 syntaxFunc(12), argument 12 within in the parentheses represents arg parameter.

 Similarly syntaxFunc<number>(12) argument number within angle bracket
 represents generic type parameter T.

 < > are used to pass the Generic type as Arguments
 */

// ///////////////////////////
// Practical Implementation //
// ///////////////////////////

/*
 export type AsyncGame = {
  item: Game
  fulfilled?: boolean
  loading?: boolean
  error?: boolean
}
export type AsyncGames = {
  items: Game[]
  fulfilled?: boolean
  loading?: boolean
  error?: boolean
}
export type AsyncUserGame = {
  item: UserGame
  fulfilled?: boolean
  loading?: boolean
  error?: boolean
}
export type AsyncUserGames = {
  items: UserGame[]
  fulfilled?: boolean
  loading?: boolean
  error?: boolean
}
// Game and UserGame are types we expect from different API
// responses.

It is very redundant. It is clear that they share a lot of commonalities in behavior.
*  */

// Let's create a generic type

type AsyncData<T> = {
  data: T;
  fulfilled?: boolean;
  loading?: boolean;
  error?: boolean;
};

type Game = { name: string; rating: string; launched: Date };
type User = { name: string; playStyle: string; genre: string };
type UserGame = { name: string; dateOfPurchase: Date; price: number };
type BrowseGame = {};

type AsyncGames = AsyncData<Game[]>;
type AsyncGame = AsyncData<Game | null>;
type AsyncUser = AsyncData<User | null>;
type AsyncUserGames = AsyncData<UserGame[]>;
type AsyncBrowseGames = AsyncData<BrowseGame[]>;

// in this function we are expecting an object to be AsyncGames which is not
// very dynamic in nature
// const games = (props: AsyncGames) => {
// const games = <T extends AsyncGames>(props: T) => {
function games<T extends AsyncGames>(props: T) {
  console.log(props);
}

games({
  data: [{ name: "asd", rating: "5", launched: new Date() }],
  fulfilled: false,
  loading: false,
  error: true,
});

// better option
// creating a generic function which can take any object
function game2<T>(props: T) {
  console.log(props);
}

game2<AsyncGames>({
  data: [{ name: "asd", rating: "5", launched: new Date() }],
  fulfilled: false,
  loading: false,
  error: true,
});