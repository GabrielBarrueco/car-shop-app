import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";
import { CartItem, useCartStore } from "../../store/cartStore";
import { X } from 'lucide-react-native';

interface ICartItemProps {
  cartItem: CartItem;
}

const CartItemCard = (props: ICartItemProps) => {
  const styles = useMemo(() => createStyleSheet(), [])
  const { remove: handleRemoveFromCart } = useCartStore();

  return (
    <View style={styles.itemContainer}>
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
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleRemoveFromCart(props.cartItem.car_id)}>
          <X color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItemCard;

function createStyleSheet(){
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
    deleteButton: {
      height: 24,
      width: 24,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-end",
    },
  });
}