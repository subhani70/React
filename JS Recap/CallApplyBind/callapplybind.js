//call()

let user={
    username:"Raj",
    age:30,
    ismarried:false
}

function demo(a,b){
    console.log("a  "+a)
    console.log(this);
    console.log(a+b);
    console.log(this.age);
    console.log(this.ismarried)
}

demo.call(user,10,20); //it'll point to the user object
demo()//it'll point  to window object

//apply()
//thee specified array for the arguments of the function

demo.apply(user,[40,30])//it will point tpo the user object
demo()//it'll point to the window object


//BIND

let res=demo.bind(user); //it will return new function
console.log(res);
res(10,20);
