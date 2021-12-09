import { Ionicons } from "@expo/vector-icons";
import React , { useState, useEffect} from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Value } from "react-native-reanimated";
import {useSearchValue} from '../hooks/useSearchValue';

interface Props {
    onSearch:(Value:string ) => void;
    style? : StyleProp<ViewStyle>
}

export const SearchInput = ({style, onSearch}:Props) => {

    const [ textValue, setTextValue] = useState('');

    const searchValue = useSearchValue(textValue)

    
    useEffect(() => {
       onSearch(searchValue);
           },[searchValue])
       
       
    return (
        <View style={{
            ...styles.container,
            ...styles as any
            }}>
            <View style={styles.textBackground}>
           <TextInput
           placeholder='Search Pokemons'
           style={styles.placeholder}
           autoCorrect={false}
           value={textValue}
           onChangeText={setTextValue}
           />

           <Ionicons 
           name="search"
           size={20}
           color="grey"
           />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
// backgroundColor: 'red'
    }, 
    textBackground :{
        backgroundColor: '#F3F1F3',
        borderRadius: 20,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
            shadowOffset: {
             width: 0,
            height: 2,
            },
         shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    }, 
    placeholder : {
        flex: 1,
        fontSize: 18,
        top: 2,
    }
     
})