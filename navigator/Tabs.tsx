
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { PokemonScreen } from "../screens/PokemonScreen";
import { Ionicons } from "@expo/vector-icons";
import { SearchScreen } from "../screens/SearchScreen";
import { Navigator } from "./Navigator";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
       <Tab.Navigator
       sceneContainerStyle={{
           backgroundColor: 'white'
       }}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
       }}
       >
               
               <Tab.Screen name="Home" component={Navigator} 
               options={{
                   tabBarLabel:'Pokemons',
                   tabBarIcon: ( {}) =>  (
                     <Ionicons
                     name="logo-octocat"
                     size={20}
                     color='grey'
                     />
                     )
               }}
               />
               <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarLabel:'Search',
                    tabBarIcon: ( {}) =>  (
                      <Ionicons
                      name="search"
                      size={20}
                      color='grey'
                      />
                      )
                }}
                 />
               <Tab.Screen name="Favorites" component={FavoritesScreen}
                options={{
                    tabBarLabel:'Favorites',
                    tabBarIcon: ( {}) =>  (
                      <Ionicons
                      name="heart"
                      size={20}
                      color='grey'
                      />
                      )
                }}
               />
               
               
           </Tab.Navigator>
    )
}