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
