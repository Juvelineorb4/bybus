import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '@/screens';
import routes from '@/utils/constants/routes';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.WELCOME} component={Welcome} />
    </Stack.Navigator>
  );
}