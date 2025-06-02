import {createRoot} from 'react-dom/client';

let root=document.getElementById('root');
let name="stark"

let leave=()=>(`you can close the browser mr.${name}`);
createRoot(root).render(
    <div>
        <h2>Welcome, {name.toUpperCase()}!</h2>
        <p>Today is {new Date().toLocaleDateString()}.</p>
        <h4>{leave()}</h4>
    </div>
);