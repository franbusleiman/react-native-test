import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import React, { cloneElement, useEffect } from "react";
import { ActivityIndicator, Button, Dimensions, Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import movieDb from "../api/moviedb";
import { RootParams } from "../navigation/Navigation";
import {ScrollView} from 'react-native-gesture-handler';
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MovieDetails } from "./MovieDetails";


interface Props extends StackScreenProps<RootParams, "Details">{};


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export const Details=({route, navigation}:Props)=>{



    const movie = route.params;

    const{movieDetails:{movieDetails}, isLoading} =  useMovieDetails(movie.id.toString());


    console.log(movieDetails)

    const uri = 'https://image.tmdb.org/t/p/w500' + movie.poster_path


     
       return ( <ScrollView contentContainerStyle={{flexGrow:1}} >

         <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image}></Image>
        </View>


        <View>  
        <Text style={[styles.subtitle, styles.element]}>{movie.original_title}</Text>
        <Text style={[styles.title, styles.element]}>{movie.title}</Text>


     </View>

     <View>
       {
         (isLoading) ? <ActivityIndicator size={35} color="grey" ></ActivityIndicator> : <MovieDetails movie={movieDetails!}/>
       } 
     </View>

     <Pressable
     style={[styles.back]}
     onPress={()=>navigation.pop()}>
             <Text   style={[styles.backText]}>GO BACK</Text>

     </Pressable>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:15,
    },
    imageContainer:{
        padding:5,
        width: '100%',
        height: screenHeight*0.70,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    element:{
        color:"black",
        margin:5
    },
    title:{
    color:"black",
    fontSize:25
    },
    subtitle:{
        marginTop:20,
        color:"black",
        fontSize:10

    },
back:{
    alignSelf:"center",
    position:"absolute",
    bottom:5
    
},
backText:{
    color:"black",
    fontSize:25, 
    fontWeight:"bold",
}});