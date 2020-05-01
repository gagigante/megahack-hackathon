import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7E00DE', '#FF3F85'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 50px 0;
`

export const Title = styled.Text`
  color: #d4ac50;
  font-size: 42px;
  text-align: center;
  margin-bottom: 50px;
`;

export const Image = styled.Image``;

export const Form = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const InputGroup = styled.View`
  margin: 10px 30px;
`;

export const InputLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  padding: 8px 10px;
  background-color: rgba(125, 125, 100, 0.1);
  border-radius: 8px;
`;

export const AddButton = styled.TouchableOpacity`
  margin: 20px 30px;
  height: 50px;
  border-radius: 8px;  
`;

export const AddButtonGradient = styled(LinearGradient).attrs({
  colors: ['#7E00DE', '#FF3F85'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const FAB = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;

  height: 70px;
  width: 70px;
  border-radius: 35px;

  background-color: rgba(255,255,255,0.7);

  justify-content: center;
  align-items: center;
`;