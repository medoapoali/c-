// function calculate(numOne: number, numTwo: number) {
//   return numOne + numTwo;
// }

// console.log(calculate(10, 20)); // 30
// console.log(calculate(10, 20)); // We Don't Need This To Work
// console.log(calculate(+true, +true)); // 2
// ______________________
// function printInfo(valueOne: string | number, valueTwo: string | number) {
//   return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }

// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// // console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
// ______________________________________
// let arr: (number | boolean |boolean[]| string | string[] | number[])[];

// arr = [1,2,true,'medo',[true],["medo"],[12,5]]
// ___________________________
// function reportErrors(username: string, _age: number) {
//   return `Username: ${username}`;
// }

// console.log(reportErrors("Elzero", 40));
// ______________________________________________
// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c) {
//   return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(theName, "", "")); // Elzero
// _______________________________________
// function showMsg(user?: any, age?: any, country?: any) {
//   return `${user}${age}${country}`;
// }

// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));
// _________________________
// Write The Function Here

// function printInConsole(...all: any) {
//   for (let i = 0; i < all.length; i++) {
//     return `The Value Is ${all[i]} And Type Is ${typeof all[i]}`;
//   }
//   return all;
// }
// // Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done
// _____________________________________
// Write Your Code Here
// type n = number;
// // Do Not Edit Here
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here

// console.log(myData);
// __________
// // Write Your Code Here
// type mix = number | boolean;
// // Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here
// _________________
// Write Your Code Here
// type Info = {
//   theName: string;
//   theAge: number;
// };
// type Full = Info & {
//   country: string;
// };
// // Do Not Edit Here
// function showInfo(data: Info) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
// }
// console.log(showInfo({ theName: "Elzero", theAge: 40 }));

// function showFullInfo(data: Full) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
//   console.log(`The Country Is ${data.country}`);
// }
// console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
// ______________________
// function yesOrNo(val: number | string) {
//   if (val === 30) {
//     return true;
//   } else if (val === 8) {
//     return false;
//   } else if (val === "100") {
//     return `Error`;
//   }
// }

// // Do Not Edit Here
// console.log(yesOrNo("100")); // Error
// console.log(yesOrNo(30)); // True
// console.log(yesOrNo(8)); // False
// _____________________________________________________
// type custom = string | number;

// function isHeOld(age: custom) {
//   if (age === 45) {
//     return "yes";
//   } else if (age === 30) {
//     return "no";
//   } else if (age === "100") {
//     return "Error";
//   }
//   return age;
// }

// // Do Not Edit Here
// console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"
// ________________________________________
// let post: readonly [100, "Title", true];

// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here

// const id: number = 100;
// const title: string = "Title";
// const state: boolean = true;

// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true
// ___________________________________________
// type custom = Error | 'Yes' | 'No'

// function isHeOld(age: any) : custom  {

//   if(age > 40){
//     return 'Yes'
//   }else if(age < 40){
//     return 'No'
//   }else {
//     return Error
//   }
// }

// // Do Not Edit Here
// console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"
// ___________________________
// Create Enums + Function Here
// function hello(num: number) {
//   let num1 = 10;
//   return num - num1;
// }

// enum Game {
//   Easy = 100,
//   Medium = Easy - 20,
//   Hard = Medium - Easy / 2,
//   Insane = hello(Hard),
// }

// // Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20
// ______________________________
// const user: {
//   username: string;
//   age: number | string;
//   website?: string;
//   skills: {
//     frontEnd: string[];
//     backEnd: (string | number)[];
//   };
// } = {
//   username: "Elzero",
//   age: 40,
//   website: "Elzero.org",
//   skills: {
//     frontEnd: ["HTML", "CSS", "JS"],
//     backEnd: ["PHP", "Python"],
//   },
// };

// // We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = "40";
// user.skills.backEnd.push(100);
// _______________________________
// Edit The Interface To Fix The Problems
// interface Member {
//   id: number | string;
//   username: string;
//   country?: string;
//   state: boolean;
//   getName(): string;
// }

// // Do Not Edit The Code Below
// let user: Member = {
//   // Property 'country' is missing in type
//   id: 100,
//   username: "Elzero",
//   state: true,
//   getName() {
//     // 'getName' does not exist in type 'Member'
//     return this.username;
//   },
// };

// user.id = 200;
// user.id = "200"; // Type 'string' is not assignable to type 'number'
// user.state = false; // Cannot assign to 'state' because it is a read-only property
// __________________________________
// Create Interface Here
// interface Client {
//   id: number;
//   username: string;
//   active: boolean;
//   discount: number;
//   getPrice(price: number);
// }
// // Do Not Edit The Code Below
// let client: Client = {
//   id: 100,
//   username: "Elzero",
//   active: true,
//   discount: 10,
//   getPrice(price: number) {
//     return price - this.discount;
//   },
// };

// console.log(`Client Id Is ${client.id}`);
// console.log(`Client Name Is ${client.username}`);
// console.log(`Client Has Dicount ${client.discount}`);
// console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
// _____________________________
// Do Not Edit The Code Below
// interface Man {
//   title: string;
//   weight: number;
//   age: number;
// }

// interface Bird {
//   canFly: boolean;
// }
// interface Superman extends Man, Bird {
//   bodyType: string;
//   origin: string;
// }

// let creature: Superman = {
//   title: "Superman",
//   weight: 100,
//   age: 500,
//   canFly: true,
//   bodyType: "Iron",
//   origin: "Krypton",
// };
// __________________________________
// Create Class Here
// class Player {
//   u: string;
//   m: string;
//   n: number | string;
//   b?: boolean | number;
//   details: () => string;
//   constructor(
//     username: string,
//     mage: string,
//     num: number | string,
//     bool?: boolean | number
//   ) {
//     this.u = username;
//     this.m = mage;
//     this.n = num;
//     this.b = bool;
//     this.details = function () {
//       return `${username}, Type Is ${mage} Level Is ${num}`;
//     };
//   }
// }
// // Do Not Edit The Code Below
// let player1 = new Player("VIP  Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("VIP  Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
// ____________________________
// class Shorten {
//   constructor(
//     public id: number,
//     public username: string,
//     protected title: string
//   ) {
//     this.id = id;
//     this.username = username;
//     this.title = title;
//   }
// }

// let tester = new Shorten(100, "Elzero", "Developer");

// console.log(tester.id);
// console.log(tester.username);
// _________________________
// class Show {
//   constructor(private _title: string) {}
//   get title(): string {
//     return this._title;
//   }
//   set title(value: string) {
//     this._title = value;
//   }
// }

// let tester = new Show("Elzero");

// console.log(tester.title); // Property 'title' does not exist on type 'Show'
// tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
// console.log(tester.title); // Property 'title' does not exist on type 'Show'
// ________________________________
// interface Play {
//   id: number;
//   title: string;
//   level: number | string;
//   logIn(): void;
//   logOut(msg: string): void;
// }

// // Create Your Class Here
// class Player implements Play {
//   id: number;
//   title: string;
//   level: string | number;
//   constructor(id: number, title: string, level: number | string) {
//     this.id = id;
//     this.title = title;
//     this.level = level;
//   }
//   logIn() {
//     console.log("Logged In");
//   }
//   logOut(msg: string) {
//     console.log(`Logged Out, ${msg}`);
//   }
// }

// let player1 = new Player(100, "Elzero", 95);

// console.log(player1.id); // 100
// console.log(player1.title); // "Elzero"
// console.log(player1.level); // 95
// player1.logIn(); // Logged In
// player1.logOut("Good Bye"); // Logged Out, Good Bye
// ______________________________
// Do Not Edit
// type numandstring = number | string;

// abstract class Game {
//   constructor(public title: string, public price: numandstring) {}
//   abstract getLocation(): string;
//   abstract getDiscount(): string;
// }

// // Start Edit And Fix
// class RPG extends Game {
//   constructor(title: string, price: numandstring, public rate: number) {
//     super(title, price);
//   }
//   getDiscount(): string {
//     return `Discount`;
//   }
//   getLocation(): string {
//     return `Location`;
//   }
// }

// class Action extends Game {
//   constructor(
//     title: string,
//     price: numandstring,
//     public rate: number,
//     public company: string
//   ) {
//     super(title, price);
//   }

//   getDiscount(): string {
//     return `Discount`;
//   }
//   getLocation(): string {
//     return `Location`;
//   }
// }
// // End Edit And Fix

// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"

// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"
// _________________________________________________________
// // Write Function Code Here
// function showTypes<S = void, N = void, B = void>(
//   str?: S,
//   num?: N,
//   bool?: B
// ): any {
//   if (str != undefined || num != undefined || bool != undefined) {
//     return `${str} - ${num} - ${bool}`;
//   } else if (num === undefined || bool === undefined) {
//     return `${"nsdfj"} -${num + "klsdf"} - Nothing`;
//   } else if (str != undefined || num === undefined || bool === undefined) {
//     console.log(`${"nsdfj"} -${num + "klsdf"} - Nothing`);
//   }
// }
// // Do Not Edit Here
// console.log(showTypes()); // Nothing - Nothing - Nothing
// console.log(showTypes<string>("String")); // String - Nothing - Nothing
// console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
// console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true
// ________________________________________________________
// Write Class Code Here

class Game<S> {
  constructor(public title: S, public price: number) {}
  getDiscount(num: number | string) {
    console.log(`The Discount Is ${num}`);
  }
}
// Do Not Edit Here
let gameOne = new Game<string>("Ys", 100);
let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"
