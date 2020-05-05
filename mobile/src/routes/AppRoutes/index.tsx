import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Dashboard from '../../pages/Dashboard';
import Dreams from '../../pages/Dreams';
import Rank from '../../pages/Rank';

import Incomes from '../../pages/Incomes';

const MainNavigator = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <MainNavigator.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      // options={{
      //   tabBarVisible: false,
      // }}
      tabBarOptions={{
        activeTintColor: '#FF3F85',
        keyboardHidesTabBar: true,
        showLabel: false,
      }}
    >
      <MainNavigator.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <MainNavigator.Screen
        name="Search"
        component={Incomes}
        options={{
          tabBarLabel: 'Procurar',
          tabBarIcon: ({ color, size }) => (
            <Feather name="pie-chart" color={color} size={size} />
          ),
        }}
      />
      <MainNavigator.Screen
        name="Add"
        component={Incomes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" color={color} size={size} />
          ),
        }}
      />
      <MainNavigator.Screen
        name="Dreams"
        component={Dreams}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="cloud" color={color} size={size} />
          ),
        }}
      />
      <MainNavigator.Screen
        name="Rank"
        component={Rank}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="award" color={color} size={size} />
          ),
        }}
      />
    </MainNavigator.Navigator>
  );
}

export default AppRoutes;
