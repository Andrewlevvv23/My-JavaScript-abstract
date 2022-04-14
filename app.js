"use strict"; //modern code mode

let number1 = 5; //declaration of a variable and its value (changeable)
const leftBorderWidth = 1; //declaration of a variable and its value (not changeable)
console.log(number1); //output the result of the command to the terminal console
//_____________________________________________________________________________data type___________________________
let number = 4.6; //numeric data type
console.log(4 / 0); //'Infinity'
console.log("string" * 9); //'NaN' not a namber

let persone = "Andrew"; //string data type (written only in quotes!)
persone = "777"; //also the string

let bool = false; //boolean data type ('yes' or 'no')
bool = true;
//console.log(something); //'NaN' reference to a non-existent object
let und;
console.log(und); //'undefined' empty object

const obj = {
  //object, that combines different types of data
  name: "Andrew", //colon and commas at the end
  age: 24,
  isMarried: false,
};
//console.log(obj.name); // accessed an object property 'name'

let arr = ["plum.png", "orange.jpg", 6, "apple.bmb"]; //an array is a special case of an object
//array, all elements have a serial number and are separated by commas, puts any data types
console.log(arr[1]); //accessing element number 1 'oranhe.jpg'

//______________________________________________________________communication with the user____________________________

alert("Hello"); //pop-up window confirmation, boolean

const result = confirm("Are you here"); //pop-up window with a question to the user, boolean
console.log(result); //output to the console variable 'result'. Boolean type

const answer = +prompt("Вам есть 18?", ""); //question to the user with a field for the answer " ".
console.log(answer); //output user response to console ('+' displays a numeric answer)

const answers = []; //array, with questions in order
answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

console.log(typeof answers); //output to console

//______________________________________________________________________interpolation______________________________

const category = "toys"; //Dynamic interpolation of variable value in unlimited number
console.log(`https://someurl.com/${category}`);

const user = "Andrewlev";
alert(`Привет, ${user}`);

//____________________________________________________________________logical operators_____________________________

console.log("arr" + "- object"); //string of two words
console.log(444 + "- object"); //also a string of numbers and words
//console.log(40 + +"50"); //numeric value with unary plus before '5'

let incr = 10,
  decr = 10;

incr++; //increment operator, increase by one (postfix)
decr--; //decrement operator, decrease by one (postfix)
//prefix operator used in console, plus before value
console.log(incr);
console.log(decr);

//console.log( 2 * 4 = 8 ); //value assignment
console.log(2 * 4 == 8); //value comparison, is it really equal
console.log(2 * 4 === "8"); //strict comparison of values, along with data types

//&& //both options are true (and)
//|| //one of the options is true (or)

const isChecked = true,
  isClose = true;
console.log(isChecked && isClose); //if you add the exclamation operator "!", it will change the value to the opposite

// '!=' not equal,  '!==' strictly not equal together with data types

//__________________________________________________________________система контроля версий 'GIT'______________________
/* git init - инициировать репозиторий
git config --global user.name 'Andrew'   -  имя
git config --global user.email 'Andrew'  - емеил
git status   - проврека контрольных точек объекта (commits)
git add -A  -все файлы репозитория добавляются в локальный GIT
git add main.css -добавить новый css файл в локальный репозиторий
git commit -a -m'first commit' -cохранение в локальный репозиторий, имя файла в каждом менять
git log  -вывод всех созданных коммитов в терминал с датами и названиями
далее закидываем репозиторий в хранилище GitHub копируя ссылку 'git remote add...'
далее сохраняем файл в хранилище с помощью команды 'git push -u origin main'

Добавление нового 'js' файла в существующий репозиторий
git add -A   cохранение на локальный репозиторий GIT
git commit -a -m'add script file'  -добавить новый файл в локальный и удаленный репозиторий
git push  -сохранение на удаленный репозиторий в GitHub

______________________________________________________________cинхронизация между пользователями в 'GIT'_____________
на GitHub скопировать ссылку на репозиторий 'Clone or download'
cкопировать в терминале VSCode данную ссылку и написать название папки для копирования
git pull  -обновление содержания репозитория открыв его с другого ПК !!!
git push  -загрузить измененный файл на удаленный репозиторий в GitHub */

//______________________________________________________________conditions in JS_______________________________________
if (5 == 4) {
  //condition example, they all start with 'if'
  console.log("Ok!");
} else {
  //the second part, works if the condition is not met
  console.log("Error");
}
//!The condition inside the brackets must be converted to boolean 'True' or 'False'

let num = 50;

if (num < 45) {
  console.log("Error");
} else if (num > 100) {
  console.log("Много");
} else {
  console.log("Ok!");
}
//num === 50 ? console.log("Ok!") : console.log("Error");
//the condition      is fulfilled   is not fulfilled      - thanks to the ternary operator '?' and ':'
//50 + 50 //binary operator, two variables
//+50  //unary operator, one variable

const num2 = 100;
switch (num2) {
  //'switch' constructs only for strict matching === !
  case 90:
    console.log("Не верно");
    break;
  case 100:
    console.log("Верно!");
    break;
  default:
    console.log("Не в этот раз");
    break;
}

//______________________________________________________________cycles in JS____________________________________________
let num1 = 77;

while (num1 <= 80) {
  //until the condition is met - perform such and such actions
  console.log(num1);
  num1++; //increment per unit
}

do {
  //using it, first the loop does something and then the condition is checked
  console.log(num1);
  num1++;
} while (num1 < 80); //check condition with 'while'

for (let i = 1; i < 10; i++) {
  //triteration: the beginning of the cycle, the condition for stopping the cycle, the step of the cycle are set
  console.log(num1);
  num1++;
}
//you can break the loop with the condition 'if (i === 8) { break; }' or 'continue' to skip a number or variable

//______________________________________________________________functions in JS_______________________________________
let num3 = 20;

function showFirstMessage(text) {
  //classic function, created before the script is executed
  console.log("text");
  num3 = 60;
}
showFirstMessage("text");
console.log(num3);

function calc(a, b) {
  return a + b; //when the function is run it will return the sum of the two arguments
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 8));

function ret() {
  let num = 50;
  return (num = 50);
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  //the second kind, a function inside a variable, is declared in the course of the code
  console.log("Hello Vasya");
};
logger();

const calc1 = (a, b) => a + b; //shortened version of the classic function

console.log(calc1(10, 800));

//______________________________________________________________methods and properties of strings and numbers__________

const str1 = "test";
const arr1 = [1, 2, 3];
console.log(str1[3]); //will output the letter 't' from 'test'

const logg = "Hello Petro";
console.log(logg.slice(6, 11)); // cut out the word 'Petro'

console.log(logg.substring(6, 11)); //будет тоже самое

const num4 = 12.2;
console.log(Math.round(num4)); //rounding to the nearest whole number

const test2 = "12.2px";
console.log(parseInt(test2)); //the same only for the numeric data type
console.log(parseFloat(test2)); //returns true number without rounding

//______________________________________________________________CallBack- function______________________________________

function first() {
  //500 milliseconds function delay
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  //standard function without delay, displayed first in the console
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback(); //allows code to be executed only after another code's action has completed
}

function done() {
  console.log("Я прошел этот урок");
}

learnJS("JavaScript", done); //passing the 'done' function

//______________________________________________________________Object destructuring______________________________

const options = {
  name: "test", //name
  width: 1024, //width
  height: 1024, //height
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    //method inside an object
    console.log("Test");
  },
};

options.makeTest(); //run this method

const { border, bg } = options.colors; //destructuring, removed properties from an object as separate variables

console.log(Object.keys(options).length); //show the number of elements in an object
delete options.name; //removing a property from an object
let couner = 0; //show the number of properties in an object
//counter++; //enter at the end of the condition for counting properties in the object

for (let key in options) {
  //way to iterate 'for' 'in', change properties inside the object
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}

//______________________________________________________________arrays and imaginary arrays____________________________

const arr2 = [2, 3, 6, 8, 10];
//arr2.pop(); //removes the last element from the array
//arr2.push(10); //adds an element at the end of the array
console.log(arr2);

for (let i = 0; i < arr2.length; i++) {
  //the loop will work until the objects inside the array run out
  console.log(arr2[i]); //to access an element of an array, you need to put it in '[]'
}

for (let value of arr2) {
  //enumeration design 'for...of' ('value' display of each individual element) can be stopped with the 'break' command
  console.log(value); //it turns out the same result as in the above array, it works only with arrays!
}
let arr3 = [2, 3, 6, 8, 9];
arr3.forEach(function (item, i, arr3) {
  console.log(`${i}: ${item} inside an array ${arr3}`);
}); //method, meeting to iterate over all elements inside an array

const str = prompt("", "");
const products = str.split(", "); //created an array of strings
console.log(products.join("; ")); //glued the array into one line
products.sort(); //sorts the elements, but only lines!

function compareNum(a, b) {
  return a - b;
}

//______________________________________________________________Prototyping Legacy__________________________________
let str3 = "some";
//let str3Obj = new String(str3); //created an object which turned back into a string

console.log(typeof str3);
console.log(typeof str3Obj);

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

const jonh = Object.create(soldier); //allows you to take properties from the object's prototype
jonh.sayHello();
