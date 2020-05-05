import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#5600D8', '#340072'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: space-between;
  /* align-items: center; */
`;

export const HeaderTextView = styled.View`
  width: 100%;
  position: absolute;
  top: 16px;
`;

export const HeaderText = styled.Text`
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 36px;
  margin: 40px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 25px 15px;
  justify-content: flex-end;
`;

export const InputView = styled.View`
  height: 60px;
  padding: 20px;
  background-color: #310057;
  border-radius: 30px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 15px;
  font-size: 16px;
  color: #ddd;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  border-radius: 30px;
  margin-bottom: 8px;
`;

export const ButtonGradient = styled(LinearGradient).attrs({
  colors: ['#7E00DE', '#FF3F85'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GoBackText = styled.Text`
  color: #fff;
  margin-left: 8px;
`;
