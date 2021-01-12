import React, {useState, useEffect} from 'react';

import {Container,
  TextDescription,
  ModalContainer,
  Label,
  ViewButton,
} from './styles';

import {useDispatch} from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {colors} from '../../utils/colors';
import Modal from 'react-native-modal';
import {createList, recoveryList} from '../../store/actions'
import AsyncStorage from '@react-native-community/async-storage';
import {Formik} from 'formik';
import * as yup from 'yup';
import ErrorView from '../../components/ErrorView';

function Home({navigation}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [recovery, setRecovery] = useState(null);

  useEffect(() => {
    async function getSavedShoppingList() {
      try {
        const jsonStr = await AsyncStorage.getItem("shoppinglist");
        const json = JSON.parse(jsonStr);
        setRecovery(json);
      } catch(e) {
        //TODO: Make an alert with the error
      }
    }

    getSavedShoppingList();
  }, []);

  const handleNavigation = (values) => {
    setOpen(false);
    dispatch(createList(values.listName, values.prevision));
    navigation.navigate("ListCategories");
  }

  function displaySavedLists() {
    navigation.navigate("SavedLists");
  }

  const validationSchema = yup.object().shape({
    listName: yup.string().required("Você deve fornecer um nome para a lista"),
    prevision: yup.number().typeError("Deve ser um valor apenas contendo números")
                .required("Você deve fornecer uma previsão")
                .min(1, "Sua lista deve ter uma previsão maior que 0")
  });

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
            text="Listas salvas"
            onPress={displaySavedLists}
        />
      </ViewButton>
      )}

      <Modal
        isVisible={open}
        onBackButtonPress={() => setOpen(false)}
        style={{alignItems: "center"}}
        useNativeDriver={true}
      >
          <Formik
            initialValues={{
              listName: "",
              prevision: 400
            }}
            onSubmit={(values) => handleNavigation(values)}
            validationSchema={validationSchema}
          >
            {(props) => (
              <ModalContainer>
                <Label>Qual nome da lista?</Label>
                <Input
                  placeholder="Nome da sua lista"
                  type="default"
                  onChangeText={props.handleChange('listName')}
                  value={String(props.values.listName)}
                />
                <ErrorView error={props.errors.listName} />

                <Label>Qual sua previsão de gastos? </Label>
                <Input
                  placeholder="400"
                  type="numeric"
                  onChangeText={props.handleChange('prevision')}
                  value={String(props.values.prevision)}
                />
                <ErrorView error={props.errors.prevision} />

                <ViewButton>
                  <Button
                    color={colors.primaryBlue}
                    text="Criar"
                    icon="send"
                    onPress={props.handleSubmit}
                  />
                </ViewButton>
              </ModalContainer>
            )}
          </Formik>
      </Modal>
    </Container>
  );
}

export default Home;
