import React, {useState, useEffect} from 'react';

import {
  Container,
  Title,
  Label,
  InputQtd,
  InputLine,
  InputPrice,
  PickerContainer,
  ButtonContainer,
} from './styles';

import {useDispatch} from 'react-redux';
import {addItem} from '../../store/actions';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';
import {colors} from '../../utils/colors';
import {Formik} from 'formik';
import * as yup from 'yup';
import ErrorView from '../../components/ErrorView';

function AddItem({navigation, route}) {
  const dispatch = useDispatch();
  const fromListItem = route.params?.fromListItem;

  const validationSchema = yup.object().shape({
    itemName: yup.string().required('Por favor dê um nome para o item'),
    itemPrice: yup.number().typeError('O preço deve ser um número'),
    itemQtd: yup.number().typeError('Número').integer("números inteiros").required("Obrigatorio"),
    category: yup.string().required("Selecione a categria")
  });

  function handleAddItem(values) {
    // TODO: Deal if we left some inputs blank
    const item = {
      name: values.itemName,
      price: values.itemPrice ? parseFloat(values.itemPrice) : 0,
      qtd: parseInt(values.itemQtd),
      purchased: false
    }

    dispatch(addItem(item, values.category));
    navigation.goBack();
   }
  return (
    <Container>
      <Title>Informe os dados do novo item</Title>
      <Formik
        initialValues={{
          itemName: '',
          itemPrice: 0,
          itemQtd: 1,
          category: route.params?.category || ''
        }}
        onSubmit={(values, {resetForm}) => handleAddItem(values, resetForm) }
        validationSchema={validationSchema}
      >
      {(props) => (
        <>
          <Label>Digite o nome do produto*: </Label>
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
              <Label>Quantidade*: </Label>
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
          {!fromListItem && (
            <>
              <Label>Qual a categoria do item*: </Label>
              <PickerContainer>
                <Select selectedValue={props.values.category} onChange={props.handleChange('category')}  />
              </PickerContainer>
              <ErrorView error={props.errors.category} />
            </>
          )}
          <ButtonContainer>
            <Button 
              onPress={props.handleSubmit}
              color={colors.primaryBlue}
              icon="send"
              text="Adicionar"
            />
          </ButtonContainer>
        </>
      )}
      </Formik>
    </Container>
  );
}

export default AddItem;
