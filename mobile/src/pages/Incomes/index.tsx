import React, {useRef, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import RBSheet from "react-native-raw-bottom-sheet";

import {
    AddButton,
    AddButtonGradient,
    AddButtonText,
    Container,
    EmptyContainer,
    FAB,
    Form,
    Image,
    Input,
    InputGroup,
    InputLabel,
    Title
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
                    <Title>PARA COMEÇARMOS, INFORME A SUA RENDA</Title>
                    <Image source={img}/>
                </EmptyContainer>
            )
            }

            <FAB onPress={() => refRBSheet.current.open()}>
                <Feather name="plus" size={40} color="rgba(61, 0, 142, 0.25)"/>
            </FAB>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={550}
                duration={250}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'transparent'
                    },
                    draggableIcon: {
                        width:292,
                        marginTop: "6%",
                        marginBottom: "8%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)"
                    },
                    container: {
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                    }
                }}
            >
                <Form>
                    <InputGroup>
                        <InputLabel>Qual a sua fonte de renda?</InputLabel>
                        <Input placeholder="Ex: Salário"/>
                    </InputGroup>

                    <InputGroup>
                        <InputLabel>Qual o tipo de renda?</InputLabel>
                        <Input placeholder="Ex: Salário"/>
                    </InputGroup>

                    <InputGroup>
                        <InputLabel>Qual o valor dessa renda?</InputLabel>
                        <Input placeholder="Ex: Salário"/>
                    </InputGroup>

                    <InputGroup>
                        <InputLabel>Qual a frequencia de recebimento?</InputLabel>
                        <Input placeholder="Ex: Salário"/>
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