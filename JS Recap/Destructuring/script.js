//! Destructuring :Extracting the properties of an object or elements of an array with the help of key and distinct variables.

//! Array Destructuring: It is the process of extracting the elements of an array with the help of distinct variables. 

//Syntax:
//? var_declaration []=arr_reference_variable

let arr=[10,20,30,40,50]
let [a,b,c,d,e]=arr;
console.log(a);
console.log(d);
let [aa,,,dd,ee]=arr;//skipping 20,30 values
console.log(aa,dd,ee)

//nested array
let arr2=[10,20,30,40,["HTML","CSS","JS"]];
console.log(arr2[4][2]);//normal way
let [p,q,r,s,[t,u,v]]=arr2;
console.log(u)

let [pp,qq,rr,ss,tt]=arr2;
let [x,y,z]=tt;
console.log(y);


//Object Destructuring
//It is  the process of extracting the values of an object with the help of keys

//syntax: var_declaration {}=obj_reference_variable
console.log("------------Object Destructuring")
let user={
    username:"Raj",
    age:30,
    ismarried:false
}

let {username,age,ismarried}=user;

console.log(username);
console.log(age);
console.log(ismarried);

//Nested Object
console.log("------------------netsed object")
let user2={
     username2:"Raj",
    age2:30,
    ismarried2:false,
    address:{
        username2:"Alias Name",
        street:"Punjagutta",
        city:"hyderabad",
        contacts:[123435,3252345],
        state:"Tg"
    }
}

//Note if the obj is having same key as outer obj in a inner object then we use alias Name       
console.log("--------------------Aliasname")  
let {username2,age2,ismarried2,address:{username2:aliasName,street,city,state,contacts:[g,h]}}=user2;

console.log(username2,state,city);
console.log(g);
console.log(aliasName)

let za=10; //it is present in script scope
console.log(window.za);
/*
za is declared using let, so it is block-scoped (local to the script/module or block where it is defined).
It is not added to the window/global object. That's why window.za is undefined.
*/