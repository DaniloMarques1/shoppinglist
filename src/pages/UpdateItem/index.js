import React, {useState} from 'react';

import {
  Container,
  Title,
  Label,
  InputQtd,
  InputLine,
  InputPrice,
  ButtonContainer,
  CheckBoxContainer,
} from './styles';

import {useDispatch} from 'react-redux';
import {updateItem, removeItem} from '../../store/actions';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {colors} from '../../utils/colors';
import {Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import * as yup from 'yup';
import {Formik} from 'formik';

function UpdateItem({navigation, route}) {
  const dispatch = useDispatch();
  const category = route.params?.category;
  const item = route.params?.item;
  const [itemName, setItemName] = useState(item.name);
  const [itemPrice, setItemPrice] = useState(String(item.price));
  const [itemQtd, setItemQtd] = useState(String(item.qtd));
  const [purchased, setPurchased] = useState(item.purchased);

  function handleUpdateItem() {
    //TODO: Deal if we left some inputs blank
    const itemToUpdate = {
      id: item.id,
      name: itemName,
      price: parseFloat(itemPrice),
      qtd: parseInt(itemQtd),
      purchased
    }

    dispatch(updateItem(itemToUpdate, category, item));
    navigation.goBack();
  }

  function handleDeleteItem() {
    const itemToBeDeleted = {
      id: item.id,
      name: itemName,
      price: parseFloat(itemPrice),
      qtd: parseInt(itemQtd)
    }

    dispatch(removeItem(itemToBeDeleted, category));
    navigation.goBack();
  }

  function handleOpenAlert() {
    Alert.alert("", "Deseja mesmo apagar o item?", [
      {
        text: "Sim",
        onPress:() => handleDeleteItem()
      },
      {
        text: "Não",
        onPress: null
      }
    ]);
  }
  
  const validationSchema = yup.object().shape({
    itemName: yup.string().required("Por favor dê um nome para o item"),
    itemQtd: yup.number().typeError("Número").required("Obrigatorio"),
    category: yup.string().required("selecione uma categoria")
  });

  return (
    <Container>
      <Title> Informe os dados do novo item</Title>
      <Formik
        initialValues={{
          itemName: item.name,
          itemPrice: item.price,
          itemQtd: item.qtd,
          category: route.params?.category || ''
        }}
      >
        <Label>Digite o nome do produto: </Label>
        <Input
          placeholder="Ex: café"
          length={40}
          type="default"
          value={itemName}
          onChangeText={setItemName}
        />
        <InputLine>
          <InputPrice>
            <Label>Digite o preço: </Label>
            <Input
              placeholder="Ex: 5.50"
              length={40}
              type="numeric"
              value={itemPrice}
              onChangeText={setItemPrice}
            />
          </InputPrice>
          <InputQtd>
            <Label>Quantidade: </Label>
            <Input
              placeholder="Ex: 2"
              length={40}
              type="numeric"
              value={itemQtd}
              onChangeText={setItemQtd}
            />
          </InputQtd>
        </InputLine>
        <Label>Seleciona a categoria </Label>
        <CheckBoxContainer>
          <CheckBox
            value={purchased}
            onValueChange={setPurchased}
           />
          <Label>Comprado</Label>
        </CheckBoxContainer>
        <ButtonContainer>
          <Button 
            onPress={handleUpdateItem}
            color={colors.primaryBlue}
            icon="edit"
            text="Atualizar"
          />
        </ButtonContainer>
        <ButtonContainer>
          <Button 
            onPress={handleOpenAlert}
            color={colors.primaryRed}
            icon="delete"
            text="Apagar"
          />
        </ButtonContainer>
      </Formik>
    </Container>
  );
}

export default UpdateItem;
