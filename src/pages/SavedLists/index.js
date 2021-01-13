import React, {useState, useEffect} from 'react';

import {
  List,
  Container,
  ListName,
  IconView,
  IconButton,
  ModalContainer,
  Label,
  ViewButton,
  EmptyListText
} from './styles';

import {useDispatch} from 'react-redux';
import {TouchableOpacity, ToastAndroid, Alert} from 'react-native';

import Modal from 'react-native-modal';

import AsyncStorage from '@react-native-community/async-storage';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ErrorView from '../../components/ErrorView';
import {recoveryList, updateList} from '../../store/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../utils/colors'
import {Formik} from 'formik';

import * as yup from 'yup';

function RenderList({item, onPress, handleRemove, handleEdit}) {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <Container>
        <ListName>{item}</ListName>
        <IconView>
          <IconButton onPress={() => handleEdit(item)}>
            <Icon name="edit" size={22} color={colors.primaryBlue} />
          </IconButton>
          <IconButton onPress={() => handleRemove(item)}>
            <Icon name="delete" size={22} color={colors.primaryRed} />
          </IconButton>
        </IconView>
      </Container>
    </TouchableOpacity>
  );
}

function SavedLists({navigation}) {
  const dispatch = useDispatch();
  const [lists, setLists] = useState([]); // name of the lists saved
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(null); // list selected to edit
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getAllListsSaves() {
      try {
        const keys = await AsyncStorage.getAllKeys();
        if (keys.length === 0)
          setEmptyList(true);
        setLists(keys);
      } catch(e) {
        ToastAndroid.show("Erro inesperado", ToastAndroid.SHORT);
      }
    }

    getAllListsSaves();
  }, []);

  async function handleRecovery(item) {
    try {
      const jsonStr = await AsyncStorage.getItem(item);
      dispatch(recoveryList(JSON.parse(jsonStr)));
      navigation.navigate("ListCategories", {listName: item});
    } catch(e) {
      console.log(e);
      ToastAndroid.show("Erro inesperado", ToastAndroid.SHORT);
    }
  }

  async function handleEditList(item) {
    try {
      const jsonStr = await AsyncStorage.getItem(item);
      const json = JSON.parse(jsonStr);
      setList(json);
    } catch(e) {
      console.log(e);
      ToastAndroid.show("Erro inesperado", ToastAndroid.SHORT);
    }
    setOpen(true);
  }

  async function handleEdit(values) {
    try {
      if (values.listName !== list.listName) {
        await AsyncStorage.removeItem(list.listName); // removing current name list in case the name changed
      }

      // update the lists the have the name that is shown
      setLists(prev => prev.map(prevName => {
        if (prevName !== list.listName) {
          return prevName;
        }

        return values.listName;
      }));

      // saving in asyncstorage the list with the new name and prevision
      list.listName = values.listName;
      list.prevision = values.prevision;

      await AsyncStorage.setItem(list.listName, JSON.stringify(list));
      setOpen(false);
    } catch(e) {
      console.log(e);
      ToastAndroid.show("Erro inesperado ao editar a lista", ToastAndroid.SHORT);
    }
  }

  async function handleRemoveList(item) {
    try {
      if (lists.length === 1)
        setEmptyList(true);
      setLists(prevList => prevList.filter(list => list !== item));
      await AsyncStorage.removeItem(item);
    } catch(e) {
      ToastAndroid.show("Erro inesperado enquanto removia lista", ToastAndroid.SHORT);
    }
  }

  function openAlertRemove(item) {
    Alert.alert("", "Deseja mesmo remover a lista?", [
      {
        text: "Sim",
        onPress: () => handleRemoveList(item)
      },
      {
        text: "Não",
        onPress: null
      }
    ]);
  }

  const validationSchema = yup.object().shape({
    listName: yup.string().required("Você deve fornecer um nome para a lista"),
    prevision: yup.number().typeError("Deve ser um valor apenas contendo números")
                .required("Você deve fornecer uma previsão")
                .min(1, "Sua lista deve ter uma previsão maior que 0")
  });

  return (
    <>
      {emptyList && (
        <EmptyListText>Você não possui listas salvas</EmptyListText>
      )}
      <List
        data={lists}
        keyExtractor={item => String(lists.indexOf(item))}
        renderItem={({item}) => (
          <RenderList item={item} onPress={handleRecovery} handleRemove={openAlertRemove} handleEdit={handleEditList} />
        )}
      />
      <Modal
        isVisible={open}
        onBackButtonPress={() => setOpen(false)}
        style={{alignItems: "center"}}
        useNativeDriver={true}
      >
          <Formik
            initialValues={{
              listName: list?.listName || "",
              prevision: list?.prevision || 0
            }}
            onSubmit={(values) => handleEdit(values)}
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
                    text="Editar"
                    icon="edit"
                    onPress={props.handleSubmit}
                  />
                </ViewButton>
              </ModalContainer>
            )}
          </Formik>
      </Modal>
    </>
  );
}

export default SavedLists;
