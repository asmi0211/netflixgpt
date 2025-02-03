import {Link} from "react-router-dom"
import React, { useState } from "react"
import Header from "./Header"
import Browse from "./Browse"
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const toggleSignUp = () => {
        if(isSignIn){
            setIsSignIn(false)
        }

        isSignIn ? setIsSignIn(false) : setIsSignIn(true)

        setIsSignIn(!isSignIn)
    }
    return(
        <>
        <Header/>
        <div className="bg-black h-lvh overflow-hidden z-0 relative">
        <div className="absolute bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg')] w-full h-full bg-cover bg-no-repeat bg-gradient-to-b bg-black">
            {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg" alt="bg"  /> */}
        </div>
            <form className="absolute p-12 my-24 right-0 top-0 left-0 w-100 bg-[#000000b3] ml-auto mr-auto">
                <h4 className="text-4xl text-white font-bold mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h4>

                {!isSignIn && <input type="text" 
                placeholder="Full Name" 
                className="p-4 m-2 text-white border border-gray-400 w-full rounded-lg" />}

                <input type="text" 
                placeholder="Email Address" 
                className="p-4 m-2 text-white border border-gray-400 w-full rounded-lg" />
                
                <input type="password" 
                placeholder="Password" 
                className="p-4 m-2 text-white border border-gray-400 w-full rounded-lg" />

                <button className="p-4 m-2 text-white font-bold bg-red-500 w-full rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="text-white mt-4 ml-2 cursor-pointer" onClick={toggleSignUp}>{isSignIn ? "New to Netflix? Sign In" : "Already Registred, Sign up now..."}.</p>
            </form>
        </div>
        </>
    )
}
export default Login