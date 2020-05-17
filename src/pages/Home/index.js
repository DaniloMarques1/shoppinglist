import React, {useState, useEffect} from 'react';

import {Container, TextDescription, ModalContainer, Label, ViewButton} from './styles';
import {useDispatch} from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {colors} from '../../utils/colors';
import Modal from 'react-native-modal';
import {createList, recoveryList} from '../../store/actions'
import AsyncStorage from '@react-native-community/async-storage';

function Home({navigation}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [prevision, setPrevision] = useState("");
  const [recovery, setRecovery] = useState({});

  useEffect(() => {
    async function getSavedShoppingList() {
      try {
        const jsonStr = await AsyncStorage.getItem("shoppinglist");
        const json = JSON.parse(jsonStr);
        setRecovery(json);
      } catch(e) {
        //TODO: Make an alert with the error
        console.log(e)
      }
    }

    getSavedShoppingList();
  }, []);

  const handleNavigation = () => {
    setOpen(false);
    dispatch(createList(prevision));
    navigation.navigate("ListItems");
  }

  const handleRecovery = async () => {
    //TODO: Dispatch recovery
    dispatch(recoveryList(recovery));
    navigation.navigate("ListItems");
  }

  return (
    <Container>
      <TextDescription>
      Crie Listas de compras e controle o quanto você deseja gastar e o quanto você ja gastou!!
      </TextDescription>
      <ViewButton>
        <Button
          onPress={() => setOpen(true)}
          color={colors.primaryBlue} 
          text="Criar nova lista de compras"
        />
      </ViewButton>
      {recovery && (
        <ViewButton>
          <Button
            color={colors.primaryGray} 
            text="Recuperar lista salva?"
            onPress={handleRecovery}
        />
      </ViewButton>
      )}

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