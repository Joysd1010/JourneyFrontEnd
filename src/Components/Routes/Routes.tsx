import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import ERROR from "../ERROR";

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
            element: <Home/>     
        },
        {
            path:'/',
            element: <Home/>     
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