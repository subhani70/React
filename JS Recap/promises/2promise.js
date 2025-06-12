let otp=new Promise((res,rej)=>{
    let n=Math.floor(Math.random()*10000);
    console.log(n);
    if(n>999 && n<10000){
        res("4 digit OTP generated Successfully")
    }else{
        rej("Failed to generate 4 digit OTP")
    }
})

otp.then((data)=>console.log(data)).catch((err)=>console.log(err))