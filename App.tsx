import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { TabNavigator } from './routes/tab.navigator';
import WelcomeStack from './routes/welcome.navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './routes/homeStack.navigator';

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
      <Stack.Navigator>
        {!user ?
        <Stack.Screen component={WelcomeStack} name="WelcomeStack"  options={{ headerShown: false }}/> 
         :
         <Stack.Screen component={TabNavigator} name="TabNavigator"  options={{ headerShown: false }}/> 
        }
       <Stack.Screen component={HomeStack} name="HomeStack"  options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
