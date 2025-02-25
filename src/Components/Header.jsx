import React, { useEffect } from "react"
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import appStore from "../utils/appStore";
import { addUser, removeUser } from "../utils/userSlice";
import {logo, signOutLogo} from "../utils/constants"

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((x)=> x.user)
    console.log(user);
    
    const handlesignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid:uid,email:email, displayName:displayName}))
              navigate("/browse")
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser())
              navigate("/")
            }
          });

          // onAuthStateChanged return unsubscribe function, check firebase documentation
          // unsubscribe when component unmounts
          return() => unsubscribe();

            
    },[])

    return(
        <>
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between align-middle">
            <img src={logo} className="w-44" alt="logo" />
        {user && (
            <div>
            <img src={signOutLogo}alt="signout" className="w-10 h-10"/>
            <button onClick={handlesignOut}
            className="text-sm py-2 font-bold rounded-lg text-white cursor-pointer">Sign Out</button>
        </div>
        )}
        </div>
        </>
    )
}
export default Header