import { View, TextInput, StyleSheet, ActivityIndicator, Button, KeyboardAvoidingView, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      alert('Login failed:' +error.message)
    }finally{
      setLoading(false)
      alert('Logged In!')
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log("[LOGIN SUCESS]:", response)
      alert('Check your email')
    } catch (error: any) {56
      console.log("[LOGIN ERROR]:", error)
      alert('sign Up failed:' +error.message)
    }finally{
      setLoading(false)
    }
  }

  return(
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.titleText}>Login</Text>
        <Text style={styles.subtitleText}>Or create your account</Text>
        <TextInput 
          style={styles.input} 
          value={email} 
          placeholder="Email" 
          autoCapitalize="none" 
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput 
          style={styles.input} 
          value={password} 
          placeholder="Password" 
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        {loading ? 
          <ActivityIndicator size="large" color="#0000FF"/> 
          : <>
            <TouchableOpacity style={styles.signUpButton} onPress={signIn}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={signUp}>
              <Text style={styles.buttonText}>Create account</Text>
            </TouchableOpacity>
          </>
        }
       </KeyboardAvoidingView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
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

});