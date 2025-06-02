// export function hello(){
//     console.log("Hello world")
// }

// export let names="stark"

// export let user={
//     uname:"raj",
//     age:30,
//     ismarried:false
// }

// export let skills=["Html","css","JS"]

import {sum} from "./app.js"
 function hello(){
    console.log("Hello world")
}

 let names="stark"

 let user={
    uname:"raj",
    age:30,
    ismarried:false
}

 let skills=["Html","css","JS"]
 export {hello,names,user,skills}
sum();

export default function add(){
    console.log("Addition is done")
}
