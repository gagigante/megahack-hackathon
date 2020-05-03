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
  GoBack,
  GoBackText,
} from './style';

import headerImg from '../../assets/Vector.png';

const SignUp: React.FC = () => {
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
            <Input placeholder="Nome" placeholderTextColor="#f5f5f5" />
            <Input placeholder="E-mail" placeholderTextColor="#f5f5f5" />
            <Input secureTextEntry placeholder="Senha" placeholderTextColor="#f5f5f5" />
            <Button>
              <ButtonGradient>
                <ButtonText>Criar conta</ButtonText>
              </ButtonGradient>
            </Button>

            <GoBack onPress={() => navigation.goBack()}>
              <GoBackText>Voltar para o login</GoBackText>
            </GoBack>
          </Content>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUp;
