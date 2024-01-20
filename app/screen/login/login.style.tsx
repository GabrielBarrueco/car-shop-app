import { StyleSheet } from "react-native";

export function loginStyleSheet() {
    return StyleSheet.create({
        container: {
            marginHorizontal: 20,
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
          subtitleText: {
            color: "#000",
            fontFamily: "Arial",
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: 49, /* 153.125% */
            letterSpacing: -1,
          },
          signUpButton: {
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
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: 49,
            letterSpacing: -1,
          },
    })
  }