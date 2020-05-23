import React from 'react';

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
import ErrorView from '../../components/ErrorView';

function UpdateItem({navigation, route}) {
  const dispatch = useDispatch();
  const item = route.params?.item;

  function handleUpdateItem(values) {
    const itemToUpdate = {
      id: item.id,
      name: values.itemName,
      price: parseFloat(values.itemPrice) || 0,
      qtd: parseInt(values.itemQtd),
      purchased: values.purchased
    }
    dispatch(updateItem(itemToUpdate, values.category, item));
    navigation.goBack();
  }

  function handleDeleteItem(values) {
    const itemToBeDeleted = {
      id: item.id,
      name: values.itemName,
      price: parseFloat(values.itemPrice),
      qtd: parseInt(values.itemQtd)
    }

    dispatch(removeItem(itemToBeDeleted, values.category));
    navigation.goBack();
  }

  function handleOpenAlert(values) {
    Alert.alert("", "Deseja mesmo apagar o item?", [
      {
        text: "Sim",
        onPress:() => handleDeleteItem(values)
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
          itemPrice: item.price || 0,
          itemQtd: item.qtd || 0,
          category: route.params?.category || '',
          purchased: item.purchased
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleUpdateItem(values)}
      >
        {(props) => (
          <>
            <Label>Digite o nome do produto: </Label>
            <Input
              placeholder="Ex: café"
              length={40}
              type="default"
              value={props.values.itemName}
              onChangeText={props.handleChange('itemName')}
            />
            <ErrorView error={props.errors.itemName} />
            <InputLine>
              <InputPrice>
                <Label>Digite o preço: </Label>
                <Input
                  placeholder="Ex: 5.50"
                  length={40}
                  type="numeric"
                  value={String(props.values.itemPrice)}
                  onChangeText={props.handleChange('itemPrice')}
                />
              </InputPrice>
              <InputQtd>
                <Label>Quantidade: </Label>
                <Input
                  placeholder="Ex: 2"
                  length={40}
                  type="numeric"
                  value={String(props.values.itemQtd)}
                  onChangeText={props.handleChange('itemQtd')}
                />
                <ErrorView error={props.errors.itemQtd} />
              </InputQtd>
            </InputLine>
            <CheckBoxContainer>
              <CheckBox
                value={props.values.purchased}
                onValueChange={() => props.values.purchased
                  ? props.setFieldValue('purchased', false) 
                  : props.setFieldValue('purchased', true)
                }
               />
              <Label>Comprado</Label>
            </CheckBoxContainer>
            <ButtonContainer>
              <Button 
                onPress={props.handleSubmit}
                color={colors.primaryBlue}
                icon="edit"
                text="Atualizar"
              />
            </ButtonContainer>
            <ButtonContainer>
              <Button 
                onPress={() => handleOpenAlert(props.values)}
                color={colors.primaryRed}
                icon="delete"
                text="Apagar"
              />
            </ButtonContainer>
          </>
        )}
      </Formik>
    </Container>
  );
}

export default UpdateItem;
