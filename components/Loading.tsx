import React from "react";
import { View, ActivityIndicator ,StyleSheet, Text } from "react-native";


export const Loading  =  () => {
     return (
        <View style={styles.activityContainer}>
        <ActivityIndicator 
        size={50} 
        color="grey" 
        />
        <Text>Searching</Text>
      </View>
     )
}

const styles = StyleSheet.create({
    activityContainer: {
      flex: 1,
      // backgroundColor:'red',
      justifyContent: "center",
      alignItems: "center",
    },
  });
  