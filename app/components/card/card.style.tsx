import { StyleSheet } from "react-native"

export function cardStyleSheet(cardWidth: number) {
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