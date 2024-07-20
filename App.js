import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingProvider from './ShoppingProvider';
import ShoppingPage from './ShoppingPage';
import CartPage from './CartPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ShoppingProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Shopping">
          <Stack.Screen name="Shopping" component={ShoppingPage} />
          <Stack.Screen name="Cart" component={CartPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ShoppingProvider>
  );
};

export default App;
