import React from 'react';

import {HeaderContainer, Container, ButtonsContainer, ButtonIcon} from './styles';
import HeaderList from '../../components/HeaderList';
import Helper from '../../utils/helper';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../utils/colors';
import AsyncStorage from '@react-native-community/async-storage';

function ListItems({navigation}) {
  const {
    aliment,
    beef,
    frozen,
    drink,
    flavoring,
    cleaning,
    dessert,
    total,
    prevision
  } = useSelector(store => store);

  async function saveList() {
    const jsonString = JSON.stringify({
      aliment,
      beef,
      frozen,
      drink,
      flavoring,
      dessert,
      cleaning,
      total,
      prevision
    });

    try {
      await AsyncStorage.setItem("shoppinglist", jsonString);
      console.log("Salvo com sucesso!!!");
    }catch(e){
      console.log(e);
    }
  }

  function handleGoAddItem() {
    navigation.navigate("AddItem");
  }

  const formatPrevision = `Previsão: ${Helper.formatCurrency(prevision)}`;
  const formatTotal = `Total: ${Helper.formatCurrency(total)}`;

  return (
    <>
      <HeaderContainer>
        <HeaderList
          rightText={formatPrevision}
          leftText={formatTotal}
        />
      </HeaderContainer>
      <Container>
        <ButtonsContainer>
          <ButtonIcon onPress={handleGoAddItem}>
            <Icon color={colors.primaryBlue} name="add-shopping-cart" size={26} />
          </ButtonIcon>
          <ButtonIcon onPress={() => saveList()}>
            <Icon color={colors.primaryBlue} name="save" size={23} />
          </ButtonIcon>
        </ButtonsContainer>
      </Container>
    </>
  );
}

export default ListItems;
