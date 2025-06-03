import {createRoot} from 'react-dom/client';

let container = document.getElementById('root');
let city = "New York";
let a=5;
let b=10;
let welcomeMessage = () => (`Welcome to ${city}!`);

createRoot(container).render(
    <div>
        <h2>{welcomeMessage()}</h2>
        <p>{a+b}</p>
    </div>
);