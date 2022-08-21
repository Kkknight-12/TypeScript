//   we take in numbers as argument
//                               : we return number
const add = (a: number, b: number): number => {
    return a + b;
};

// type inference on return value
const sub = (a: number, b: number) => {
    return a - b;
};

// but we should always provide return value
const mult = (a: number, b: number) => {
    // forgot to provide return
    a * b;
};

// also works with anonymous function
const div = (a: number, b: number): number => {
    return a / b;
};

// void
const logger = (message: string): void => {
    console.log(message);
};

// never
/* 
never mean we will never reach the end of the function. 
At some point we are going to throw an error
*/
const throwError = (message: string): never => {
    throw new Error(message);
};

// conditional error
const throwNewError = (message: string): string => {
    if (message) {
        throw new Error(message);
    }
    return message;
};
// change of reaching end of function
const throwNewError2 = (message: string): void => {
    // if message throw error
    if (message) {
        throw new Error(message);
    }
    // else return nothing
};

///////////////////
// destructuring //
//////////////////

const todaysWeather = {
    date: new Date(),
    weather: "sunny",
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// };
// logWeather(todaysWeather);

// destructuring and annotation
// first destructuring { } then annotation
const logWeather = ({
    date,
    weather,
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
