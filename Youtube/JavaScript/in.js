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
console.log(color)

// ternary operators
let check = age>18?"adult":"not adult";
console.log(check)