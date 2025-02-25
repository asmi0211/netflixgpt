import {createBrowserRouter, useNavigate} from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import React from "react"
import Browse from "./Browse"
import Login from "./Login"
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate()
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        },
        
    ])

    

    

    return(
        <>
        <RouterProvider  router={appRouter}/>
        </>
    )
}
export default Body