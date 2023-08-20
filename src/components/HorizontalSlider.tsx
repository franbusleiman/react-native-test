import { FlatList, Text, View } from "react-native";
import { Result } from "../interfaces/movieinterface";
import { MoviePoster } from "./MoviePoster";

interface Props{
    title:string, 
    movies: Result[]
}

export const HorizontalSlider=({title, movies} : Props)=>{


    return (
        <View>
            <Text style={{fontSize:20, textAlign:"center", color:"black"}}>{title}</Text>
        <FlatList
          data={movies}
          renderItem={({item}:any)=><MoviePoster movie={item} height={200} width={140}></MoviePoster>}
          horizontal={true}
        >
        </FlatList>
    </View>
    )
}