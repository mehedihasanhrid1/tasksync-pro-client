import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Errorpage from "../components/Errorpage"
import Home from "../pages/home/Home";
import Register from "../pages/accounts/Register";
import Login from "../pages/accounts/Login";

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
                },
                {
                    path:'/login',
                    element:<Login/>
                }
            ]
        }
    ]
);

export default routers;