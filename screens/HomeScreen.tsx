import React from 'react';
import { Text, Image,View, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/AppTheme';
import { usePokemonPaginated } from '../api/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    usePokemonPaginated();
    return (
        <>

            <Image 
            source={require('../assets/pokebola.png')}
            style={styles.PokebolaBG}
            />
       <View
       style={{
           ...styles.globalMargin,
           marginTop: -50,
           alignItems: 'center'
       }}
       >

       <FlatList
       data= { simplePokemonList} 
       numColumns={ 2 }
       keyExtractor= {(pokemon)=> pokemon.id }
       showsVerticalScrollIndicator={false}

       ListHeaderComponent={ ( 
        <Text style={{
            ...styles.title,
            top : top + 20,
            paddingBottom: 10,
            marginBottom : top + 20
        }}>Pokedex</Text>
       )}
       renderItem={({item}) => (<PokemonCard pokemon={item } />)}
       onEndReached={loadPokemons}
       onEndReachedThreshold={0.4}
       ListFooterComponent={( <ActivityIndicator style={{ height: 100}}
       size={20}
       color="grey" />)}
       />
       </View>
        </>
    )
}