import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

import { useAuth } from '../hooks/Auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <LinearGradient
        colors={['#7E00DE', '#FF3F85']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#fff" />
      </LinearGradient>
    );
  };

  // return <AuthRoutes />
  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
