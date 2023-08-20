import { useEffect, useState } from "react";
import movieDb from "../api/moviedb";
import { MovieDBNowPlaying, Result } from "../interfaces/movieinterface";

interface setMovies{
    nowPlaying: Result[],
    popular: Result[],
    topRated: Result[],
    upComing : Result[]
}


export const useMovies=()=>{

    const[peliculas, setPeliculas] = useState<setMovies>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing:[]
    })


    const[isLoading, setIsLoading] = useState(true)

    const getMovies = async ()=>{

        const nowPlaying =   movieDb.get<MovieDBNowPlaying>('/now_playing');
        const popular =   movieDb.get<MovieDBNowPlaying>('/popular');
        const topRated =   movieDb.get<MovieDBNowPlaying>('/top_rated');
        const upComing =   movieDb.get<MovieDBNowPlaying>('/upcoming');

        const allMovies = await Promise.all([nowPlaying,  popular,  topRated, upComing]);

        setPeliculas({
            nowPlaying: allMovies[0].data.results,
            popular: allMovies[1].data.results,
            topRated: allMovies[2].data.results,
            upComing:allMovies[3].data.results
        })

        setIsLoading(false)
    }
    
    useEffect(()=>{
        getMovies()
    }  , [])

    return { isLoading, 
        peliculas};
}