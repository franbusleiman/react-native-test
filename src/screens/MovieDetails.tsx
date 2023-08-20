import { Text, View } from "react-native"
import { Movie } from "../interfaces/movieinterface"
import currencyFormatter from 'currency-formatter'


interface Props{
    movie: Movie
}

export const MovieDetails=({movie}:Props)=>{

    return(

        <View style={{marginHorizontal:20, marginBottom:50}}>
          <View style={{flexDirection:"row"}}>
        
        <Text style={{color:"black"}}>{movie.vote_average}</Text>

        <Text style={{color:"black"}}>
           - {movie.genres.map(g=>g.name).join(',')}
            </Text>

        </View>
        <Text style={{fontSize:20, marginTop: 10, fontWeight:"bold", color:"black"}}>Historia</Text>
        <Text style={{fontSize:16, color:"black"}}>{movie.overview}</Text>
        <Text style={{fontSize:20, marginTop: 10, fontWeight:"bold", color:"black"}}>Presupuesto</Text>
        <Text style={{fontSize:18, color:"black"}}>{currencyFormatter.format(movie.budget, {code:'USD'})}</Text>


        </View>
    )
}