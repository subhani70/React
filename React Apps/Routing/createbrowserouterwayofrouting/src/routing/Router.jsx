import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import App from "../App";
import NotFound from "../helper/NotFound";

let routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [

            {
                index: true,
                element: <Home />
            },

            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/register",
                element: <Register />
            }

        ]
    },
    {
        path: "*",
        element: <NotFound />
    }



])

export default routes