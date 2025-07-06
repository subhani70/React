import { createBrowserRouter } from "react-router-dom";
import Helper from "../Helper";
import App from "../App";
import Store from "../pages/Store";
import Home from "../pages/Home";
import Phones from "../pages/Phones";
import Tablets from "../pages/Tablets";
import TVSmart from "../pages/TVSmart";
import Discover from "../pages/Discover";
import Support from "../pages/Support";
import SmartWatch from "../pages/SmartWatch";

let routes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>

            },{
                path:"/store",
                element:<Store/>
            },
            {
                path:"/phones",
                element:<Phones/>
            },
            {
                path:"/tablets",
                element:<Tablets/>
            },
            {
                path:"/tvsmart",
                element:<TVSmart/>
            },
            {
                path:"/smartwatch",
                element:<SmartWatch/>
            },
            {
                path:"/discover",
                element:<Discover/>
            },
            {
                path:"/support",
                element:<Support/>
            }

        ]

    },
    {
        path:"*",
        element:<Helper/>
    }
])
export default routes;