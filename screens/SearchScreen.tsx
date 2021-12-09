import React from "react";
import {
  View,
  Text,

  FlatList,
  
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchInput } from "../components/SearchInput";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import { PokemonCard } from "../components/PokemonCard";
 import { styles as globalStyles } from "../theme/AppTheme";
import { Loading } from "../components/Loading";
import { useState } from "react";
import { SimplePokemon } from "../interfaces/pokemonInterfaces";
import { useEffect } from "react";


export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();

  const { isFetching, simplePokemonList } = usePokemonSearch();

  const [ pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  const [ term, setTerm]= useState('')

  useEffect(() => {

    if(term.length === 0){
        return setPokemonFiltered([]);
    }

    if(isNaN(Number(term))){
     setPokemonFiltered(
         simplePokemonList.filter(poke=> poke.name.includes(term.toLowerCase()))
     );
    }else{
        setPokemonFiltered(
            [ simplePokemonList.find( poke => poke.id ===term)!]);
    }
  },[term])

  if (isFetching) {
    return <Loading />
  }

  return (
    <View style={{ flex: 1, 
    marginTop: top - 10, 
    marginHorizontal: 20 
    
    }}>
      <SearchInput 
      onSearch={(value) => setTerm(value)}
      style={{
position:'absolute',
zIndex: 999,
width: 100

       }}
      />

      <FlatList
        data={pokemonFiltered}
        numColumns={2}
        keyExtractor={(pokemon) => pokemon.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.title,
              top: top + 20,
              paddingBottom: 10,
              marginBottom: top + 20,
            }}
          >
            {term}
          </Text>
        }
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      
      />
    </View>
  );
};

