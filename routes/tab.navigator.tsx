import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../app/screen/cart/cart';
import HomeStack from './homeStack.navigator';
import { ShoppingCart, Home } from 'lucide-react-native';
import { useCartStore } from '../store/cartStore';

export function TabNavigator() {
  const Tab = createBottomTabNavigator()
  const { count } = useCartStore();
  const value = count();
  
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='HomeStack' 
        component={HomeStack} 
        options={{ 
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return <Home style={{ color: "#000" }}/>;
          }
        }}/>
      <Tab.Screen 
        name='Cart' 
        component={Cart} options={{ 
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarIcon: () => {
          return <ShoppingCart style={{ color: "#000" }}/>;
        },
        tabBarBadge: value > 0 ? value : undefined,
      }} />
    </Tab.Navigator>
  )
}