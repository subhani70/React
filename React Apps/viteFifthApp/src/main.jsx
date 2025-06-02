import { createRoot } from 'react-dom/client'
let ename="Raj";
let num1=20;
let num2=30;

let isLoggedIn = false;
let greeting=()=>"Hello People"
createRoot(document.getElementById('root')).render(
<div>
  <h1>{ename}</h1>
  <h1>{num1+num2}</h1>

  <h2>{isLoggedIn?"Welcome back" :"Please Login"}</h2>
  <h2>{greeting()}</h2>
</div>
)