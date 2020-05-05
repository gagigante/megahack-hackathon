import React, { useEffect, useState } from 'react';
import { Image } from "react-native";
import * as Progress from 'react-native-progress';

import api from '../../services/api';

import rankImg from '../../assets/rank.png';
import baloonsImg from '../../assets/baloons.png';

import first from '../../assets/1.png';
import rankUser from '../../assets/rankUser.png';

import {
  Container,
  Card,
  RankText,
  RankHighlight,
  XpView,
  XpText,
  Description,
  RankTitle,
  ItemView,
  DataView,
  NameText,
  XpInfo
} from './styles';

interface ResponseObject {
  id: Number;
  url: String;
  username: string;
  email: string;
}

const Rank: React.FC = () => {
  const [users, setUsers] = useState<ResponseObject[]>([]);

  useEffect(() => {
    async function loadUsers (): Promise<void> {
      const response = await api.get('login/');

      const { results } = response.data;

      setUsers(results);
    }

    loadUsers();
  }, []);

  return (
    <Container>
      <Card>
        <Image source={rankImg} />
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
        <RankTitle>Buddys</RankTitle>
        {users.map(user => (
          <ItemView key={String(user.id)}>
            <Image style={{ marginLeft: 30 }} source={first} />
            <Image style={{ marginLeft: 30 }} source={rankUser} />
            <DataView>
              <NameText>{user.username}</NameText>
              <XpInfo>3400 xp - pro</XpInfo>
            </DataView>
          </ItemView>
        ))}
      </Card>

      <Card style={{ marginBottom: 20}}>
        <Image source={baloonsImg} />
        <Description>
          Fique em primeiro e ganhe prêmios
        </Description>
      </Card>
    </Container>
  );
}

export default Rank;
