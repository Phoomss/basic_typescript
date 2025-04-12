// primitive types
// advanced types
// special types

// primitive types
export const variavletype = () => {
  const age: number = 25; // number
  const pi: number = 3.14; // number
  const pricce: number = 19.99; // number
  const score: number = -95; // number

  const fname: string = "John"; // string
  const lname: string = "Doe"; // string
  const greeting: string = "Hello, World!"; // string

  const isActive: boolean = true; // boolean
  const isLoggedIn: boolean = false; // boolean
  const isAvailable: boolean = true; // boolean
  const isComplete: boolean = false; // boolean
  const isEmpty: boolean = false; // boolean

  //   advanced types
  const user: { name: string; age: number } = { name: "John", age: 25 };
  const product: { id: number; name: string; price: number } = {
    id: 1,
    name: "Laptop",
    price: 999.99,
  };
  const number: number[] = [1, 2, 3, 4, 5]; // array of numbers
  const names: string[] = ["Alice", "Bob", "Charlie"]; // array of strings
  const isAdults: boolean[] = [true, false, true]; // array of booleans
  const people: Array<string> = ["Alice", "Bob", "Charlie"]; // array of strings using generic type
  const numbers: Array<number> = [1, 2, 3, 4, 5]; // array of numbers using generic type

  const person: [string, number][] = [
    ["Alice", 25],
    ["Bob", 30],
    ["Charlie", 35],
  ]; // array of tuples

  enum Color {
    Red,
    Green,
    Blue,
  } // enum
  const favoriteColor: Color = Color.Green; // enum value

  const users: { name: string; age: number }[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  //   special types
  let data: any = 10;
  data = "Hello"; // any type can be reassigned to any type
  data = true; // any type can be reassigned to any type

  //   void
  const greet = (): void => {
    console.log("Hello, World!");
  };
  //   greet(); // calling the function that returns void

  // never
  const throwError = (): never => {
    throw new Error("This is an error!");
  };
  // throwError(); // calling the function that never returns

  //   unknown
  let userInput: unknown;
  let userName: unknown;
  userInput = "John"; // unknown type can be reassigned to any type
  userInput = 25; // unknown type can be reassigned to any type

  typeof userInput === "string"
    ? (userName = userInput) // type assertion to string
    : (userName = "Unknown"); // type assertion to string
  //   console.log(userName); // Output: John
};
