// const firstName = 'Dmitriy';
// const lastName = 'Demyanov';
// const age = 38;
// const str = 'Hello my name is Dmitriy';

// let value;



// Строки СТРОКИ



// value = `${firstName} ${lastName}`;
// value = firstName[2];
// value = firstName.length;
// value = lastName[lastName.length - 1];
// value = firstName.toUpperCase();
// value = firstName.toLowerCase();
// value = firstName.concat(` ${lastName}  :${age} ${str}.`);
// value = str.indexOf('i',15);
// value = str.includes('is');
// value = str.slice(0, 5);
// value = str.replace('Dmitriy', 'dima');
// console.log(value);

// let str = 'hello my name is Dmitry';

// str = str.slice(-1,);
// str = str.toUpperCase();

// let a = 20;
// let b = 16;
// let str = String (a) + String (b); `${a}${b}`; "" + a + b;
// console.log(str);

// let str = 'hello my name is Dmitry';
// str = str.slice(0, -6);
// console.log(str);

// let str = 'hello my name is Dmitry';
// str = str.slice(5, 10);
// console.log(str);


// let str = 'hello my name is Dmitry';
// str = str.slice(5,  10);
// console.log(str);

// let str = 'hello my name is Dmitry';

// str = str[0];
// str = str[str.length -1];

// let a = str[0].toUpperCase();
// let b = str.slice(1, -1);
// let c = str[str.length -1].toUpperCase();

// str = `${a}${b}${c}`; // a + b + c

// console.log(str);

//object





// const user = {
//     firstName: 'Dmitry',
//     age: 38,
//     isAdmin: true,
//     email: 'test@test.com',
//     'user-address': {
//         city: 'kharkiv'
//     },
//     skills: ['html','css','js']

// };
// let value;
// let prop = 'skills';
//     value = user.firstName;
//     value = user['isAdmin'];
//     value = user['user-address'];
//     value = user['user-address'].city;
//     value = user['user-address']['city'];
//     value = user[prop][0];

//     user.firstName = 'Dima';

//     user.info = 'some imfo';
//     value = user.info;

//     user['user-address'].city = 'Kiev';
//     user['user-address'].country = 'Ukraine';




// console.log(value);
// console.log(user);

// const item = {
//     product: 'iphone', 
// };

// item.price = 1000;
// item.currency = 'dollar';
// item.details = {
//     model: '',
//     color: 'red',
// };
// item.details['year'] = 2022,

//  console.log(item);


//                                                                           ОПЕРАТОРЫ СРАВНЕНИЯ

// > , < >=, <=, ==, ===, != , !==;
// true , false
// let value = 'A '.charCodeAt();   // номер буквы
// console.log(value);

// if(условия) {                   //а Булевому значению
// код который выполница , если условие true
// }
// else{
//если условия выше false
// }
//                                                                   ОПЕРАТОРЫ ЛОГИЧЕСКИЕ

                                                                    // !  --- НЕ
                                                                    // || ---- ИЛИ    к правде
                                                                    // && ---- И      к лжи

// let value = [];
// if (Array.isArray(value)) {                                   //проверяет массив ли это?
//     console.log('yes');
// } else {
//     console.log('no');
// }


// let serverNickname = '';
// let nickname = serverNickname || 'default nickname';

// console.log(nickname);


// let productPrice = 10;

// if (productPrice >= 5 && productPrice <= 20) {
//     console.log('Беру');
// } else {
//     console.log('no');
// }


// let a = 'Dima';
// if (a === 'hidden') {
//     a = 'visible';
// } else {
//     a = 'hidden';
// }

// console.log(a);
// let a = 0;
// if (a === 0) {
//     a = 1 ;
// } else if (a < 0) {
//     a = 'less then zero';
// } else if (a > 0) {
//     a *= 10;
// }
// console.log(a);

// let car = {
//     carName: 'Lexus',
//     age: 10,
//     create: 2008,
//     needRepair: false,
// }
// if (car.age > 5) {
//     console.log('Need Repair');
//     car.needRepair = true;
// }
// else {
//     car.needRepair = false;
// }
// console.log(car);

// let item = {
//     name: 'Intel core i7',
//     price: 500,
//     currency: '$',
//     discount: 15,
// };

// item.price = parseInt(item.price);
// // item.discount = item.discount.parseInt();

// const priceNum = parseInt(item.price);
// const discountNum = parseInt(item.discount);

// let finalPrice = item.price;

// if (!isNaN(discountNum) && !isNaN(priceNum)) {
//     item.priceWithDiscount = `${priceNum - discountNum * priceNum / 100}${item.currency}`;
//     finalPrice = item.priceWithDiscount;
// }

// console.log(finalPrice);

// console.log(item);

// let product = {
//     name: 'Яблоко',
//     price: '40$'
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// let priceNum = parseInt(product.price);

// if (priceNum >= min && priceNum <= max) {
//     console.log(product.name);
// } else {
//     console.log('not found');
// }
                                        //switch


// выражение потом "?" если тру : иначе это условие



// let color = 'yellow';

// switch(color) {
//     case 'yellow' :
//         console.log('color is yellow')
//     break;
//     case 'red' :
//         console.log('color is red')
//     break;
//     default :
//     console.log('Default');

// }




// let a = '';

// switch(a) {
//     case 'block' :
//         console.log('block');
//     break;
//     case 'none' :
//         console.log('none');
//     break;
//     case 'inline' :
//         console.log('inline');
//     break;
//     default : 
//     console.log('other');

// }

// let a = 'hiddenr';
// a = a === 'hidden' ? 'visible' : 'hidden'; 

// console.log(a);

// let c = -1;

// c = c === 0 ? c = 1 : c < 0 ? c = 'less then zero' : c *=10;
// console.log(c);


                                        ///ЦЫКЛЫ

//  while, do while, for, for of, for in.
// let i = 10;
// while(i-- ){
//     console.log(i);
//                           //  тело цыкла будет выполняться пока в круглых скобках будет выражение true 
// }

// let i = -8;
// do {
//     console.log('action');
//     i--;
// } while (i > 0);

// while(i > 0) {
//     console.log(i);
//                           //  тело цыкла будет выполняться пока в круглых скобках будет выражение true 
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }














// let str = 'isada am in the easycode';
// let res = '';

// let start = 0;
// let end = str.indexOf(" ", start); // 5

// while (end > -1) {
//     const word = str.slice(start, end);                 // isada -- am -- in -- the
//     res += `${word[0].toUpperCase()}${word.slice(1)} `; // Isada -- Am -- In -- The
//     start = end + 1;                                    // 6     -- 9  -- 12 -- 16
//     end = str.indexOf(" ", start);                      // 8     -- 11 -- 15 -- -1
// }


// const finalWord = str.slice(start); // easycode
// res += finalWord[0].toUpperCase() + finalWord.slice(1);

// console.log(res);



// let str = 'isada am in the easycode';
// let res = '';

// let start = str.length ;
// console.log(start);

// let end = str.lastIndexOf(' ', start);
// console.log(end);
// while (start > -1) {
//     let word = str.slice(end, start);
//     console.log(word);
//     res += `${word[0].toUpperCase()}${word.slice(1)}`;
//     start = end - 1;
//     end = str.indexOf(" ", start);
// }
// console.log(res);


// let str = 'isada am in the easycode';
// let res = '';

// let end = str.length;
// let start = str.lastIndexOf(' ', end);

// while (start !== -1) {
//     console.log('End: ', end);
//     console.log('Start: ', start); // 15
//     let word = str.slice(start + 1, end + 1);
//     console.log(word);
//     res = `${word[0].toUpperCase()}${word.slice(1)} ${res}`;
    
//     end = start - 1; // 14
//     start = str.lastIndexOf(' ', end); // 11
// }

// word = str.slice(0, end + 1);
// console.log(word);
// res = `${word[0].toUpperCase()}${word.slice(1)} ${res}`;


// console.log(res);

// console.log('End: ', end);
// console.log('Start: ', start); // 15

// let str = 'tseb eht ma i';
// let res = '';

// let length = str.length;
// console.log(length);
// for (let i = 0; i < length; i++) {
//     console.log(str[i]);
//     res = str[i] + res; // t -- st -- est
// }
// console.log(res);

// let res = 1;
// for (let i = 10; i > 0 ; i--) {
//     console.log(i);
//     res = res * i
// }
// console.log(res);

// let str = 'aJavaScript is a pretty good language';
// let length = str.length;
// let res = '';

// let flag = false;

// for (let i = 0 ; i < length; i++ ) {
//     let bukva = str[i];
//     console.log(bukva,i);

//     if (flag || i === 0) {
//         bukva = bukva.toUpperCase();
//         flag = false;
//     }

//     if (bukva !== ' ') {
//         res = res + bukva;
//     } else {
//         flag = true;
//     }
// }
// console.log(res);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let length = arr.length;
// console.log(length);
// console.log(arr);
// let res = '';


// for (let i = 0 ; i < length; i++){ 
//     //res =res + arr[i];
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }   
    
 

// let list = {
//     name: 'denis',
//     work: 'easycode',
//     age: 29, 
//     }

   
//     for (let key in list) {
         
//         if (typeof list[key] == "string") {
//             list[key] = list[key].toUpperCase();
//         }
//     }
//     console.log(list);
//     let foo = { str: 'test' }; 
// console.log(foo && foo.str);

// var x = 1; 
// if (x) {
//   var x = 2; 
//   console.log(x);
// } 
// console.log(x); 


// function sayHello(firstName, lastName, age) {
//     console.log(firstName,lastName);
//     console.log('say Hello');
//     return `${firstName}${lastName}: HELLO`
// }



// let res = sayHello('dmitry', 'Demyanov');
// console.log(res);

// let res2 = sayHello('Dima', 'Demyanov', 38) ;
// console.log(res2);


// let x = 10;


// function num(y) {
//     x = 20;
//     console.log(x);
// }

// num();
// console.log(x);

// let str = 'i am in the easycode';
// let length = str.length; // 19
// let flag = true;
// let res = 'Car ';

// for ( let i = 0; i < length; i++) {
//     console.log(i);
//     const bukva = str[i];

//     if (flag === true) {
//         res = res + bukva.toUpperCase();
//         flag = false;
//     } else {
//         res = res + bukva;
//     }
    
    
//     if (bukva === ' ') {
//         flag = true;
//     }
// }
// console.log(res);

// let str = 'tseb eht ma i';
// let length = str.length;
// for (i = 0; i < length; i++) {

// }


$(document).ready(function(){
    $('.carousel__wrapper')
    .slick({
        autoplay: false,
        prevArrow: '.carousel__box-l',
        nextArrow: '.carousel__box-r',
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true
    });
  })

