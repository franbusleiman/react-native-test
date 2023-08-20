import { useEffect, useState } from "react"
import { Movie } from "../interfaces/movieinterface"
import movieDb from "../api/moviedb"

interface setMovieDetails{
    movieDetails?: Movie
}


export const useMovieDetails=(movieId: string)=>{

    const[movieDetails, setMovie] = useState<setMovieDetails>({
        movieDetails: undefined
    })


    const[isLoading, setIsLoading] = useState(true)

    const getMovies = async ()=>{

        const movie =   movieDb.get<Movie>('/' + movieId);
       

        const movieResult = await Promise.all([movie]);

        setMovie({
            movieDetails : movieResult[0].data
        })

        setIsLoading(false)
    }
    
    useEffect(()=>{
        getMovies()
    }  , [])

    return { isLoading, 
        movieDetails};
}