import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { AsyncStorage, Alert } from 'react-native';

import api from '../services/api';

interface AuthState {
  id: number;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        'id',
        'user',
      ]);

      if (token[1] && user[1]) {
        setData({ id: Number(token[1]), user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {

    const response = await api.post('login/', {
      email,
      password,
    });

    const { id, status: user } = response.data;

    await AsyncStorage.multiSet([
      ['id', String(id)],
      ['user', JSON.stringify(user)],
    ]);

    setData({ id, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['id', 'user']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
