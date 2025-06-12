let me={
    name:"Stark",
    age:22,
    ismarried:false
}
function show(a,b){
    console.log(this.name);
    console.log(a+b);
    console.log(this.age);
    this.ismarried ? console.log("Married") : console.log("Single");
}

show.call(me,10,20);