import React, { useState, useRef } from 'react';
import { Feather } from '@expo/vector-icons';
import RBSheet from "react-native-raw-bottom-sheet";

import { 
  Container, 
  EmptyContainer, 
  Title, 
  Image, 
  FAB,
  Form,
  InputGroup,
  InputLabel,
  Input,
  AddButton,
  AddButtonGradient,
  AddButtonText
} from './styles';

import img from '../../assets/student-colour.png';

const Incomes: React.FC = () => {
  const [incomes, setIncomes] = useState([]);

  const refRBSheet = useRef(null);

  return (
    <Container>

      {incomes.length > 0 ? (
        <Title>Ola mundo</Title>
        ) : (
          <EmptyContainer>
            <Title>Para começarmos informe sua renda</Title>
            <Image source={img}/>
          </EmptyContainer>
        )
      }

      <FAB onPress={() => refRBSheet.current.open()}>
        <Feather name="plus" size={32} color="#030303" />
      </FAB>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={350}
        duration={250}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent'
          },
          draggableIcon: {
            backgroundColor: "#000"
          },
          container: {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }
        }}
      >
        <Form>
          <InputGroup>
            <InputLabel>Qual a sua fonte de renda?</InputLabel>
            <Input placeholder="Ex: Salário" />
          </InputGroup>

          <InputGroup>
            <InputLabel>Qual o valor da renda?</InputLabel>
            <Input placeholder="Ex: Salário" />
          </InputGroup>

          <AddButton onPress={() => refRBSheet.current.close()}>
            <AddButtonGradient>
              <AddButtonText>Confirmar</AddButtonText>
            </AddButtonGradient>
          </AddButton>
        </Form>
      </RBSheet>
    </Container>
  );
}

export default Incomes;