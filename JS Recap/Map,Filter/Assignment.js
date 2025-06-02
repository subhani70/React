//map
let a1 = [22, 33, 44, 55, 66];
let ans = a1.map((ele) => {
  return ele / 2;
})
console.log(ans);

let a2 = ["Harry", "Potter", "Fastest", "Guy"];
let ans2 = a2.map((e) => {
  {
    return e.toUpperCase();
  }
})
console.log(ans2)

//filter
let a3 = [2, 5, 3, 44, 66, 23, 5, 77, 65, 13, 24];
let ans3 = a3.filter((e) => {
  return e % 2 == 1;
});
console.log(ans3);

let ages = [11, 22, 30, 22, 18, 19, 20, 21, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
let adults = ages.filter((age) => age >= 18);
console.log(adults);

//reduce
let a4 = [10, 20, 30, 40, 50];
let ans4 = a4.reduce((acc, ele) => {
  return acc * ele;
}, 0);
console.log(ans4);
let a5 = [10, 20, 30, 40, 50];
let ans5 = a5.reduce((acc, ele) => {
  return acc / ele;
}, 0);
console.log(ans5);

//obj property 
let person = {
  username: "Stark",
  age: 30,
  isMarried: false
};
Object.defineProperty(person, "salary", {
  value: 80000,
  writable: true,
  configurable: true,
});
console.log(person);
let obj4 = {
  name: "vikas",
  age: 22
}

Object.defineProperty(obj4, "DOB", {
  value: "11-12-2002",
  writable: false,
  configurable: false,
})

console.log(obj4);


//obj properties
let obj22 = {
  name: "mohan"
}
Object.defineProperties(obj22, {
  phone: {
    value: "3464363443",
    writable: "true",
    configurable: false
  }
})
console.log(obj22);
let car = {
  avilable: true,
  color: "red",
};
Object.defineProperties(car, {
  brand: {
    value: "Toyota",
    writable: true,
    configurable: true
  },
  year: {
    value: 2022,
    writable: true,
    configurable: true
  }
});
console.log(car);
