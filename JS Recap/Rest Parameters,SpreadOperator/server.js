//Rest parameters
function demo(a,b){
    console.log(a+b);
    console.log(arguments[3]);
    console.log(a+b+arguments[2]+arguments[3]);
}

demo(10,35,50,55);
//Note: arguments object is not present in aroow function to overcome with this we use rest parameters
//Rest parameters: It is a special syntax that allows us to represent an indefinite number of arguments as an array
//it allows us to pass indefinite number of arguments
//Note: rest parameters should be the last parameter
//syntax: ...parameterName

let sum=(a,...args)=>{
    console.log(a);
    console.log(args);
}
sum(10,20,30,40,50);

//Spread operator
//IT ALLOWS US TO SPREAD THE VALUES OF AN ARRAY OR OBJECT
//syntax: ...array_name/object_name

let arr=[10,20,30,40,50];

console.log(arr);
console.log(...arr);//spreading the values of an array

//merging two arrays
let arr1=[1,2,3];      
let arr2=[4,5,6];
let arr3=[...arr1,...arr2];
console.log(arr3);

//copying one array to another  
let array=["html","css","js"];
let copyarray=["Raect",...array];
console.log(copyarray);
//copying one object to another     
let obj1={name:"John",age:25};
let obj2={...obj1};
console.log(obj2);
//copying one object to another with new properties 
let obj3={
    ...obj1,
    city:"New York",
    country:"USA"
}

//spread operator with object
let user={
    name:"Raj",
    age:30,
    ismarried:false
}
console.log({name:"vishal",...user,contact:9876543578});
//the above code name will be overwritten by the name property of the user object
//the above code will create a new object with the properties of the user object and the new properties

//merging two objects
let laptiop={   
    brand:"Dell",
    price:50000,
    color:"black"
}
let mobile={
    company:"Samsung",
    cost:20000,
    battery:"4000mah"
}
let elctronics={...laptiop,...mobile};
console.log(elctronics);

function sum(a,b,c,d,e,f){
    console.log(a+b+c+d+e+f);
}
