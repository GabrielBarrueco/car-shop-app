import { StyleSheet } from "react-native"

export function cartItemStyleSheet(){
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