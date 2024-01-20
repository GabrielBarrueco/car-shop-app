import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";
import { CartItem, useCartStore } from "../../../store/cartStore";
import { X } from 'lucide-react-native';
import { cartItemStyleSheet } from "./cartItem.style";

interface ICartItemProps {
  cartItem: CartItem;
}

const CartItemCard = (props: ICartItemProps) => {
  const styles = useMemo(() => cartItemStyleSheet(), [])
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
