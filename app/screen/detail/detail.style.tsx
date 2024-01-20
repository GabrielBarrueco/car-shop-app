import { StyleSheet } from "react-native";

export function detailStyleSheet(cardWidth: number) {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      marginTop: 12,
      flex: 1,
      justifyContent: "center",
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
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: 32,
      borderColor: "#000",
      letterSpacing: -1,
    },
    subtitleText: {
      color: "#000",
      fontFamily: "Arial",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "400",
      marginTop: 12,
      textAlign: "left"
    },
    FlatListContainer: {
      flex: 1,
      height: 360,
      borderRadius: 8,
      marginRight: 4,
    },
    imageContainer: {
      flex: 1,
      width: 340,
      height: 360,
      borderRadius: 4,
      marginRight: 4,
    },
    categoryContainer: {
      height: 48,
      width: 80,
      padding: 12,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 12.5,
      flexShrink: 0,
      borderRadius: 6,
      borderWidth: 1.3,
      border: "solid",
      borderColor: "rgba(0, 0, 0, 0.20)",
      marginTop: 8,
    },
    bottomContainer: {
      paddingHorizontal: 16,
      flexDirection: "row",
      width: "100%",
      height: 100,
      flexShrink: 0,
      borderTop: 1,
      borderTopWidth: 1.3,
      border: "solid",
      borderColor: "rgba(0, 0, 0, 0.20)",
      justifyContent: "space-between",
      alignItems: "center",

    },
    addToCartButton: {
      width: 190,
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
    headerContainer: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 8,
      paddingHorizontal: 12,
    },
    cartButton: {
      height: 20,
      width: 20,
      marginRight: 12
    },
  });
}