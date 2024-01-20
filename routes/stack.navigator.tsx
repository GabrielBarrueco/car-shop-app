import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../app/screen/login/login';
import Home from '../app/screen/home/home';
import Detail from '../app/screen/detail/detail';

const Stack = createNativeStackNavigator();

export default function HomeStack() {

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
