import { StyleSheet } from "react-native"

export function cartStyleSheet() {
    return StyleSheet.create({
      container: {
        paddingHorizontal: 16,
        marginTop: 12,
        flex: 1,
        justifyContent: "flex-start",
      },
      textContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 4,
        paddingHorizontal: 4,
        alignContent: "flex-end",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 12,
      },
      titleText: {
        color: "#000",
        fontFamily: "Arial",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "400",
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
      bottomContainer: {
        paddingHorizontal: 16,
        flexDirection: "row",
        width: "100%",
        height: 100,
        borderTop: 1,
        borderTopWidth: 1.3,
        border: "solid",
        borderColor: "rgba(0, 0, 0, 0.20)",
        justifyContent: "space-between",
        alignItems: "center",
      },
      checkoutButton: {
        flex: 1,
        paddingHorizontal: 18,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        height: 50,
        backgroundColor: "#000",
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
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        paddingHorizontal: 12,
      },
      cartButton: {
        height: 20,
        width: 20,
        marginRight: 12
      },
      headerText: {
        color: "#000",
        fontFamily: "Arial",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 32,
        borderColor: "#000",
        letterSpacing: -1,
      },
    });
  }