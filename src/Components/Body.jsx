import {createBrowserRouter, useNavigate} from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import React, { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Browse from "./Browse"
import Login from "./Login"
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

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

    

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid:uid,email:email, displayName:displayName}))
            //   navigate("/browse")
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser())
            //   navigate("/")
            }
          });
    },[])

    return(
        <>
        <RouterProvider  router={appRouter}/>
        </>
    )
}
export default Body