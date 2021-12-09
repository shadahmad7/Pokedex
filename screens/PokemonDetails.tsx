import React from "react";
import { View, Text, StyleSheet } from "react-native";
 import { ScrollView } from "react-native-gesture-handler";
import { FadeInImage } from "../components/FadeInImage";
import { PokemonFull } from "../interfaces/pokemonInterfaces";
// import { styles } from '../theme/AppTheme'


interface Props {
    pokemon : PokemonFull;
}

export const PokemonDetails = ({ pokemon } : Props ) => {
    return (
       <ScrollView
       showsVerticalScrollIndicator={ false }
       style={{
           ...StyleSheet.absoluteFillObject,
        //    backgroundColor: 'green',
           height: 720
       }}
       >


{/* Types */}

<View style={{
               ...styles.container,
               marginTop: 400
           }} >
               <Text style={styles.title}>Types</Text>
               <View style={{flexDirection:'row'}}>
               <Text>
                   {
                       pokemon.types.map(( {type}) => (
                           <Text
                           style={{
                               ...styles.regularText,
                               marginRight: 10

                        }}
                           key={type.name}
                           >
                               {type.name + ' '}
                           </Text>
                       ))
                   }
               </Text>
               </View>
           </View>


{/* Types */}

{/* Weight */}

<View style={{
               ...styles.container,
               marginTop: 20
           }} >
    <Text style={styles.title}>Weight</Text>
    <Text style={styles.regularText}>{pokemon.weight}Kg</Text>
</View>

{/* Weight */}


{/* Sprites */}

<View style={{
               ...styles.container,
               marginTop: 20
           }} >
    <Text style={styles.title}>Sprites</Text>
</View>

{/* Sprites */}


<ScrollView
horizontal={true}
showsHorizontalScrollIndicator={false}
>


          
          <FadeInImage 
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
          />
          
          <FadeInImage 
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
          />
          
          <FadeInImage 
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
          />
          
          <FadeInImage 
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
          />
</ScrollView>

{/* Ability */}
<View style={styles.container} >
    <Text style={styles.title}>Ability</Text>
    <View style={{flexDirection:'row'}}>
               <Text>
                   {
                       pokemon.abilities.map(( {ability}) => (
                           <Text
                           style={{
                               ...styles.regularText,
                               marginRight: 10

                        }}
                           key={ability.name}
                           >
                               {ability.name + ' '}
                           </Text>
                       ))
                   }
               </Text>
               </View>
</View>

{/* ability */}

{/* Moves */}
<View style={styles.container} >
    <Text style={styles.title}>Moves</Text>
    <View style={{flexDirection:'row' , flexWrap: 'wrap'}}>
               <Text>
                   {
                       pokemon.moves.map(( {move}) => (
                           <Text
                           style={{
                               ...styles.regularText,
                               marginRight: 10

                        }}
                           key={move.name}
                           >
                               {move.name + ' '}
                           </Text>
                       ))
                   }
               </Text>
               </View>
</View>
{/* Moves */}

{/* Stats */}

<View style={styles.container} >
    <Text style={styles.title}>Stats</Text>
    <View>
               
                   {
                       pokemon.stats.map(( stat, i) => (
                           <View key={stat.stat.name + i }
                           style={{flexDirection:'row'}}
                           >
                           <Text
                           style={{
                               ...styles.regularText,
                               marginRight: 10,
                               width: 150

                        }}>
                               {stat.stat.name }
                           </Text>

                           <Text
                           style={{
                               ...styles.regularText,
                               marginRight: 10,
                               fontWeight: 'bold'

                        }}>
                               {stat.base_stat }
                           </Text>

                           </View>
                       ))
                   }
               
               </View>
</View>

{/* Stats */}

       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 20, 
    },
    title : {
        fontSize: 18, 
        fontWeight: 'bold'
    },
    regularText : {
        fontSize: 15,
    },
    basicSprite : {
        width: 100,
        height: 100,
    }
})