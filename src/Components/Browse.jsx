import React from "react"
import Header from "./Header"
import { useDispatch } from "react-redux"
import {API_OPTIONS} from "../utils/constants"
const Browse = () => {
    // const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviesdb.org/3/movie/now_playging?page=1",
            API_OPTIONS
        );
        const json = await data.json()
        console.log(json);
        console.log("hello");
        
        
    }
    return(
       <>
       <Header/>
       <h1>Browse</h1>
       </>
    )
}
export default Browse