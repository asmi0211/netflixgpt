import React from "react"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
const Header = () => {
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
    return(
        <>
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between align-middle">
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
" className="w-44" alt="logo" />
        {user && (
            <div>
            <img src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt="signout" className="w-10 h-10"/>
            <button onClick={handlesignOut}
            className="text-sm py-2 font-bold rounded-lg text-white cursor-pointer">Sign Out</button>
        </div>
        )}
        </div>
        </>
    )
}
export default Header