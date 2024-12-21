const product = {
    name: "Parker jotter ball pen",
    Rating: 4,
    isDeal: true,
    price: 270,
    offer: 5
};

console.log(product);

const profile = {
    userName: "@shradhakhapra",
    isFollow: false,
    follower: "569k",
    posts: 195,
    fullName: "Shradha Khapra",
    designation: "Entrepreneur",
    bio: " Apna colloge | Ex-Microsoft, DARDO , To educate someone is the privilege"
};

console.log(profile);

// Arthimetic operators
let a = 5;
let b = 6;
console.log("a=", a, "& b=", b);
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a%b=", a%b);
console.log("a**b=", a**b);

// Unary operators

console.log("a--=", a--);
console.log("a=", a);

console.log("--a=", --a);
console.log("a=", a);

console.log("a++=", a++);
console.log("a=", a);

console.log("++a=", ++a);
console.log("a=", a);


//Assigment operators
a += b; //a = a+b
console.log("a += b = ", a);

a -= b; //a = a-b
console.log("a -= b = ", a);

a *= b; //a = a*b
console.log("a *= b = ", a);

a **= b; //a = a**b
console.log("a **= b = ", a);

a %= b; //a = a%b
console.log("a %= b = ", a);

// Comparison operators

let c = 5;
let d = 6;

//equal to ==

console.log("5 == 6", a == b);//false
console.log("6 == 6", b == d);//true

//not equal to !=

console.log("5 != 6", a != b);//true
console.log("6 != 6", d != b);//false

//less than <

console.log("5 < 6", a < b);//true
console.log("6 < 5", b < a);//false

// greatar than 

console.log("5 > 6", a > b);//false
console.log("6 > 5", b > a);//true

// and so on greatar than equal to >= & less than equal to <=

//Logical Operator

// AND && operators

let cond1 = a < b;//true
let cond2 = a == 5;//true
let cond3 = b != 6;//false
let cond4 = a != 5;//false
console.log( "cond1 && cond2", cond1 && cond2);//true
console.log( "cond3 && cond2", cond3 && cond2);//false
console.log( "cond3 && cond4", cond3 && cond4);//false

// OR || operator

console.log( "cond1 || cond2", cond1 || cond2);//true
console.log( "cond4 || cond2", cond4 || cond2);//TRUE
console.log( "cond3 || cond4", cond3 ||cond4 );//false

//conditonal statements

// if else statement
let mode = "blue";
let color;
// let dark = "dark";
if (mode === "dark"){
   color = "black";

} else {
   color = "white"
}
console.log(color);

// odd or even 
 let num = 10;
 if(num%2===0){
    console.log("even");
 } else{
    console.log("odd");
 }

 //syntax --> rules

 //else-if statements

 let age = 25;
 if(age<18){

    console.log("junior");

 } else if (age>60){

    console.log("senior");

 }else{

    console.log("middle");
 }

 // mode 
if(mode == "dark"){

   color = "dark";

}else if (mode == "blue"){
   color = "blue";
}else if (mode == "pink"){
   color="pink";
}else{
   color = "white";
}
console.log(color);

// ternary operators
let check = age>18?"adult":"not adult";
console.log(check);

alert("Hello");//one time popup

// let fullHikeName = prompt("Hello");

// console.log(fullHikeName);

// Check if number is multiple of 5 or not

let num1 = 56

if (num1 % 5 == 0) {
   console.log(num1, "Number is multiple of 5");
}else {
   console.log(num1, "Number is not multiple of 5");
}
 
// for loop

for(let i = 1; i <= 5; i++){
   console.log(i);
}

// while loop

let i = 1;

while(i<=5){
   console.log(i);
   i++;
}

//do-while loop

do{
   console.log(i);
   i++;
}while(i<=6);

//for-of loop
let fruits = ["Apple", "Banana", "Papaya"]
for(let fruit of fruits){
   console.log(fruit);
}

//for-in loop
let person = {
   name: "John",
   age: 25,
}
for(let key in person){
   console.log(key, person[key]);
}

//Practice Qs : 1 
for(let num = 0; num <= 100; num++){
   if(num % 2 == 0){
      console.log(num);
   }
}

//Practice Qs 2
let gameNum = 9999;
let userNum = prompt("Guess the number : ");

while (userNum != gameNum){
   userNum = prompt("You entered wrong number. Guess again: ");
}

console.log("Congratulations , you on the game");

//String

let str = "Aryan";
console.log(str[2]);
console.log(str.length);

// Method in JS

let str1 = "Hello   :";
let str2 = "Aryan";
console.log(str1.toUpperCase());

console.log(str1.toLowerCase());
console.log(str1.trim());
console.log(str1.slice(1, 5));
console.log(str1.replace("Hello", "Hi"));
console.log(str1.concat(str2));
console.log(str1.split(" "));
console.log(str2.charAt(4));

//QS 1 
// prompt the user to enter their fullname. generate the username for them based on input. start username with @ followed by their fullname
// and ending with their fullname length.

let fullName1 = prompt("Enter your full name: ");
let username = "@" + fullName1 + fullName1.length;

console.log(username);

// Arrays

let arr = ["Maths", "Physics", "Chemistry", "Mechanics", "Programming"];

console.log(arr);

for (index = 0; index < arr.length; index++){
   console.log(arr[index]);
}

let arr1 = ["Delhi", "Mumbai", "Kolkata", "Chennai"];
for(let index of arr1) {
   console.log(index);
}

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for(let mark of marks) {
   sum += mark;
}

console.log(sum);

let average = sum / marks.length;

console.log(`Average marks of class = ${average}`);


let arrIteams = [250, 645, 300, 900, 50];
let l = 0;
for (let val of arrIteams) {
   let offer = val * 0.1;
   arrIteams[l] = arrIteams[l] - offer;
   console.log(`Value after discount = ${arrIteams[l]}`);
   l++;
}

for (let i = 0; i < arrIteams.length; i++) {
   let offer = arrIteams[i] * 0.1;
   arrIteams[i] -= offer;
   console.log(`Value after discount = ${arrIteams[i]}`);
}

let cities = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore"];

cities.push("GKP", "Lucknow", "Agra", "Jaipur");
console.log(cities);

let del = cities.pop();
console.log(del);
console.log(cities);

console.log(cities.toString);

let  del1 = cities.shift();
console.log(del1);

let citie = cities.concat(del);
console.log(citie);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(companies.unshift());

console.log(companies);

companies.splice(2, 1 , "Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);

// Functions

function su(x, y){
   console.log(x+y);
}
su(10, 20);

function add(x , y){
   s = x + y;
   return s;
}

console.log(add(10, 20));

//Arrow functions it is introduce in Modern Js

const arrowSum = (a , b) => {
   console.log(a + b);
};

const arrowMul = (a , b) => {
   return a * b;
};

arrowSum(25 , 30);
console.log(arrowMul(10 , 20));

//Create a function using "Function" keyword that takes a string as an argument and returns the number of vowels in the string.

function countVowels(str){
   let count = 0;
   for (const char of str){
      if (char === "a"|| 
         char === "i" ||
         char === "e" ||
         char === "o" ||
         char === "u"){
         count++;    
   }
} 
return count;
}

