import { createRoot } from "react-dom/client";

//create root lets u create a root to display React Components/jsx elements inside browser DOM
let root = document.getElementById("root");

createRoot(root).render(
    // <H1>Hello World</H1>
    // <img src="" alt="" />
    // <h3 className=""></h3>
    // <label htmlFor="">Enter anything you know</label>
    <div>
        <h1>hello</h1>
        <h2>hiii</h2>
    </div>
)