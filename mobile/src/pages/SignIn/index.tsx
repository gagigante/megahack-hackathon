import React, { useState, useCallback, useRef } from 'react';
import { Image, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { useAuth } from '../../hooks/Auth';

import {
  Container,
  HeaderTextView,
  HeaderText,
  Content,
  InputView,
  Input,
  Button,
  ButtonGradient,
  ButtonText,
  CreateAccount,
  CreateAccountText,
} from './styles';

import headerImg from '../../assets/Vector.png';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const { signIn, user } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = useCallback(async () => {
    if (email && password) {
      try {
        await signIn({ email, password });
      } catch {
        Alert.alert('Erro no login', 'Ocorreu um erro na autenticação, cheque suas credenciais');
      }
    } else {
      Alert.alert('Atenção', 'Preencha os campos');
    }
  }, [email, password])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Image source={headerImg} />
          <HeaderTextView>
            <HeaderText>{`SEUS SONHOS\n+\nSUAS FINANÇAS!`}</HeaderText>
          </HeaderTextView>

          <Content>
            <InputView>
              <Feather name="mail" color="#ddd" size={28} />
              <Input
                ref={emailInputRef}
                placeholder="E-mail"
                placeholderTextColor="#a1a1a1"
                value={email}
                onChangeText={setEmail}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
            </InputView>
            <InputView>
              <Feather name="lock" color="#ddd" size={28} />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                placeholder="Senha"
                placeholderTextColor="#a1a1a1"
                value={password}
                onChangeText={setPassword}
              />
            </InputView>
            <Button onPress={handleSignIn}>
              <ButtonGradient>
                <ButtonText>Entrar</ButtonText>
              </ButtonGradient>
            </Button>

            <CreateAccount onPress={() => navigation.navigate('SignUp')}>
              <CreateAccountText>Criar conta</CreateAccountText>
            </CreateAccount>
          </Content>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignIn;
