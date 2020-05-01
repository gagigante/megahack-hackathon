import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Incomes from '../../pages/Incomes';

const FormStack = createStackNavigator();

const Planning: React.FC = () => {
  return (    
    <FormStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <FormStack.Screen name="Incomes" component={Incomes} />
    </FormStack.Navigator>
  );
}

export default Planning;