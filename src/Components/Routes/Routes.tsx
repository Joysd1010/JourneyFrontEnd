import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import ERROR from "../ERROR";
import Login from "../Login/Login/Login";
import SignUp from "../Login/Signup/SignUp";

const Router =createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path:'/',
            element: <Home/>     
        },
        {
            path:'/login',
            element: <Login/>     
        },
        {
            path:'/signup',
            element: <SignUp/>     
        },
        {
            path:'/',
            element: <Home/>     
        },
        {
            path:'*',
            element:<ERROR/>
        }
      ]
    },
  ]);
export default Router;