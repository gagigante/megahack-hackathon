import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const FormStack = createStackNavigator();

import PlanningRoutes from './Planning';

import SignRoutes from './Auth';


const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <SignRoutes />
    </NavigationContainer>
  );
}

export default Routes;
