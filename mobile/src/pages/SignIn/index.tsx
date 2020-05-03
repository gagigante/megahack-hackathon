import React from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  HeaderTextView,
  HeaderText,
  Content,
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
            <Input placeholder="E-mail" placeholderTextColor="#f5f5f5" />
            <Input secureTextEntry placeholder="Senha" />
            <Button>
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
