import React from 'react';

import {
  HeaderContainer,
  Container,
  ButtonsContainer,
  ButtonIcon
} from './styles';

import Header from '../../components/Header';
import Helper from '../../utils/helper';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import HeaderList from '../../components/HeaderList';
import {colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ListCategories({navigation}) {
  const state = useSelector(store => store);

  async function saveList() {
    const jsonString = JSON.stringify(state);
    try {
      await AsyncStorage.setItem("shoppinglist", jsonString);
    }catch(e){
      //TODO: deal with errors
    }
  }
  function handleGoAddItem() {
    navigation.navigate("AddItem");
  }

  function handleGoListItem(category) {
    navigation.navigate("ListItems", {category: category, name: Helper.translteTitle(category)});
  }

  const formatPrevision = `Previsão: ${Helper.formatCurrency(state.prevision)}`;
  const formatTotal = `Total: ${Helper.formatCurrency(state.total)}`;

  return (
    <>
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
        </ButtonsContainer>

      </HeaderContainer>
      <Container>
        <HeaderList
          category="Alimento"
          qtd={state.aliment.qtd}
          onPress={() => handleGoListItem("aliment")}
          total={state.aliment.total}
        />
       <HeaderList
          category="Bebida"
          qtd={state.drink.qtd}
          onPress={() => handleGoListItem("drink")}
          total={state.drink.total}
        />
        <HeaderList
          category="Carne"
          qtd={state.beef.qtd}
          onPress={() => handleGoListItem("beef")}
          total={state.beef.total}
        />
        <HeaderList
          category="Congelados"
          qtd={state.frozen.qtd}
          onPress={() => handleGoListItem("frozen")}
          total={state.frozen.total}
        />
        <HeaderList
          category="Limpeza"
          qtd={state.cleaning.qtd}
          onPress={() => handleGoListItem("cleaning")}
          total={state.cleaning.total}
        />
        <HeaderList
          category="Sobremesa"
          qtd={state.dessert.qtd}
          onPress={() => handleGoListItem("dessert")}
          total={state.dessert.total}
        />
        <HeaderList
          category="Tempero"
          qtd={state.flavoring.qtd}
          onPress={() => handleGoListItem("flavoring")}
          total={state.flavoring.total}
        />
     </Container>
    </>
  );
}

export default ListCategories;
