import react from "react";
import { Result } from "../interfaces/movieinterface";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParams } from "../navigation/Navigation";

interface Props{
    movie:Result,
    height?:number, 
    width?: number
}

type Navigator = StackNavigationProp<any, any>


export const MoviePoster=({movie, height=420, width=300}: Props)=>{

    const navigation = useNavigation<Navigator>()

    const uri = 'https://image.tmdb.org/t/p/w500' + movie.poster_path

return(
    <Pressable
    onPress={()=>navigation.navigate('Details', movie)}
    style={{height: height,
        width: width, marginHorizontal: 8, marginVertical:10}}>

        <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image}></Image>
        </View>

    </Pressable>
)
}


export const styles = StyleSheet.create({

    image:{
        flex:1,
        borderRadius:24
    },
    imageContainer:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});