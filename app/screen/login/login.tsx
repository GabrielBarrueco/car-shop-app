import { View, TextInput, ActivityIndicator, KeyboardAvoidingView, Text, TouchableOpacity, Alert } from "react-native";
import React, { useMemo, useState } from "react";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from "@react-navigation/native";
import { loginStyleSheet } from "./login.style";
import {  NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../routes/welcome.navigator";

export type StackNavigation = NativeStackNavigationProp<StackParamList>;

const Login = () => {
  const styles = useMemo(() => loginStyleSheet(), [])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const navigation = useNavigation<StackNavigation>();

  const handleCardTap = () => {
    navigation.navigate("HomeStack");
  }

  const logIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Logged In!');
      handleCardTap();
    } catch (error: any) {
      Alert.alert('Login failed:' +error.message);
      return;
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log("[SignUp SUCESS]:", response);
      Alert.alert('Check your email');
    } catch (error: any) {
      console.log("[SignUp ERROR]:", error);
      Alert.alert('sign Up failed:' +error.message);
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
            <TouchableOpacity testID="loginButton" style={styles.signUpButton} onPress={logIn}>
              <Text testID="loginTextButton" style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity testID="signInButton"  style={styles.signUpButton} onPress={signUp}>
              <Text testID="signInTextButton" style={styles.buttonText}>Create account</Text>
            </TouchableOpacity>
          </>
        }
       </KeyboardAvoidingView>
    </View>
  )
}

export default Login
