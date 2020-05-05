import React, { useState, useCallback, useRef } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

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
  GoBack,
  GoBackText,
} from './style';

import headerImg from '../../assets/Vector.png';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const usernameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = useCallback(async () => {
    if (username && email && password) {
      try {
        await api.post('register/', {
          username, email, password
        });

        Alert.alert('Conta criada com sucesso', 'Você já pode fazer login na aplicação');

        navigation.goBack();
      } catch {
        Alert.alert('Erro ao criar conta', 'Ocorreu um erro na criação de conta, este e-mail pode já estar em uso');
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
              <Feather name="user" color="#ddd" size={28} />
              <Input
                ref={usernameInputRef}
                placeholder="Nome"
                placeholderTextColor="#f5f5f5"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
            </InputView>
            <InputView>
              <Feather name="mail" color="#ddd" size={28} />
              <Input
                ref={emailInputRef}
                placeholder="E-mail"
                placeholderTextColor="#f5f5f5"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
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
                placeholderTextColor="#f5f5f5"
                value={password}
                onChangeText={setPassword}
              />
            </InputView>
            <Button onPress={handleSignUp}>
              <ButtonGradient>
                <ButtonText>Criar conta</ButtonText>
              </ButtonGradient>
            </Button>

            <GoBack onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={20} color="#fff" />
              <GoBackText>Voltar para o login</GoBackText>
            </GoBack>
          </Content>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUp;
