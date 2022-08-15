// 1h = 3600s

// const time = 62707;

// let h = Math.floor(time / 3600);
// console.log(h);

// let min = Math.floor((time - h * 3600) / 60);
// console.log(min);

// let sec = time % 60;
// console.log(sec);

// let res = `${parseTime(h)}:${parseTime(min)}:${parseTime(sec)}`;
// console.log(res);

// function parseTime(a) {
//     if (a < 10) {
//         return '0' + a;
//     }
//     return a ;

// }

// let str = 'tseb eht ma i';
// let length = str.length;
// let res = '';

// for ( let i = 0; i < length; i++) {
//    res = str[i] + res;
// }
// console.log(res);

// let str = 'JavaScript is a pretty good language';

// let space = ' ';
// let big = '';
// let res = '';
// let flag = true;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === space) {
//         flag = true;
//     } else {
//         if (flag === true) {
//             res = res + (str[i].toUpperCase());
//             flag = false;
//         } else {
//             res = res + str[i];

//         }
//     }
// }
// console.log(res);

// let arr = ["a", "b", "c"];
// const obj = {
//     0: "a",
//     1: "b",
//     2: "c"
// }
// let res = '';

// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 !== 0) {
//         res = `${res} ${arr[i]}`;
//    }
// }

// for (let value of arr) {

//     if (value % 2 !== 0) {
//         res = `${res} ${value}`;
//     }
// }

// console.log(arr[0]);
// console.log(obj[0]);

// let list = {
//     name: 'denis',
//     work: 'easycode',
//     age: 29
// };

// for (let key in list) {
//     if (typeof list[key] === 'string') {
//         list[key] = list[key].toUpperCase();
//     }
// }

// console.log(list);

// function findMultiples(integer, limit) {
//     const arr = [];
//     for (let i = 1; i <= limit; i++) {
//         const multi = integer * i;
//         if (multi <= limit) {
//             arr.push(multi);
//         } else {
//             break;
//         }
//     }

//     return arr;
// }

// function findMultiples2(integer, limit) {
//     const arr = [];

//     let i = 1;
//     let multiply = integer * i;

//     while (multiply <= limit) {
//         arr.push(multiply);
//         multiply = integer * ++i;
//     }

//     return arr;
// }

// const a = findMultiples(1, 2);

// console.log(a);

// function paperwork(n, m) {
//     return n < 0 || m < 0 ? 0 : n * m;
// }

// function distanceBetweenPoints(a, b) {
//     const x = Math.pow(b.x - a.x, 2);
//     const y = Math.pow(b.y - a.y, 2);
//     const res = Math.sqrt(x + y);
//     return res.toFixed(6);
// }
// const p1 = { x: 2, y: 2 };
// const p2 = { x: -5, y: -5 };
// console.log(distanceBetweenPoints(p1, p2));

// function replaceDots(str) {
//     let res = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '.') {
//             res = res + '-';
//         } else {
//             res = res + str[i];
//         }
//     }
//     return res;
// }

// console.log(replaceDots("hello.moth.....ckers.hujii"));

// function isOpposite(s1, s2){
//     if (s1.length !== s2.length || s1.length === 0 || s2.length === 0) {
//         return false;
//     }
//     let res = true;

//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] !== s2[i]) {
//             res = false;
//             break;
//         }
//     }

//     return res;
// }

// console.log(isOpposite('dina', 'dina'));

// function countBy(x, n) {
//   let z = [];
//   let a = 0;
// for(let i = 0; i < n; i++) {

// a = x + a
//   z.push(a)
// }
//  return z
// }

// console.log((countBy(3,4)));

//   function sumOfDifferences(arr) {
//     let res = 0;
//     let arrNew = [];
//     for (let i = 0; i < arr.length; i++) {
//       if(arr[i] > arr[i + 1]) {
//            arrNew.push(arr[i])

//         console.log(arrNew);
//       } else if(arr[i] < arr[i + 1]){
//          arrNew.push(arr[i + 1])
//         console.log(arrNew);
//       }
//       return arrNew
//     }

//   }
// console.log((sumOfDifferences([1, 2, 10])));
// console.log(t);

// function find_average(array) {
//   if (!Array.isArray(array) || array.length === 0) {
//     return 0;
//   }
//   const length = array.length;
//   let sum = 0;
//   for (let i = 0; i < length; i++) {
//     sum = sum + array[i];
//     console.log(sum);
//   }
//   return sum / length;
// }

// console.log(find_average([1, 2, 3, 89, 17, 237]));
const age = 999;

function pozdorovajsya() {
  console.log(this);
  return `Hello, my name ${this.name}`;
}

const getName = function () {
  console.log(this.name);
  return this;
};

const getPrice = function () {
  console.log(this.price);
  return this;
};

const getSale = function () {
  console.log(this.price - 10);
  return this;
};

const lhon = {
  age: 42,
  name: "Lhon",
  secondName: "Resfgtyh",
  hobbies: ["football", "cinema", "butscratch"],

  eyes: {
    count: 3,
    color: "green",
    getEyesInfo: function () {
      console.log(this);
      return `I have ${this.count} eyes and they color are ${this.color}`;
    },
  },

  legs: 5,
  sayHello: pozdorovajsya,
};

const serhey = {
  name: "Serhey",
  sayHello: pozdorovajsya,
};

const prod = {
  name: "Intel",
  price: 100,
  getPrice(currency, desc) {
    console.log(`${currency}${this.price} - ${desc}`);
  },
};

const prod2 = {
  name: "AMS",
  price: 250,
};

const prod3 = {
  name: "WER",
  price: 700,
};

// prod.getName().getPrice().getSale();
// prod2.getName().getPrice().getSale();

// prod.getPrice.call(prod2);
// prod.getPrice("UAH", "Sale");
// prod.getPrice.call(prod2, "$", "Eto ne Sale");
// prod.getPrice.apply(prod3, ["Euro", "wojhooi"]);

// const getPriceBindFromProduct3 = prod.getPrice.bind(prod3);
// console.log(getPriceBindFromProduct3("$", "poplo"));
