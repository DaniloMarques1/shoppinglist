import React from 'react';

import {HeaderContainer, Container, ButtonsContainer, ButtonIcon} from './styles';
import Header from '../../components/Header';
import Helper from '../../utils/helper';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import HeaderList from '../../components/HeaderList';
import {colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ListCategories({navigation}) {
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
    }catch(e){
      console.log(e);
    }
  }
  function handleGoAddItem() {
    navigation.navigate("AddItem");
  }

  function handleGoListItem(category) {
    navigation.navigate("ListItems", {category: category, name: Helper.translteTitle(category)});
  }

  const formatPrevision = `Previsão: ${Helper.formatCurrency(prevision)}`;
  const formatTotal = `Total: ${Helper.formatCurrency(total)}`;

  return (
    <>
     <HeaderContainer>
        <Header
          rightText={formatPrevision}
          leftText={formatTotal}
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
          qtd={aliment.qtd}
          onPress={() => handleGoListItem("aliment")}
          total={aliment.total}
        />
       <HeaderList
          category="Bebida"
          qtd={drink.qtd}
          onPress={() => handleGoListItem("drink")}
          total={drink.total}
        />
        <HeaderList
          category="Limpeza"
          qtd={cleaning.qtd}
          onPress={() => handleGoListItem("cleaning")}
          total={cleaning.total}
        />
        <HeaderList
          category="Carne"
          qtd={beef.qtd}
          onPress={() => handleGoListItem("beef")}
          total={beef.total}
        />
        <HeaderList
          category="Tempero"
          qtd={flavoring.qtd}
          onPress={() => handleGoListItem("flavoring")}
          total={flavoring.total}
        />
        <HeaderList
          category="Congelados"
          qtd={frozen.qtd}
          onPress={() => handleGoListItem("frozen")}
          total={frozen.total}
        />
        <HeaderList
          category="Sobremesa"
          qtd={dessert.qtd}
          onPress={() => handleGoListItem("dessert")}
          total={dessert.total}
        />
     </Container>
    </>
  );
}

export default ListCategories;
