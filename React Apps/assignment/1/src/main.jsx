import {createRoot} from 'react-dom/client';

let root=document.getElementById('root');
let name="stark"

let greeting=()=>(`Hello ${name}`);
createRoot(root).render(
<div>
    <h1>{greeting()}</h1>
</div>
);