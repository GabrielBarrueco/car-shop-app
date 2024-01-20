import { StyleSheet } from "react-native";

export function homeStyleSheet() {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      flex: 1,
      justifyContent: "center",
    },
    input: {
      height: 53,
      paddingVertical: 15,
      paddingHorizontal: 8,
      alignItems: "center",
      flexShrink: 0,
      borderRadius: 10,
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      marginTop: 8,
    },
    titleText: {
      color: "#000",
      fontFamily: "Arial",
      fontSize: 32,
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: 49, /* 153.125% */
      letterSpacing: -1.6,
    },
    headerContainer: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
      paddingHorizontal: 12,
    },
  })
}