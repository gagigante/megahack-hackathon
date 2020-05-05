import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #4F00C3;
`;

export const Card = styled.View`
  margin: 30px 10px 0;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
`;

export const Username = styled.Text`
  margin: 15px auto 10px;
  color: #7E00DE;
  font-size: 36px;
  font-weight: bold;
`;

export const EditProfile = styled.TouchableOpacity``;

export const EditProfileText = styled.Text`
  color: #a1a1a1;
`;

export const RankText = styled.Text`
  color: #595959;
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
`;

export const RankHighlight = styled.Text`
  color: #6BD5E1;
`;

export const XpView = styled.View`
  padding: 15px 0;
  justify-content: center;
  align-items: center;
`;

export const XpText = styled.Text`
  margin-bottom: 8px;
`;

export const ItemRow = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  margin: 5px;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #a1a1a1;
`;

interface ValueProps {
  color: string;
}

export const Value = styled.Text<ValueProps>`
  font-size: 16px;
  color: ${props => props.color}
`;
