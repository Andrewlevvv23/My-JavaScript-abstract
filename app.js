"use strict"; //modern code mode

let number1 = 5; //declaration of a variable and its value (changeable)
const leftBorderWidth = 1; //declaration of a variable and its value (not changeable)
console.log(number1); //output the result of the command to the terminal console
/*
 autoSizeWidth - 'CamelCase'
 auto_size_width - 'Snake_Case'
 AUTO_SIZE_WIDTH - 'APR_Case', used for constants!
 _autoSizeWidth - '__CamelCase' used for constants!
 auto-size-width - 'Kebab-Case'
 AutoSizeWidth - 'PascalCase', to designate classes
*/
//_____________________________________________________________________________data type___________________________
let number = 4.6; // numeric data type
console.log(4 / 0); // 'Infinity'
console.log("string" * 9); //'NaN' - not a namber

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

const ARR = [1, 2, 3]; //array, list of information in order
console.log(ARR[1]); //get "2"

const OBJ = { a: 1, b: 2 }; //object, data storage structure in pair format, key-value
OBJ.C = "123445"; //added a new property to the object

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
console.log(`https://someurl.com/${category}`); //bebtics are used ``

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

console.log(logg.substring(6, 11)); //will be the same

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

//______________________________________________________________arrays and false-arrays  ____________________________

const arr2 = [2, 3, 6, 8, 10];
//arr2.pop(); //removes the last element from the array
//arr2.push(10); //adds an element at the end of the array
console.log(arr2);

for (let i = 0; i < arr2.length; i++) {
  //the cycle will work until the objects inside the array run out
  console.log(arr2[i]); //to access an element of an array, you need to put it in '[]'
}

for (let value of arr2) {
  //search method 'for...of' ('value' display of each individual element) can be stopped with the 'break' command
  console.log(value); //it turns out the same result as in the above array, it works only with arrays!
}
let arr3 = [2, 3, 6, 8, 9];
arr3.forEach(function (item, i, arr3) {
  console.log(`${i}: ${item} inside an array ${arr3}`);
}); //method, allowing iteration of all elements inside the array

const str = prompt("", "");
const products = str.split(", "); //created an array of strings
console.log(products.join("; ")); //glued the array into one line
products.sort(); //sorts the elements, but only lines!

function compareNum(a, b) {
  return a - b;
}

//______________________________________________________________pass by reference, "spread" operator__________________

function copy(mainObj) {
  //this function with a cycle, will create a new object with the old properties
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const nweNumbers = copy(numbers); //copied array "numbers" with all properties

nweNumbers.a = 10; //changed the property in the copy of the array
nweNumbers.c.x = 100; //does not change! nested arrays do not change!
//______second way
const add = {
  d: 17,
  e: 20,
};
const clone = Object.assign({}, add); //I put the numbers object in a new empty object
clone.d = 20;

console.log(add);
console.log(clone);
//______third way
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "h";
console.log(newArray);
console.log(oldArray);
//_____fourth method ('spread' operator)
const video = ["youtube", "vimeo", "rurube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"]; //operator '...' inserts other loops

console.log(internet); //this operator also works for objects

const arrayyy = ["a", "b"];
const newArrayyy = [...arrayyy]; //copied the properties of the previous array

//_______________________________________________________________________________basics of "OOP"____________________

const soldier = {
  health: 400,
  armor: 100,
};

const jonh = {
  health: 100,
};

Object.setPrototypeOf(jonh, soldier); //assign properties to john from soldier prototype
console.log(jonh.armor); //'100', took over the property from the prototype

const jonh2 = Object.create(soldier); //second improved way to adopt properties from a prototype
console.log(jonh2.armor); // '100'
//____________________________________________________________________deleting errors in the console. Breakpoints_____

/*In the console go to the folder "Sources". In this tab, you can set
 breakpoints in any of the lines to check a specific section of the code

 function Hello() {
  console.log("Hello World");
  debugger; //stop code debugging in console!
} */
//____________________________________________________________________dynamic typing in JS_____________________________

//To String
console.log(typeof String(null)); //turned "null" into a string
console.log(typeof String(44)); //...the same

console.log(typeof (6 + "")); //...the same

const num5 = 5;
console.log("https://vk.com/catalog/" + num); //added a number to the string

const fontSize = 26 + "px"; //...the same

//To Number
console.log(typeof Number("7")); //turned "string" into a number
console.log(typeof +"7"); //...the same
let answ = +prompt("Hello", ""); //...the same

//To boolean
// 1)
//0, '', undefined, NaN - false!
let swicher = null; // 'false'. Condition not will work!
if (swicher) {
  console.log("Working...");
}

swicher = 1; //turned 'false' in the 'true'. Condition will work!
if (swicher) {
  console.log("Working...");
}
// 2)
console.log(typeof Boolean("9")); //turned in console - 'boolean'
// 3)
console.log(typeof !!"9"); //...the same. Operator '!!'

//____________________________________________________________________tasks from interviews_____________________________
//1
let x = 5;
alert(x++); //5, postfix
let xx = 5;
alert(++xx); //6, prefix
//2
// [] + false + null + true;  = NaN
console.log([] + false); //'false'
console.log("false" + null); //NaN
console.log(NaN + true); //NaN
//3
/* let p = 1;
   let x1 = p = 2;
   alert(x1);  = 2   */
//4
console.log([] + 1 + 2); // =12 ...  [ ] == " "
//5
alert("1"[0]); // =1
//6
console.log(2 && 1 && null && 0 && undefined); // null (stops at lies)
//7
// console.log(!!(k && g) == (k && g)); // first boolean, second string "!="
//8
alert(null || (2 && 3) || 4); // = 3 ,('||' stops at true)
//9
const g = [1, 2, 3];
const l = [1, 2, 3];
//g !== l; since these are two separate cycles!
//10
alert(+"Infinity");
// Infinity (number data type)
//11
console.log("Ежик" > "Яблоко"); //Folse!
//12
console.log(0 || "" || 2 || undefined || true || false);
//  = 2 (stops at true)
//____________________________________________________________________getting elements from the page____________________

const Box = document.getElementById("Box");
console.log(Box); //pulled an ELEMENT from the page by ID

const Btns = document.getElementsByTagName("Button")[1];
console.log(Btns[1]); //pulled the TAG from the page by ID (pseudo array)

const Circles = document.getElementsByClassName("Circles");
console.log(Circles); //pulled the CLASS from the page by ID

const Hearts = document.querySelectorAll(".Heart");
console.log(Hearts); //extract CSS selector from document
Hearts.forEach((item) => {
  console.log(item);
}); //output one by one all the elements in the 'hearts' array

const OneHeart = document.querySelector(".Heart");
console.log(OneHeart); //get only one element from the page
//____________________________________________________________________action on elements on the page____________________

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button")[1],
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

console.dir(box); //checking object properties

box.style.backgroundColor = "blue"; //changing color properties
box.style.width = "500px"; //changing width properties

btns[1].style.borderRadius = "100%"; //change properties of roundings
circles.style.backgroundColor = "red";

box.style.cssText = `background-color: blue; width: 500px`; //changing text properties

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
}); //changing the properties of multiple elements

const div = document.createElement("div"); //created element inside JS
const text = document.createTextNode("Тут был я"); //outputting text to a document

wrapper.prepend(div); //moves the block up

hearts[0].before(div); //put a block before the specified element
hearts[0].after(div); //put a block after the specified element

circles[0].remove(); //removing an element from a page

hearts[0].replaceWith(circles[0]); //replacing an element with another

div.innerHTML = "Hello Piska"; //insert text into element
div.innerHTML = "<h1>HELLO PISKA</h1>"; //you can also insert HTML structure

div.insertAdjacentHTML("afterbegin", "<h2>Who are you bitch</h2>"); //put text at the beginning of the element
div.insertAdjacentHTML("afterand", "<h2>Who are you bitch</h2>"); //put text after element

//_________________________________________________________________________events and handlers_________________________

const btn = document.querySelector("button"),
  overlay = document.querySelector(".overlay"); //nested event

btn.addEventListener("click", () => {
  alert("Click"); //perform action on click
});

btn.addEventListener("mouseenter", () => {
  alert("Hover"); //perform mouse hover action
});

btn.addEventListener("mouseenter", (e) => {
  console.log(e); //getting the properties and contents of an object
  console.log(e.target); //triggering an event on a specific element
  e.target.remove(); //removed a specific property from an object
});

let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  i++;
  if (i == 1) {
    //condition ends
    btn.removeEventListener("Click", deleteElement); //remove event handler
  }
};

const deleteElement1 = (e) => {
  console.log(e.target);
  console.log(e.type);
};
overlay.addEventListener("Click", deleteElement);
/* fires first because it is nested more than the parent this is called "popup event", 
 when this action fires first on a nested element and then rises to the top of the hierarchy of our DOM tree */

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault(); //canceled the default action!
  console.log(event.target);
}); //callback function to override default browser behavior

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement);
}); //assigned the same event handler to multiple elements at once!

//_________________________________________________________________________DOM elements navigation____________________

console.log(document.head); //let's jump to the file header
console.log(document.documentElement); //let's go to the whole file
console.log(document.body.childNodes); //go to the child from the "body"

console.log(document.body.firstChild); //having a first child 'body'
console.log(document.body.lastChild); //getting the last child 'body'

console.log(document.querySelector("#currenr").parentNode); //get parent '#current'

console.log(document.querySelector("[data-current='3']").nextSibling); //line break

console.log(document.querySelector("[data-current='3']").previousSibling); //get previous neighbor
console.log(document.querySelector("[data-current='3']").nextElementSibling); //get next neighbor

for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") {
    continue; //stop cicle iteration
  }
  console.log(node);
}

//_________________________________________________________________________events on mobile devices____________________

// touchstart - возникновение касания к елементу
// touchmove - если палец при касании смещается с элемента
// touchend - палец оторвался от элемента
// touchenter - ведем палец по экрану и попадаем на элемент
// touchleave - палец вышел за пределы элемента
// touchcancel - палец вышел за пределы браузера

window.addEventListener("DOMContentLoaded", () => {
  //большой обработчик события, прогружает все 'DOM' узлы
  const box = document.querySelector(".box"); //вытянул с верстки элемент 'box'

  box.addEventListener("touchstart", (e) => {
    //оброботчик событий связанный с мобильными устройствами
    e.preventDefault(); //отмена стандартного поведения браузера
    console.log("Start");
    console.log("e.touches");
  });
});

//toches - выдает список всех пальцев, которые взаимодействуют с экраном
//targetTouches - выдает количество пальцев, которые взаимодействуют с элементом
//changedTouches - список пальцев, которые учавствуют в текущем событии

//_____________________________________________________________________Async, defer, dynamic scripts________________

//Always place scripts at the end of the document!

//<script defer src='js/script.js'></script>;  - waits for the layout to be ready, after that it launches JS
const p = document.querySelectorAll("p");
console.log(p);

//<script async src='js/script.js'></script>;  - does not depend on the DOM structure, works immediately after loading
const t = document.querySelectorAll("t");
console.log(t);

const script = document.createElement("script"); // dynamic TAG-script
script.src = "js/test.js"; //link to 'JS' file
script.async = false; //reversed the async behavior
document.body.append(script); //placing an element on the page
