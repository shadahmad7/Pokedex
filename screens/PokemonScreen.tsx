import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigator/Navigator';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
// import { pokemonApi } from '../api/pokemonApi';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from './PokemonDetails';


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};
export const PokemonScreen = ({navigation, route}: Props) => {

    const { simplePokemon } = route.params
    const { id, name, picture } = simplePokemon;
    const { isLoading, pokemon } = usePokemon(id);
    const { top } = useSafeAreaInsets();
    return (
        <View>
        <View style={{

            ...styles.headerContainer,
            backgroundColor: 'rgba(255,8,0,0.69)',
           
        }}>

            <TouchableOpacity
            activeOpacity={0.8}
            style={{
                ...styles.backButton,
                top : top+5,
            }}
            
            >

                <Ionicons
                name="arrow-back-outline"
                color='white'
                size={30}
                />
                
              

                </TouchableOpacity>
                <TouchableOpacity
                 style={{
                    ...styles.heartButton,
                    top : top+5,
                }}
                >
                <Ionicons
                name="heart-outline"
                color='white'
                size={30}
                />
                </TouchableOpacity>

                <Text
                style={{
                    ...styles.pokemonName,
                    top: top+40,
                }}
                
                >
                    {name+ '\n' }#{id }
                </Text>
<Image 
source ={ require('../assets/pokebola-blanca.png')}
style={styles.pokeball}
/>

<FadeInImage
uri={picture}
style={styles.pokemonImage}
/>

        </View>


{}
      { 
      
       isLoading
        ? (
         <View style={styles.loading}>
            <ActivityIndicator
            color='rgba(255,8,0,0.69)'
            size={50}
            />
        </View>
        )
        :
         <PokemonDetails pokemon={pokemon} />
        }
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer : {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,


    },
    backButton : {
        position: 'absolute',
        left: 20,

    },
    heartButton : {
        position: 'absolute',
        right: 20,
    }, 
    pokemonName : {
        color: 'white',
        fontSize: 35,
        alignSelf: 'flex-start',
        left: 20,
        textTransform: 'capitalize'
    }, 
    pokeball : {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7

    },
    pokemonImage : {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loading : {
      flex:1,
      
        justifyContent: 'center',
        alignItems: 'center'
    }
})