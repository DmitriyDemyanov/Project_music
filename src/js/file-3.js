// const users = [
//   {
//     _id: "5cdce6ce338171bb473d2855",
//     index: 0,
//     isActive: false,
//     balance: 2397.64,
//     age: 39,
//     name: "Lucile Finley",
//     gender: "female",
//     company: "ZOXY",
//     email: "lucilefinley@zoxy.com",
//     phone: "+1 (842) 566-3328",
//     registered: "2015-07-12T09:39:03 -03:00",
//     hobbies: ["tennis", "football", "baseball", "beer", "sky"],
//   },
//   {
//     _id: "5cdce6ce0aa8d071fa4f4cc5",
//     index: 1,
//     isActive: true,
//     balance: 2608.48,
//     age: 33,
//     name: "Woodward Grimes",
//     gender: "male",
//     company: "FORTEAN",
//     email: "woodwardgrimes@fortean.com",
//     phone: "+1 (960) 436-3138",
//     registered: "2014-09-08T03:24:39 -03:00",
//     hobbies: ["baseball", "football", "whiskey", "photoshop", "diving"],
//   },
//   {
//     _id: "5cdce6ce103de120d32d6fe4",
//     index: 2,
//     isActive: true,
//     balance: 1699.99,
//     age: 25,
//     name: "Robinson Coleman",
//     gender: "male",
//     company: "GENMOM",
//     email: "robinsoncoleman@genmom.com",
//     phone: "+1 (852) 543-3171",
//     registered: "2019-04-23T08:24:58 -03:00",
//     hobbies: ["baseball", "football", "whiskey", "photoshop", "diving"],
//   },
//   {
//     _id: "5cdce6cebada7a418d8ccb3d",
//     index: 3,
//     isActive: true,
//     balance: 2621.84,
//     age: 25,
//     name: "Austin Benton",
//     gender: "male",
//     company: "ZILIDIUM",
//     email: "austinbenton@zilidium.com",
//     phone: "+1 (977) 573-2627",
//     registered: "2016-08-02T10:08:24 -03:00",
//     hobbies: ["photoshop", "rom", "tennis"],
//   },
//   {
//     _id: "5cdce6ced81fe99596d9cef5",
//     index: 4,
//     isActive: true,
//     balance: 1297.31,
//     age: 37,
//     name: "Casandra Stout",
//     gender: "female",
//     company: "ANACHO",
//     email: "casandrastout@anacho.com",
//     phone: "+1 (929) 465-3804",
//     registered: "2018-04-14T11:27:26 -03:00",
//     hobbies: ["car", "computer", "whiskey"],
//   },
//   {
//     _id: "5cdce6ce6c3ae6c4d6f39e88",
//     index: 5,
//     isActive: false,
//     balance: 2165.49,
//     age: 20,
//     name: "Valencia Carrillo",
//     gender: "male",
//     company: "XEREX",
//     email: "valenciacarrillo@xerex.com",
//     phone: "+1 (977) 522-3378",
//     registered: "2014-02-14T11:45:27 -02:00",
//     hobbies: ["football", "beer", "nuts"],
//   },
// ];

// let products = [
//   { title: "prod1", price: 5.2 },
//   { title: "prod2", price: 0.18 },
//   { title: "prod3", price: 15 },
//   { title: "prod4", price: 25 },
//   { title: "prod5", price: 18.9 },
//   { title: "prod6", price: 8 },
//   { title: "prod7", price: 19 },
//   { title: "prod8", price: 63 },
// ];

// function findByHobby(arr, text) {
//   return arr.filter((user) => {
//     return user.hobbies.some((el) => {
//       return el === text;
//     });
//   });
// }

// function reverseNumbers(num) {
//   console.log(num);
//   let res = num.toString().split("").reverse();
//   console.log(res);
//   return res.map((el) => el * 1);
// }

// console.log(reverseNumbers(348597));

// function twoSort(s) {
//   return s.sort()[0].split('').join("***");
// }

// const twoSort = (s) => s.sort()[0].split('').join("***");

// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "amaybe", "who", "knows", "perhaps"]));

// const color = "green";
// const sex = "male";
// const car = "vw";

// function first() {
//   function second() {
//     const tree = "baobab";
//     console.log(car);
//     return "Hello";
//   }

//   const fruit = "apple";
//   const car = "mercedes";

//   return second;
// }

// const myFunc = first();

// //console.log(myFunc());

// let x = 100;

// function updateValue(val) {
//   let x = val;
//   console.log("-----", x);

//   return function (num) {
//     return (x += num);
//   };
// }

// const updtVal = updateValue(2);

// const updtVal2 = updateValue(5);

// console.log(updtVal(1));
// console.log(updtVal(0));

// console.log(">>>>");

// console.log(updtVal2(7));
// console.log(updtVal2(3));
// console.log(updtVal2(5));

// console.log(">>>>");

// console.log(updtVal(8));

// function closureExample() {
//   const arrOfFunc = [];
//   let value = "";

//   for (let i = 0; i < 10; i++) {
//     function newFunc() {
//       console.log(value, i);
//     }

//     value += i;
//     arrOfFunc.push(newFunc);
//   }

//   return arrOfFunc;
// }

// const result = closureExample();

// console.log(result);

// const abc = result[5];

// console.log(abc);

// abc();

// function well(x) {
//   let res = x.filter((el) => el === "good");
//   if (res.length === 0) {
//     return "Fail!";
//   }
//   if (res.length <= 2) {
//     return "Publish!";
//   }
//   return "I smell a series!";

//   return res;
// }

// function callback(el) {
//   return el === "good";
// }

// console.log(well([, "bad", "bad", "bad", "bad", , "bad", "bad"]));

// function grow(x) {
//   let res = 1;
//   for (let i = 0; i < x.length; i++) {
//     res *= x[i];
//   }
//   return res;
// }

// console.log(grow([4, 1, 1, 1, 4]));

// function stringToArray(string) {
//   let res = string.split(' ')

// 	return res;

// }

// console.log(stringToArray("I love arrays they are my favorite"));

// function removeEveryOther(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if ( i % 2 == 0 || i === 0) {
//       res.push(arr[i]);
//       console.log(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(removeEveryOther([9, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

// function howMuchILoveYou(nbPetals) {
//   switch(nbPetals % 6) {
//     case 0 :
//       return 'not at all';
//     case 2 :
//       return 'a little';
//     case 1 :
//       return 'I love you';
//     case 3 :
//       return 'a lot';
//     case 5 :
//       return 'passionately';
//     case 5 :
//       return 'madly';

//   }
// }

// console.log(howMuchILoveYou(7));

// smash = (words) => words.join(" ").trim();

// console.log(smash(["hello", "amazing", "world"]));

// function gooseFilter(birds) {
//   let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter((bird) => !geese.some((goose) => bird === goose));
// }

// console.log(
//   gooseFilter([
//     "Mallard",
//     "Hook Bill",
//     "African",
//     "Crested",
//     "Pilgrim",
//     "Toulouse",
//     "Blue Swedish",
//   ])
// );

let haystack = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  "needle",
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];

// function findNeedle(haystack) {
//   let index = null;
//   let res = haystack.filter(callback);

//   function callback(el, idx) {

//     if (el === 'needle') {
//       index = idx;
//       return true;
//     }
//   }

//   return `found the needle at position ${index}`;
// }

// console.log(findNeedle(haystack));

//  const findNeedle= (haystack) => `found the needle at position ${haystack.indexOf('needle')}`

// findNeedle(haystack);

// function isVow(a) {
//   const values = ['a', 'e', 'i', 'o', 'u'];
//   return a.map((el) => {
//     let char = String.fromCharCode(el);
//     if (values.includes(char)) {
//       return char;
//     }
//     return el;
//   });;
// }

// console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));
// var input = [4, 3, 9, 7, 2, 1];
// const squareOrSquareRoot = (array) =>
//   array.map((el) =>
//     Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : Math.pow(el, 2)
//   );

// console.log(squareOrSquareRoot(input));

// function squareOrSquareRoot(array) {
//   let res = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Number.isInteger(Math.sqrt(array[i]))) {
//       res.push(Math.sqrt(array[i]));
//     } else {
//       res.push(Math.pow(array[i], 2));
//     }
//   }
//   return res;
// }
// console.log(squareOrSquareRoot(input));
