import { createStackNavigator } from '@react-navigation/stack';
import { Details } from '../screens/Details';
import { MoviesScreen } from '../screens/MoviesScreen';
import { Result } from '../interfaces/movieinterface';


export type RootParams={
    MoviesScreen: undefined,
    Details: Result
    }

const Stack = createStackNavigator<RootParams>();

export const Navigation=()=> {
  return (
    <Stack.Navigator 
    screenOptions={
        {
            headerShown: false,
            cardStyle:{
                backgroundColor:"white"
            }
            
        }
    }>
      <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
      <Stack.Screen name="Details" component={Details} />

    </Stack.Navigator>
  );
}