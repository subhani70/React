//class:Javascript classes are syntactic sugar over the prototype-based inheritance model.
//todo : syntax

//class is keyword

//class classname{
    // members of class
    //1.constructor
    //2.static variable
    //3.static method
    //4.non-static variable
    // 5.non-static method
//}

//constructor :The constructor method() is a special method within a class that is automatically called when an object is created using the new keyword.
//It initializes the object's properties.

class Demo{
    //constructor method
    constructor(){
        console.log("i'm constructor")
    }
    //static variable
    static isMarried=false;

    //non static variable
    salary=20000;

    //static method
    static sayHi(){
        console.log("i'm static method")
    }

    //non static method
    sayHello(){
        console.log("i'm non static method")
    }
}
//accesing static
console.log(Demo.isMarried);

//calling static method
Demo.sayHi();

//if u want to call the nonstatic member of class create an instance of class

let d1=new Demo();
d1.sayHello();

console.log(d1.salary)