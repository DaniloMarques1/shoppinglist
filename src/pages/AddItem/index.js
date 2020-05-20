import React, {useState, useEffect} from 'react';

import {
  Container,
  Title,
  Label,
  InputQtd,
  InputLine,
  InputPrice,
  PickerContainer,
  ButtonContainer
} from './styles';

import {useDispatch} from 'react-redux';
import {addItem} from '../../store/actions';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';
import {colors} from '../../utils/colors';

function AddItem({navigation, route}) {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQtd, setItemQtd] = useState("");
  const [category, setCategory] = useState("");
  const fromListItem = route.params?.fromListItem;

  useEffect(() => {
    if (route.params?.category) setCategory(route.params.category)
  }, []);

  function handleAddItem() {
    // TODO: Deal if we left some inputs blank
    const item = {
      name: itemName,
      price: parseFloat(itemPrice),
      qtd: parseInt(itemQtd),
      purchased: false
    }

    dispatch(addItem(item, category));
    navigation.goBack();
  }

  return (
    <Container>
      <Title>Informe os dados do novo item</Title>
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
      {!fromListItem && (
        <>
          <Label>Qual a categoria do item: </Label>
          <PickerContainer>
            <Select selectedValue={category} onChange={setCategory}  />
          </PickerContainer>
        </>
      )}
      <ButtonContainer>
        <Button 
          onPress={handleAddItem}
          color={colors.primaryBlue}
          icon="send"
          text="Adicionar"
        />
      </ButtonContainer>
    </Container>
  );
}

export default AddItem;
