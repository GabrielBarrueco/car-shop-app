import { StyleSheet, Text, Image, TouchableOpacity, Dimensions, View } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Car } from "../../service/api.interface";
import { CartItem, useCartStore } from "../../store/cartStore";
import { Trash2, Plus, Minus } from 'lucide-react-native';


interface ICartItemProps {
  cartItem: CartItem;
}

const CartItemCard = (props: ICartItemProps) => {
  const width = (Dimensions.get("screen").width - 32) / 2;
  const styles = useMemo(() => createStyleSheet(width), [])
  const navigation = useNavigation();
  const {add: handleAddToCart, remove: handleRemoveFromCart, removeAll: handleRemoveAllFromCart } = useCartStore();

  const handleCardTap = () => {
    navigation.navigate("Detail", {})
  }

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handleCardTap}>
      <Image
        style={styles.imageContainer}
        source={{ uri: props.cartItem.image[0].url }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>{props.cartItem.name}</Text>
        <Text>{props.cartItem.category}</Text>
        <Text style={styles.subtitleText}>{`$${props.cartItem.price}`}</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleRemoveAllFromCart()}>
          <Trash2 color="#000" />
        </TouchableOpacity>

        <View style={styles.qtyContainer}>
          <TouchableOpacity style={styles.PlusMinusButton} onPress={() => handleAddToCart(props.cartItem)}>
            <Plus color="#000" />
          </TouchableOpacity>
          <Text style={styles.qtyText}>1</Text>
          <TouchableOpacity style={styles.PlusMinusButton} onPress={() => handleRemoveFromCart(props.cartItem.car_id)}>
            <Minus color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CartItemCard;

function createStyleSheet(cardWidth: number) {
  return StyleSheet.create({
    itemContainer: {
      padding: 8,
      flex: 1,
      height: 100,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      borderRadius: 6,
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      marginTop: 8,
    },
    sideContainer: {
      width: 80,
      height: "100%",
      paddingHorizontal: 16,
    },
    textContainer: {
      height: "100%",
      flex: 1,
      paddingHorizontal: 4,
      justifyContent: "space-between",
      marginRight: 4,
    },
    subtitleText: {
      color: "#000",
      fontFamily: "Arial",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "400",
    },
    imageContainer: {
      width: 90,
      height: 90,
      borderRadius: 4,
      marginRight: 4,
    },
    bottomContainer: {
      paddingHorizontal: 16,
      flexDirection: "row",
      width: "100%",
      height: 100,
      flexShrink: 0,
      borderTop: 1,
      borderWidth: 1.3,
      border: "solid",
      borderColor: "rgba(0, 0, 0, 0.20)",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    checkoutButton: {
      flex: 1,
      paddingHorizontal: 18,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      height: 50,
      backgroundColor: "#000",
      marginTop: 12
    },
    buttonText: {
      color: "#FFF",
      fontFamily: "Arial",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "500",
      borderColor: "#000",
    },
    PlusMinusButton: {
      height: 24,
      width: 24,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 0.9,
      border: "solid",
      borderColor: "rgba(0, 0, 0, 0.20)",
    },
    deleteButton: {
      height: 24,
      width: 24,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-end",
    },
    qtyContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      marginTop: 8,
    },
    qtyText: {
      color: "#000",
      fontFamily: "Arial",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "400",
      marginHorizontal: 6

    },
  });
}