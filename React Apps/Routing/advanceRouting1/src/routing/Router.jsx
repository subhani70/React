import { createBrowserRouter } from "react-router-dom";
import FetchProducts from "../components/FetchProducts";
import App from "../App";
import ProductDetails from "../components/ProductDetails";

let routes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/products",
                index:true,
                element:<FetchProducts/>
            },
            {
                path:"/products/:id",
                element:<ProductDetails/>
            }
        ]
    }
])


export default routes