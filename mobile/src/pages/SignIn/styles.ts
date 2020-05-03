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
  /* background-color: red; */
  padding: 0 25px;
`;

export const Input = styled.TextInput`
  padding: 8px 10px 8px 15px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 30px;
  margin-bottom: 10px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  border-radius: 30px;
  margin-bottom: 10px;
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

export const CreateAccount = styled.TouchableOpacity`
  margin: 5px auto;
`;

export const CreateAccountText = styled.Text`
  color: #fff;
`;
