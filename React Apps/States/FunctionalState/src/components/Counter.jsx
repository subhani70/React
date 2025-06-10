import { useState } from "react"

const Counter = () => {
    let [count, setCount] = useState(0);
    let [username] = useState("John");
    let [islogged, setIsLogged] = useState(false);

    const increase = () => {
        setCount(count + 1);
    }
    let log = () => {
        if(islogged==true){
            setIsLogged(false);
        }else{
            setIsLogged(true);
        }
    }
    return (
        <> <h1>Counnt is :{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={() => setCount(count - 1) }>Decrease</button>
            <button onClick={() => {setCount(0); setIsLogged(true)} }>Reset</button>

            <h1>Username is : {username}</h1>
            <h1>{islogged?"LoggedIn Successfully":"You should login❤️"}</h1>
            <button onClick={log}>login</button> &nbsp;
            {/* <button onClick={logout}>logout</button> */}
        </>
    )
}

export default Counter;