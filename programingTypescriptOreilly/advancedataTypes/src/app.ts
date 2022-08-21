// Relationships Between Types

// Subtypes and Supertypes

// Excess property checking

type Options = { baseURL: string; cacheSize?: number; tier?: "prod" | "dev" }

class API {
  constructor(private options: Options) {}

  getValue() {
    return this.options
  }
}

new API({
  baseURL: "https://api.mysite.com",
  tier: "prod",
})

// ERROR
// CASE 1 - what happens if you misspell an option?
/*
new API({
  baseURL: "https://api.mysite.com",
  tier: "prod",
}) */

// CASE 2 - explicitly type options as Options
/* 
let options: Options = {
baseURL: 'https://api.mysite.com',
badTier: 'prod' 
} 

new API(options)
*/

// as Options
new API({
  baseURL: "https://api.mysite.com",
  tierr: "prod",
} as Options)

// declaring variable
let badOptions = {
  baseURL: "https://api.mysite.com",
  badTier: "prod",
}
new API(badOptions)
