import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screen/login';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import Home from './app/screen/home';
import Detail from './app/screen/detail';
import Cart from './app/screen/cart';

const Stack = createNativeStackNavigator();

export default function Page() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user)
      setUser(user)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Detail' component={Detail} options={{title: "Detail"}}/>
        <Stack.Screen name='Cart' component={Cart} options={{title: "Cart"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
