import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllCourses from "../pages/AllCourses";
import CreateCourse from "../pages/CreateCourse";
import CourseDetails from "../pages/CourseDetails";
import EditCourse from "../pages/EditCourse";
import MyCart from "../pages/MyCart";

let routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <AllCourses />
            },
            {
                path: "/allCourses",
                element: <AllCourses />
            },
            {
                path: "/mycart",
                element:<MyCart/>
            },
            {
                path: "/createCourse",
                element: <CreateCourse />
            },
            {
                path: "/showCourse",
                element: <CourseDetails />
            },
            {
                path:"/editcourse/:id",
                element:<EditCourse/>
            }
        ]
    }
])

export default routes;