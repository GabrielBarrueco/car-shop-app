import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../app/screen/login/login';
import Home from '../app/screen/home/home';
import Detail from '../app/screen/detail/detail';
import HomeStack from './stack.navigator';
import { Welcome } from '../app/screen/welcome/welcome';

const Stack = createNativeStackNavigator();

export default function WelcomeStack() {

  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='HomeStack' component={HomeStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
