import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllCourses from "../pages/AllCourses";
import CreateCourse from "../pages/CreateCourse";
import CourseDetails from "../pages/CourseDetails";

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
                path: "/createCourse",
                element: <CreateCourse />
            },
            {
                path: "/showCourse",
                element: <CourseDetails />
            }
        ]
    }
])

export default routes;