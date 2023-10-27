// let theName: string = "medo";
// let theNumber: number = 40;
// let hire: boolean = true;
// let all: any = "elzero web school";

// theName = "elzer";
// all = 10;

// function hello(n1: number, n2: number) {
//   return n1 + n2;
// }

// console.log(hello(1, 3));
// console.log(hello(1, 1));

// ___________________________________________________
// الخلاصه بتحدد نوع المتغير ومهما عملت مبيقلش الا نوعه
// ___________________________________________________
// _______________________________________________________________
// let all: string | number | boolean = "medo";//ينفع تخليها باكتر من خاصيه

// all = "a";
// all = 10;
// all = false;

// let myFrinds: string[] = ["osama", "ahmed", "sayed"];//اراى استرنج فقط

// for (let i = 0; i < myFrinds.length; i++) {
//   console.log(myFrinds[i].repeat(3));
// }
// ______________________________________________________________________
// let arrayOne: number[] = [1,2,3,4,5];
// let arrayTwo: string[] = ['a','b','c'];
// let arrayThree: (string|number)[] = [1,2,3,4,'a','b','c'];

// let arrayFour: (string|number|string[])[] = [1,2,3,4,'a','b','c',['c','d']];
// _______________________________________________________________________
// let showMsg = true;

// function showDetails(name: string, age: number, salary: number): string {// return string
//   let test = 10;
//   if (showMsg) {
//     return `hello ${name}, age is ${age}, salry is ${salary} test is ${test}`;
//   }
//   return 'string';
// }

// console.log(showDetails("medo", 10, 500));
// __________________________________________________________________________
// function showDeta(name: string, age: number, country?: string) {
//   //country?: string => بتخلى المتغر الكتابه فىه اختيارى
//   return `${name} - ${age} - ${country}`;
// }

// console.log(showDeta("osams", 40));
// _____________________________________________________________________________
// function addAll(...nums: number[]): number {
//   let result = 0;
//   // for (let i = 0; i < nums.length; i++) {
//   //   result += nums[i];
//   // }
//   nums.forEach((nums) => (result += nums));
//   return result;
// }
// console.log(addAll(10, 20, 30, 100, 10.5, +true));
// ________________________________________________________________________________
// const add = function (num1: number, num2: number): number {
//   return num1 + num2;
// };

// console.log(add(10, 20));

// const addWithArrow = (num1: number, num2: number): number => num1 + num2;

// console.log(addWithArrow(10, 20));
// ___________________________________________________________________________
// type st = string; //هنا عملت اختصار لكلمه استرنج

// let theName: st = "medo";
// theName = "elzero";

// type standnum = string | number; // عملت اختصار لنمبر واسترنج مع بعض
// let theNumAndSt: standnum = "medo";
// theNumAndSt = 10;
// _________________________________________________________________________
// type buttons = {//بتضف مغيرات + نوع المتغير
//   up: string;
//   right: string;
//   down: string;
//   left: string;
// };

// type last = buttons & {//بتضيف الخواص الى فى الميكس الاول + اضافات
//   x: boolean;
// };

// function getActions(btns: last) {
//   console.log(`action for button up is ${btns.up}`);
//   console.log(`action for button right is ${btns.right}`);
//   console.log(`action for button down is ${btns.down}`);
//   console.log(`action for button left is ${btns.left}`);
// }

// getActions({
//   up: "junp",
//   right: "go right",
//   down: "go down",
//   left: "goleft",
//   x: true,
// });
// __________________________________________________________
// type nums = 0 | 1 | -1;// متغير بتديله قيمه

// function compear(num1: number, num2: number): nums {
//   if (num1 === num2) {
//     return 0;//مينفعش تكتب ارقام غيبر الى مكتوبه فى المتغير
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

// console.log(compear(20, 20)); //0
// console.log(compear(30, 22)); //1
// console.log(compear(20, 30)); //-1
// _________________________________________________________________
// let article: readonly [number, string, boolean] = [11, "title on", true]; //readonly = بتحدد العناصر الى جاخلالك على خسب ما تحدد
// article = [12, "title Two", false];
// // article.push(100);

// console.log(article);

// const [id, title, published] = article;

// console.log(id);
// console.log(title);
// console.log(published);
// _____________________________________________________________
// function logging(msg: string): void {
//   //كانك بتلغى الريترن
//   console.log(msg);
//   return; //undefined
// }
// console.log(logging("im a meassge"));
// console.log("test");

// const fail = (msg: string) => {
//   throw new Error(msg);
//   // return 10
// };

// function alwayslog(name:string): never{
//   while(true){
//     console.log(name)
//   }
//   // return  never return
// }

// alwayslog('osama')//infent لا نهائى فبيقوف الى بعده
// // console.log("test")
// ________________________________________________________________________
// const kids = 15;
// const easy = 9;
// const medium = 6;
// const hard = 3;

// enum level {
//   kids = 15,
//   easy = 9,
//   medium = 6,
//   hard = 3,
// }

// let lvl: string = "easy";

// if (lvl === "easy") {
//   console.log(`the level is ${lvl} and number of seconds ${level.easy}`);
// }
// _____________________________________________________________________
// const enum level {
//   kids = 15,
//   easy = 9,
//   medium = 6,
//   hard = 3,
// }

// let lvl: string = "easy";

// if (lvl === "easy") {
//   console.log(`the level is ${lvl} and number of seconds ${level.easy}`);
// }

// ____+++++++++++++++
// function getHardsecond(): number {
//   return 3;
// }

// enum kids {
//   five = 25,
//   seven = 20,
//   ten = 15,
// }

// enum level {
//   kid = kids.ten, //تقدر تجيب قيمه فنقشن اة متفير طالما اتعمل قبل الى انت قيه
//   easy = 9,
//   medium = 6,
//   hard = getHardsecond(),
// }

// let lvl: string = "easy";

// if (lvl === "easy") {
//   console.log(`the level is ${lvl} and number of seconds ${level.hard}`);
// }
// _________________________________________________________________
// بتحدد نوع العنصر زى المثال التالى نوعه اتش تى ام ال
// let myImge = document.getElementById("my-img") as HTMLImageElement;
// let myImge = <HTMLImageElement>document.getElementById("my-img");
// console.log(myImge.src);

// let data: any = 1000;
// console.log((data as string).repeat(3));
// Uncaught TypeError: data.repeat is not a function
// ________________________________________________________________
// let all: number |string = 100

// type a = {
//   one: string;
//   two: number;
//   three: boolean;
// };

// type b = a & {
//   four: number;
// };

// type c = {
//   five: boolean;
// };

// type mix = a & c;

// function getActions(buts: mix) {
//   console.log(buts.one);
//   console.log(buts.two);
//   console.log(buts.three);
//   console.log(buts.five);
// }

// getActions({ one: "string", two: 100, three: true, five: false });
// ___________________________________________________________________________
//طريقه كتابه الاوبجيكت
// let thObject: {
//   readonly theName: string;// غير قابل للتعديل
//   id: number;
//   herd?: boolean;//ممكن تكتبها وممكن لا
//   skils: {
//     one: string;
//     two: string;
//   };
// } = {
//   theName: "elzero",
//   id: 1123,
// //  // herd: true,
//   skils: {
//     one: "html",
//     two: "css",
//   },
// };

// // // thObject.theName = "medo";
// thObject.id = 101;
// thObject.herd = false;

// console.log(thObject.theName);
// console.log(thObject.id);
// console.log(thObject.herd);
// console.log(thObject.skils.two);
// _____________________________________________________________________
// interface User {
//   // id?: number;
//   id: number;
//   // readonly username: string;
//   username: string;
//   contry: string;
//   sayHello(): string;
//   sayWelcom: () => string;
//   getDouble(num: number): number;
// }

// let user: User = {
//   id: 100,
//   username: "medo",
//   contry: "eypt",
//   sayHello() {
//     return `hello ${this.username}`;
//   },
//   sayWelcom: () => {
//     return `wlcom ${user.username}`;
//   },
//   getDouble(n) {
//     return n * 2;
//   },
// };
// console.log(user);

// // function getDeat(deat: User) {
// //   console.log(`id is ${deat.id}`);
// //   console.log(`username is ${deat.username}`);
// //   console.log(`contry is ${deat.contry}`);
// // }
// // getDeat({ id: 200, username: "medo", contry: "dmeta" });
// console.log(user.id);
// console.log(user.sayHello());
// console.log(user.sayWelcom());
// console.log(user.getDouble(100));
// ______________________________________________________________
// homepage
// interface settings {
//   theme: boolean;
//   font: string;
// }

// //articles page
// interface settings {
//   sidebar: boolean;
// }

// //contact pag
// interface settings {
//   external: boolean;
// }

// let userSettings: settings = {
//   theme: true,
//   font: "open sans",
//   sidebar: false,
//   external: true,
// };
// __________________________________________________________
// interface User {
//   id: number;
//   username: string;
//   contry: string;
// }

// // interface moderetor extends User{// عملت دمج لخواص اليوزر
// interface moderetor {
//   role: string | number;
// }

// interface admin extends User, moderetor {// عملت دمج لخواص اليوزر + modretor
//   protect: boolean;
// }

// let user: admin = {
//   id: 100,
//   username: "medo",
//   contry: "egypt",
//   role: "mod",
//   protect: true,
// };

// console.log(user.id);
// ______________________________________________________________________
// let el = document.getElementById('id') as HTMLElement
// _______________________________________________________________
// class User {
//   u: string;
//   s: number;
//   msg: () => string;
//   constructor(username: string, salry: number) {
//     this.u = username;
//     this.s = salry;
//     this.msg = function () {
//       // عملت دمج لخواص اليوزر
//       return `hello ${this.u} your salry is ${this.s}`;
//     };
//   }
//   sayMsg() {
//     return `hello ${this.u} your salry is ${this.s}`;
//   }
// }

// let userone = new User("elzero", 6000);

// console.log(userone.u);
// console.log(userone.s);
// console.log(userone.msg());
// console.log(userone.sayMsg());
// _________________________________________________________
// class User {
//   // private usernam: string;//false
//   // protected salary: number;  false
//   msg: () => string;
//   constructor(
//     private usernam: string,
//     protected salary: number,
//     public readonly address: string
//   ) {
//     // this.usernam = usernam;//false
//     // this.salary = salary;//false
//     this.msg = function () {
//       // عملت دمج لخواص اليوزر
//       return `hello ${this.usernam} your salry is ${this.salary}`;
//     };
//   }
//   sayMsg() {
//     return `hello ${this.usernam} your salry is ${this.salary}`;
//   }
// }

// let userone = new User("elzero", 6000, "cairo");

// // console.log(userone.usernam);
// // console.log(userone.salary);
// console.log(userone.msg());
// console.log(userone.sayMsg());
// _____________________________________________________________________
// class User {
//   msg: () => string;
//   constructor(
//     private _username: string,
//     public salary: number,
//     public readonly address: string
//   ) {
//     this.msg = function () {
//       return `hello ${this._username} your salry is ${this.salary}`;
//     };//-username => is private وبعدين بتعملها جيت وسيت يمكن التعديل على البرايفت بلطريقه دى
//   }
//   sayMsg() {
//     return `hello ${this._username} your salry is ${this.salary}`;
//   }
//   get username(): string { //هنا جيت
//     return this._username;
//   }
//   set username(value: string) {//هنا سيت
//     this._username = value;
//   }
// }

// let userone = new User("elzero", 6000, "cairo");

// console.log(userone.username);
// userone.username = "medo";
// console.log(userone.username);
// console.log(userone.salary);
// console.log(userone.msg());
// console.log(userone.sayMsg());
// _____________________________________________________________________
// class User {
//   private static creted: number = 0; // خاصه بلكلاس بس
//   static getCount(): void {
//     // فنقشن مش هترجع قيمه
//     console.log(`${this.creted} objects created`);
//   }
//   constructor(public username: string) {
//     User.creted++; // هنا مستخدمتش زيس علشات بتعود على الكونستراكتور
//   }
// }

// let u1 = new User("Elzero");
// let u2 = new User("web");
// let u3 = new User("school");
// // console.log(User.creted);//  مينعش تاكسس عليها علشان برايفت
// User.getCount(); //تقوم بعمل الجيت
// ___________________________________________________________________________
// interface settings {
//   theme: boolean;
//   font: string;
//   save(): void;
// }

// class User implements settings {
//   constructor(
//     public username: string,
//     public theme: boolean,
//     public font: string
//   ) {}
//   save(): void {
//     console.log(`saved`);
//   }
//   update(): void {
//     console.log("Updated");
//   }
// }

// let userone = new User("elzero", true, "open sans");

// console.log(userone.username);
// console.log(userone.font);

// userone.save();
// userone.update();
// ___________________________________________________________
// abstract class Food {
//   //كلا للتوريث
//   constructor(public title: string) {}
//   abstract getCooking(): void; //النقشن الى بتتورث لازم تكون فويد والكلاس الى هيوث لازم يكتب الفنقشن دى
// }

// class Pizza extends Food {
//   constructor(title: string, public price: number) {
//     super(title); //طريقه الوراثه
//   }
//   getCooking(): void {
//     console.log(`Cooking tim for pizza as 1 hour`);
//   }
// }

// class Burger extends Food {
//   constructor(title: string, public price: number) {
//     super(title); //طريقه الوراثه
//   }
//   getCooking(): void {
//     console.log(`Cooking tim for pizza as 1 hour`);
//   }
// }

// let pezzaone = new Pizza("awesome pizza", 100);

// console.log(pezzaone.title);
// console.log(pezzaone.price);

// pezzaone.getCooking();
// __________________________________________
// class Player {
//   constructor(public name: string) {}
//   attack(): void {
//     console.log("Attacking Now");
//   }
// }

// class Amazon extends Player {
//   constructor(name: string, public spars: number) {
//     super(name);
//   }
//   override attack() : void {
//     //بورث بس بكتب الخواص
//     // super.attack();//بورث الخواص
//     console.log("Attacking With Spear");
//     this.spars -= 1;
//   }
// }

// class Barbarian extends Player {
//   constructor(name: string, public axeDurability: number) {
//     super(name);
//   }
//   override attack(): void {
//     //الوفر ريت علشان الكلاسيس ميعملوش اوفر ريت على بعض
//     // super.attack();
//     console.log("Attacking With Axe");
//     this.axeDurability -= 1;
//   }
// }

// let barOne = new Barbarian("medo", 100);

// console.log(barOne.name);
// barOne.attack();
// console.log(barOne.axeDurability);
// _________________________________________________________________

// function returnNumber(val: number): number {
//   return val;
// }
// function returnString(val: string): string {
//   return val;
// }
// function returnBoolean(val: boolean): boolean {
//   return val;
// }
// console.log(returnNumber(100));
// console.log(returnString("medo"));
// console.log(returnBoolean(true));

// // function returnType<GenericType>(val: GenericType): GenericType {
// function returnType<T>(val: T): T{//<GenericType>اختصار كلمه
//   return val;
// }
// //الجنرك تيب بتحدد نوع العنصر وانت بتكتبه
// console.log(returnType<number>(100));
// console.log(returnType<string>("elzer"));
// console.log(returnType<boolean>(true));
// console.log(returnType<number[]>([1,2,3,4]));
// _______________________________________________________________________
// function returnType<T>(val: T): T {
//   return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("elzer"));

// const returnTypeArroSyntax = <T>(val: T): T => val;

// console.log(returnTypeArroSyntax<number>(100));
// console.log(returnTypeArroSyntax<string>("elzer"));

// function testType<T>(val: T): string {
//   //(val: T): string =الاسترنج دى بيتكون النتيجه الى الريترن هيطلعها الى غالبا بتبقا استرنج
//   return `the value is ${val} and type is ${typeof val}`;
// }

// console.log(testType<number>(100));
// console.log(testType<string>("elzer"));
// عبى حسب عدد العناصر بتعمل اكتر من جينريت
// function multipleType<T, S>(valone: T, valtwo: S): string {
//   return `the first value is ${valone} and second value ${valtwo}`;
// }

// console.log(multipleType<number, string>(100, "medo"));
// console.log(multipleType<string, boolean>("elzer", true));
// _______________________________________________________________
// class User<T = string> {
//   //لو مضفتش بينات ابتحدد القيمه الافتراضيه هنا سترنج مثلا
//   constructor(public value: T) {}
//   show(msg: T): void {
//     console.log(`${msg} - ${this.value}`);
//   }
// }

// let userOne = new User<string>("elzero");

// console.log(userOne.value);
// userOne.show("medo");

// let userTwo = new User<number | string>(100);

// console.log(userTwo.value);
// userTwo.show("medo");
// ________________________________________________________________
// interface Book {
//   itemType: string;
//   title: string;
//   isbn: number;
// }

// interface Game {
//   itemType: string;
//   title: string;
//   style: string;
//   price: number;
// }

// class Collection<T> {
//   public data: T[] = [];//صنعت ببلك اراى
//   add(item: T): void {//فنقشن بدون قيمه
//     this.data.push(item);//خواص الفنقشن بتعمل بوش للدتا جوا الاراى
//   }
// }
// //الملخص انا استخدمت خواص الانتر فيس فى الكلاس
// let itemOne = new Collection<Book>();
// itemOne.add({ itemType: "book", title: "atomic habits", isbn: 150510 });
// itemOne.add({ itemType: "book", title: "follow yout heart", isbn: 16610 });
// console.log(itemOne);

// let itemTwo = new Collection<Game>();
// itemTwo.add({
//   itemType: "game",
//   title: "uncharted",
//   style: "action",
//   price: 150,
// });
// console.log(itemTwo);
// _______________________________________________________________
