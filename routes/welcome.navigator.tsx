import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../app/screen/login/login';
import HomeStack from './homeStack.navigator';
import { Welcome } from '../app/screen/welcome/welcome';
import { NavigationContainer } from '@react-navigation/native';

export type StackParamList = {
  Welcome: undefined;
  Login: undefined;
  HomeStack: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function WelcomeStack() {

  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='HomeStack' component={HomeStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
