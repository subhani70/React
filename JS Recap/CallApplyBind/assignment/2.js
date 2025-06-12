function greet(greeting,g) {
    console.log(greeting +" "+ this.name);
    console.log("Welcome to JS "+ this.name);
    console.log("Your Trainer : "+ this.trainer+" sir");
    console.log(g+" "+ this.name);
}

const person = { 
    name: 'barry' ,
    trainer:'shiva'
};

greet.apply(person, ['Hello','Bye']);

let res=greet.bind(person, 'Hi', 'Goodbye');    
res(); 

