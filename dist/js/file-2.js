// function firstFunc(arr, fn) {
//     let res = 'New Value: ';
//     for (let i = 0; i < arr.length; i++) {
//         res += fn(arr[i], i === arr.length - 1);
//     }
//     return res;
// }

// function handler1(el) {
//     return `${el[0].toUpperCase()}${el.slice(1)}`;
// }

// function handler2(el) {
//     return `${el}0,`;
// }

// function handler3(el, missComa) {
//     console.log(missComa);
//     let res = `${el.name} is ${el.age}`;
//     if (missComa === false) {
//         res += ",";
//     }
//     return res;

// }

// function handler4(el) {
//    let res = '';
//     for (let i =0; i < el.length; i++) {
//         res = el[i] + res

//     }
//     console.log(res);
//     return `${res},`;
// }

// console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

// console.log(firstFunc([10, 20, 30], handler2));

// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}, {age: 45, name: 'Jhon'}, {age: 45, name: 'Jhon'}], handler3));

// console.log(firstFunc(['abc', '123'], handler4));

// function every(arr, fn) {
//   if (!Array.isArray(arr) || typeof fn !== "function") {
//     return new Error("error");
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(">>>", every([12, 32, 42, 6, 7], callback));

// function callback(el, index, allarr) {
//   if (el <= 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function compare(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     res = arr[i];
//     if (res < 5) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(compare([6, 14, 8, 4, 10, 11]));

// function firstFunc(arr, fn) {
//   let myResult = "";
//   for (let i = 0; i < arr.length; i++) {
//     myResult += fn(arr[i]);
//   }

//   return `New value: ${myResult}`;
// }

// function handler1(el) {
//   let res = el[0].toUpperCase();
//   return res + el.slice(1);
// }

// console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));

// function firstFunc(arr, fn) {
//   let res = "";
//   for (let i = 0; i < arr.length; i++) {
//     res = res + fn(arr[i]);
//   }
//   return `new value: ${res}`;
// }

// function handler2(el) {
//  return [el + "0,"]
// }

// console.log(firstFunc([10, 20, 30], handler2));

// function handler3(el) {
//   return `${el.name} is ${el.age}, `

// }

// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

// function handler4(el) {
//   let res = '';
//   for (let i = 0; i < el.length; i++) {
//     res = el[i] + res
//   }
//   console.log(res);
//   return `${res},`

// }

// console.log(firstFunc(['abs', '123'], handler4));

// function every(arr, fn) {
//   if (!Array.isArray(arr) || typeof fn !== "function") {
//     return new Error("emply");
//   }
// }

// function callback() {}

// console.log(every([1, 4, 5, 6], callback));

// function _if(bool, func1, func2) {
//   if (bool) {
//     return func1();
//   }
//   return func2();
// }

// function a() {
//   console.log("A");
// };
// function b() {
//   console.log("B");
// };

// _if(false, a, b);

// function between(a, b) {
//   let res = [];
//   for (let i = a; i <= b; i++) {
//     res.push(i)
//   }
// return res
// }

// console.log((between(-2, 7)));

// function nextItem(xs, item) {

//   for (let i = 0; i < xs.length; i++) {

//     if (xs[i] === item) {
//       return xs[i +1];
//     }
//   }
// }

// function* countFrom(n) { for (let i = n; ; ++i) {
//   yield i
// }
// }

// console.log(countFrom(1))

// console.log((nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)));

// function amIWilson(p) {

//   }

//  console.log(amIWilson(5));

// function firstNonConsecutive(arr) {
//   if (arr.length < 2) {
//     return null;
//   }
//   if (arr[0] >= arr[1]) {
//     return arr[0];
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1];
//     }
//   }
//   return null;
// }

// console.log(firstNonConsecutive([1, 5, 3, 4, 5, 6, 7, 8]));

// function getSum(a, b) {
//   if (a === b) {
//     return a;
//   }
//   let start = a < b ? a : b;
//   let end = a > b ? a : b;
//   let res = 0;
//   for (let i = start; i <= end; i++) {
//     res += i;
//   }
//   return res;
// }

// console.log(getSum(-1, 2));
// console.log(getSum(2, -1));
// function minus(x = 0) {
//   return function (y = 0) {
//     return x - y;
//   };
// }

// const myFunc = minus(51);
// const myFunc2 = minus(43);

// function multiplyMaker(x = 1) {
//     let num = x;
//     return function(y = 1) {
//         num *= y;
//         return num;
//     }
// }

// const multiply = multiplyMaker(4);
// const multiply2 = multiplyMaker(3);

// function makeModule() {
//   let str = '';

//   return {
//     getStr() {
//       return str;
//     },
//     getLength() {
//         return str.length
//     },
//     getReverse() {
//         return str.split('').reverse().join('');
//     },
//     setStr(a = '') {
//         str = a + '';
//     }
//   };
// }

// const myModule = makeModule();

// console.log(myModule.getStr());
// console.log(myModule.getLength());
// console.log(myModule.getReverse());
