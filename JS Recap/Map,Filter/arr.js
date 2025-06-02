let arr = [2, 4, 6, 8, 10];

//map (callback): Calls a defined callback function on each element of an array ,and returns an array that contains the results


let result = arr.map((ele) => {
    return ele * ele;
})
console.log(result);
let arr1 = [4, 16, 64, 81, 121, 144, 169];

let res = arr1.map((e) => {
    return e ** 0.5;
    return Math.sqrt(e);
})
console.log(res);

//Filter
let num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let ans = num.filter((ele) => {
    return ele % 2 == 0;
})
console.log(ans)

let fruits = ["Orange", "apple", "banana", "kiwi", "mango", "grapes"];
let res1 = fruits.filter((ele) => {
    return ele.charAt(1) == "a";
})
console.log(res1)

//Reduce(callback,initial_value)
//calls the specified callback function fotr all the elements in an array.The return 
// value of callback function is accumulated result,and is provided as an argument in
// . the next call to the callback function
//syntax: reduce(acc,val)=>{
//  return acc+cValue
//  }

let arr2=[10,20,30,40,50,60];
let res2=arr2.reduce((p,n)=>{
    return p+n;
})//230 //210
console.log(res2)

let obj={
    username:"raj",
    isMarried:"false",
    age:30
}

//defineproperty(objname,"keyname",{
// value:"", 
// writable:false, //it will specify that can we modify
// configurable:false,//it will specifyn that we can can we delete or not
// enumerable:false //it will specify will it take part iteration or not
// });

Object.defineProperty(obj,"adharno",{
    value:2374782357,
    writable:true,
    configurable:false,
})
console.log(obj)
obj.adharno=1234567890;
console.log(obj);
delete obj.adharno;
console.log(obj);

let obj1={
    name:"stark",
    id:30,
    ispassed:false
}


Object.defineProperty(obj1,"phone",{
    value:1234567890,
    writable:false,
    configurable:false,
    enumerable:true
})
console.log(obj1);
obj1.phone=9876543210;  
console.log(obj1);
delete obj1.phone;
console.log(obj1);

let obj2={
    names:"barry"
}
Object.defineProperty(obj2,"newkey",{
    value:"I'm New Here",
    writable:false,
    configurable:true
})
console.log(obj2)
delete obj2.newkey;
console.log(obj2)

let obj4={
    name:"vikas",
    age:22
}

Object.defineProperty(obj4,"DOB",{
    value:"11-12-2002",
    writable:false,
    configurable:false,
})

console.log(obj4);
obj4.DOB="12"
delete obj4.DOB
console.log(obj4)

//Define Properties
let obj21={
    username:"Raj"
}
Object.defineProperties(obj1,{
    adharno:{
        value:343473,
        writable:false,
        configurable:false
    },
    isMarried:{
        value:false,
        writable:false,
        configurable:false
    }
})
console.log(obj21)

let obj22={
    name:"mohan"
}
Object.defineProperties(obj22,{
    phone:{
        value:"3464363443",
        writable:"true",
        configurable:false
    }
})
console.log(obj22)

