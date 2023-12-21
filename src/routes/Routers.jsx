import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Errorpage from "../components/Errorpage"
import Home from "../pages/home/Home";
import Register from "../pages/accounts/Register";

const routers = createBrowserRouter(
    [
        {
            path:'/',
            element: <Root/>,
            errorElement:<Errorpage/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/register',
                    element:<Register/>
                }
            ]
        }
    ]
);

export default routers;