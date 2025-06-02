//Array destructuring 
let arr=["hello","world","str","ng","js"];  
let [a,b,c,d,e]=arr;
console.log(a); 
console.log(b);
console.log(c);
let arr2=['ss','dd','ff','gg','hh'];
let [aa,bb,cc,dd,ee]=arr2;  
console.log(aa);
console.log(bb);

//Object destructuring
let obj={
 names:"malli",
 age:30,
 isEmployed:true,
}

let {names,age:AGE2,isEmployed}=obj;
console.log(names);
console.log(AGE2);

let obj2={
    names2:"arjun",
    age2:40,
    isEmployed2:true,
}
let {names2,age2,isEmployed2}=obj2;
console.log(names2);

//Array and Object destructuring
let nestedArrObj = [
    { id: 1, info: { name: "John", age: 25 } },
    { id: 2, info: { name: "Smith", age: 28 } }
];
let [
    {id, info: { name: firstName } },
    {id:secondId, info: { age: secondAge } }
] = nestedArrObj;
console.log(firstName);
console.log(secondAge);

let objArr = {
    group: [
        { title: "Lead", member: "Alice" },
        { title: "Dev", member: "Bob" }
    ]
};
let {
    group: [
        { member: leadMember },
        { title: devTitle }
    ]
} = objArr;
console.log(leadMember);
console.log(devTitle); 

let person = {
    name: " Subhani Stark",
    greet: function() {
        console.log("Hi, I'm Subhani Stark");
    },
    Bye() {
        console.log("Bye buddy");
    }
};
person.greet();
person.Bye();

let car = {
    brand: "Toyota",
    start: function() {
        console.log("Car started");
    },
    stop() {
        console.log("Car stopped");
    }
};

car.start();
car.stop();

let book = {
    title: "JavaScript Guide",
    read: function() {
        console.log("Reading the book");
    },
    close() {
        console.log("Done with studying");
    }
};
book.read();
book.close();

let animal = {
    type: "Dog",
    bark: function() {
        console.log("Barking");
    },
    sleep() {
        console.log("sleeeping");
    }
};
animal.bark();
animal.sleep();