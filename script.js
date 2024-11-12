// JSON- javascrip object notation
//commonly used for APIS and configs
//easy to read/write
//anything you write in json is valid javascript
//integrates easily with other lamnguages
// json represents the same types as javascript : strings, numbers, booleans, null, arrays, and objects.

let companies = [
  {
    name: "bigcorperation",
    numberOfemployees: 10000,
    ceo: "mary",
    rating: 3.6,
  },
  {
    name: "smallStartUp",
    numberOfEmployees: 3,
    ceo: null,
    rating: 4.3,
  },
];
console.log(JSON.parse(companies));
//jason returns as string, not js obkect, json.parse() transforms it to js object
// console.log(JSON.parse(companies));
