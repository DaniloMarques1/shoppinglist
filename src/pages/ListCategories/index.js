import React from 'react';

import {
  HeaderContainer,
  Container,
  ButtonsContainer,
  ButtonIcon,
  Body
} from './styles';

import Header from '../../components/Header';
import Helper from '../../utils/helper';
import Category from '../../utils/category';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import HeaderList from '../../components/HeaderList';
import {colors} from '../../utils/colors';
import Receipt  from '../../utils/Receipt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Share from "react-native-share";
import * as Print from 'expo-print';
import {ToastAndroid} from 'react-native';

function ListCategories({navigation}) {
  const state = useSelector(store => store);

  async function saveList() {
    try {
      const listName = state.listName;
      const jsonString = JSON.stringify(state);
      await AsyncStorage.setItem(listName, jsonString);
      ToastAndroid.show("Salvo com sucesso", ToastAndroid.LONG)
    }catch(e){
      ToastAndroid.show("Erro ao tentar salvar", ToastAndroid.LONG)
    }
  }

  function handleGoAddItem() {
    navigation.navigate("AddItem");
  }

  function handleGoListItem(category) {
    navigation.navigate("ListItems", {category: category, name: Helper.translateTitle(category)});
  }

  async function handleShare() {
    const html = Receipt.generateHtml(state);
    const {uri} = await Print.printToFileAsync({html});

    Share.open({
      url: uri,
      title: "List"
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  const formatPrevision = `Previsão: ${Helper.formatCurrency(state.prevision)}`;
  const formatTotal = `Total: ${Helper.formatCurrency(state.total)}`;

  return (
    <>
      <Container>
        <HeaderContainer>
        <Header
          rightText={formatPrevision}
          leftText={formatTotal}
          totalRedText={state.total > state.prevision}
        />
        <ButtonsContainer>
          <ButtonIcon onPress={() => saveList()}>
            <Icon color={colors.primaryBlue} name="save" size={23} />
          </ButtonIcon>
          <ButtonIcon onPress={handleGoAddItem}>
            <Icon color={colors.primaryBlue} name="add-shopping-cart" size={26} />
          </ButtonIcon>
          <ButtonIcon onPress={handleShare}>
            <Icon color={colors.primaryBlue} name="share" size={26} />
          </ButtonIcon>
        </ButtonsContainer>

      </HeaderContainer>
      <Body>
        <HeaderList
          category={Category.ALIMENT}
          qtd={state.aliment.qtd}
          onPress={() => handleGoListItem("aliment")}
          total={state.aliment.total}
        />
       <HeaderList
          category={Category.DRINK}
          qtd={state.drink.qtd}
          onPress={() => handleGoListItem("drink")}
          total={state.drink.total}
        />
        <HeaderList
          category={Category.BEEF}
          qtd={state.beef.qtd}
          onPress={() => handleGoListItem("beef")}
          total={state.beef.total}
        />
        <HeaderList
          category={Category.FROZEN}
          qtd={state.frozen.qtd}
          onPress={() => handleGoListItem("frozen")}
          total={state.frozen.total}
        />
        <HeaderList
          category={Category.CLEANING}
          qtd={state.cleaning.qtd}
          onPress={() => handleGoListItem("cleaning")}
          total={state.cleaning.total}
        />
        <HeaderList
          category={Category.DESSERT}
          qtd={state.dessert.qtd}
          onPress={() => handleGoListItem("dessert")}
          total={state.dessert.total}
        />
        <HeaderList
          category={Category.FLAVORING}
          qtd={state.flavoring.qtd}
          onPress={() => handleGoListItem("flavoring")}
          total={state.flavoring.total}
        />
        <HeaderList
          category={Category.OTHERS}
          qtd={state.others.qtd}
          onPress={() => handleGoListItem("others")}
          total={state.others.total}
        />
      </Body>
     </Container>
    </>
  );
}

export default ListCategories;
