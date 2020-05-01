import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const FormStack = createStackNavigator();

import PlanningRoutes from './Planning';

const Routes: React.FC = () => {
  return (    
    <NavigationContainer>
      <PlanningRoutes />
    </NavigationContainer>
  );
}

export default Routes;