import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import * as Progress from 'react-native-progress';

import { useAuth } from '../../hooks/Auth';

import userImg from '../../assets/user.png';

import {
  Container,
  Card,
  Username,
  EditProfile,
  EditProfileText,
  RankText,
  RankHighlight,
  XpView,
  XpText,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Card>
        <TouchableOpacity onPress={signOut}>
          <Text>Sair</Text>
        </TouchableOpacity>
        <Image source={userImg} />
        <Username>{ user.username }</Username>
        <EditProfile onPress={() => { console.log('Teste')}}>
          <EditProfileText>Editar perfil</EditProfileText>
        </EditProfile>
        <RankText>
          Você está no rank
          <RankHighlight> Amador</RankHighlight>
        </RankText>
        <XpView>
          <XpText>300xp / 1000xp</XpText>
          <Progress.Bar
            progress={0.3}
            width={300}
            height={13}
            borderWidth={0}
            borderRadius={10}
            color="#6BD5E1"
            unfilledColor="#ddd"
          />
        </XpView>
      </Card>

      <Card>

      </Card>
    </Container>
  );
}

export default Dashboard;
