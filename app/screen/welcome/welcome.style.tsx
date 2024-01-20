import { StyleSheet} from "react-native";

export function welcomeStyleSheet() {
  return StyleSheet.create({
    loginButton: {
      flex: 1,
      paddingHorizontal: 18,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      height: 50,
      backgroundColor: "#000",
      marginTop: 12,       
      position: 'absolute',                                          
      bottom: 10,                                                    
      alignSelf: "center",
      width: "90%",
      marginBottom: 24
    },
    welcomeText: {
      flex: 1,
      color: "#FFF",
      fontFamily: "Arial",
      fontSize: 62,
      fontStyle: "normal",
      fontWeight: "600",
      
      letterSpacing: -1.6,position: 'absolute',                                          
      top: 60,                                                    
      alignSelf: "center",
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
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
    },
  });
}