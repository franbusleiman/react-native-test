import React, { useEffect, useState } from "react";
import { Button, Dimensions, Text, View,FlatList, ActivityIndicator } from "react-native";
import {ScrollView} from 'react-native-gesture-handler';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { MovieDBNowPlaying } from "../interfaces/movieinterface";
import { useMovies } from "../hooks/useMovies";
import { MoviePoster } from "../components/MoviePoster";
import Carousel from "react-native-snap-carousel";
import { HorizontalSlider } from "../components/HorizontalSlider";


export const MoviesScreen=()=>{
     
    const {isLoading, peliculas:{nowPlaying, topRated,popular, upComing} } = useMovies();

    const screenWidth = Dimensions.get('window').width;
    
  
    return(
         
       
        <ScrollView>


        {
         (isLoading) ? <ActivityIndicator size={35} color="grey" ></ActivityIndicator> : 
      
            <View  style={{flex:1}}>

            <Carousel
            data={nowPlaying}
            renderItem={({item}:any)=><MoviePoster movie={item}
            ></MoviePoster>}
            sliderWidth={screenWidth}
            itemWidth={340}>

            </Carousel>

           <HorizontalSlider title="Top Rated" movies={topRated}/>

           <HorizontalSlider title="Popular" movies={popular}/>
           <HorizontalSlider title="Upcoming" movies={upComing}/>

         </View> } 
      
        </ScrollView>

        
    )
}