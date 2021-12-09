import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SimplePokemon } from "../interfaces/pokemonInterfaces";
import { FadeInImage } from "./FadeInImage";


const windowWidth = Dimensions.get("window").width;
interface Props {
  pokemon: SimplePokemon;
}
export const PokemonCard = ({ pokemon }: Props) => {

  const navigation  = useNavigation();
  return (
    <TouchableOpacity 
    activeOpacity={0.9}
    onPress={() => navigation.navigate('PokemonScreen', { simplePokemon : pokemon})}
    >
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: 'rgba(255,8,0,0.69)',
        }}
      >
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {"\n#" + pokemon.id}
          </Text>
        </View>

        <View style={styles.pokebolaContainer}>
          <Image
            source={require("../assets/pokebola-blanca.png")}
            style={styles.pokebola}
          />
        </View>

        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: "red",
    
    height: 120,
    width: 160,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  name: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    top: 20,
    left: 10,
    textTransform:'capitalize'
  },
  pokebola: {
    width: 100,
    height: 100,
    position: "absolute",
    right: -20,
    bottom: -20,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: "absolute",
    right: -8,
    bottom: -5,
  },
  pokebolaContainer: {
    // backgroundColor: 'blue',
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    // opacity: 0.4
    overflow: "hidden",
  },
});
