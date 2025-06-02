import { createRoot } from 'react-dom/client';

let root = document.getElementById('root');

let name = "stark"
const user = {firstName: "Tony", lastName: "Stark" }
let greeting = () => (`Hello ${name}`);
createRoot(root).render(
    <div>
        <h1>{greeting()}</h1>
    
        <p>
            User : {user.firstName} {user.lastName}
        </p>
    </div>
);