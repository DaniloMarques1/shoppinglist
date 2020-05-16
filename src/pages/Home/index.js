import React, {useState} from 'react';

import {Container, TextDescription, ModalContainer, Label, ViewButton} from './styles';
import {useDispatch} from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {colors} from '../../utils/colors';
import Modal from 'react-native-modal';
import {createList} from '../../store/actions'

function Home({navigation}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [prevision, setPrevision] = useState("");

  const handleNavigation = () => {
    setOpen(false);
    dispatch(createList(prevision));
    navigation.navigate("ListItems");
  }

  return (
    <Container>
      <TextDescription>
      Crie Listas de compras e controle o quanto você deseja gastar e o quanto você ja gastou!!
      </TextDescription>
      <Button
        onPress={() => setOpen(true)}
        color={colors.primaryBlue} 
        text="Criar nova lista de compras"
      />

      <Modal
        isVisible={open}
        onBackButtonPress={() => setOpen(false)}
        style={{alignItems: "center"}}
        useNativeDriver={true}
      >
        <ModalContainer>
          <Label>Qual sua previsão de gastos? </Label>
          <Input
            placeholder="400"
            type="numeric"
            value={prevision}
            onChangeText={setPrevision}
          />
          <ViewButton>
            <Button
              color={colors.primaryBlue}
              text="Criar"
              icon="send"
              onPress={handleNavigation}
            />
          </ViewButton>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default Home;
