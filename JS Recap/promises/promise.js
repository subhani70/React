// Promise: It is an object which will represents the eventual completion or failure of an object

//State:
// 1.Pending 
// 2.Fullfilled 
// 3.Failure

// syntax
// new Promise((res,rej)=>{ })

let mp=new Promise((res,rej)=>{
 let network=Math.floor(Math.random()*10)
 console.log(network)
 setTimeout(()=>{
    if(network>5){
        res("data fetched")
    }else{
        rej("404 error")
    }
 },3000)
})

mp.then((data)=>{
    console.log(data)
}).catch((err)=>console.log(err))

