console.log("-----------question")
let arr3=[{age:30},{ismarried:false},["html","Css","Js"],null,undefined,function(){
    console.log("Hello man");
}]

let [{age},{ismarried},[a,b,c],d,e,f]=arr3;

console.log(age,ismarried,a,b,c,d,e);
f();