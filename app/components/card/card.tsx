import { Text, Image, TouchableOpacity, Dimensions, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Car } from "../../../service/api.interface";
import { cardStyleSheet } from "./card.style";

interface ICardProps {
  car: Car
}

const Card = (props: ICardProps) => {
  const width = (Dimensions.get("screen").width - 32) /2;
  const styles = useMemo(() => cardStyleSheet(width), [])  
  const navigation = useNavigation();

  const handleCardTap = useCallback(() => {
    navigation.navigate("Detail", {car: props.car})
  }, [navigation, props.car])

  return(
    <TouchableOpacity style={styles.container} onPress={handleCardTap}>
      <Image 
        style={styles.imageContainer} 
        source={{uri: props.car.image[0].url}}
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{props.car.name}</Text>
        <Text style={styles.subtitleText}>{`C$${props.car.price}`}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card;
