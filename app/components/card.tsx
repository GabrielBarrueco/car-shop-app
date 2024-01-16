import { StyleSheet, Text, Image, TouchableOpacity, Dimensions, View } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Car } from "../../service/api.interface";

interface ICardProps {
  car: Car
}

const Card = (props: ICardProps) => {
  const width = (Dimensions.get("screen").width - 32) /2;
  const styles = useMemo(() => createStyleSheet(width), [])  
  const navigation = useNavigation();

  const handleCardTap = () => {
    navigation.navigate("Detail", {car: props.car})
  }

  return(
    <TouchableOpacity style={styles.container} onPress={handleCardTap}>
      <Image 
        style={styles.imageContainer} 
        source={{uri: props.car.image[0].url}}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{props.car.name}</Text>
        <Text style={styles.subtitleText}>{`${props.car.price}`}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card;
function createStyleSheet(cardWidth: number) {
  return StyleSheet.create({
    container: {
      flex: 1,
      height: 200,
      marginTop: 20,
      marginHorizontal: 4,
      width: cardWidth,
      borderRadius: 8,
      borderColor: "#DDD",
      border: "solid",
      borderWidth: 0.5,
    },
    textContainer: {
      flex: 1,
      marginTop: 4,
      paddingHorizontal: 4,
      justifyContent: "flex-start",
    },
    titleText: {
      color: "#000",
      fontFamily: "Arial",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: 32,
      borderColor: "#000",
      letterSpacing: -1,
    },
    subtitleText: {
      color: "#000",
      fontFamily: "Arial",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "400",
      marginTop: 20,
      letterSpacing: -1,
    },
    imageContainer: {
      width: "100%",
      height: 120,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    }
  });
}