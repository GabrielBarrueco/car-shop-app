import { View, TextInput, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Text, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from "@react-navigation/native";
import { loginStyleSheet } from "./login.style";

const Login = () => {
  const styles = useMemo(() => loginStyleSheet(), [])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const navigation = useNavigation();

  const handleCardTap = () => {
    navigation.navigate("HomeStack")
  }

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      alert('Logged In!');
      handleCardTap();
    } catch (error: any) {
      alert('Login failed:' +error.message);
      return;
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log("[LOGIN SUCESS]:", response);
      alert('Check your email');
    } catch (error: any) {
      console.log("[LOGIN ERROR]:", error);
      alert('sign Up failed:' +error.message);
      return;
    } finally {
      setLoading(false);
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
