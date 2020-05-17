import React from 'react';

import {Container, ButtonsContainer, ButtonIcon, HeaderContainer, List} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../utils/colors';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import Helper from '../../utils/helper';
import {useSelector} from 'react-redux';

function ListItems({navigation, route}) {
  const category = route.params?.category;
  const item = useSelector(store => store[category]);

  console.log({item, category});

  const formatTotal = `Previsão: ${Helper.formatCurrency(item.total)}`;
  const formatQtd   = `Qtd: ${item.qtd}`;

  function handleGoAddItem() {
    navigation.navigate("AddItem");
  }

  return (
    <Container>
      <HeaderContainer>
        <Header
          rightText={formatQtd}
          leftText={formatTotal}
        />
      </HeaderContainer>
      <ButtonsContainer>
          <ButtonIcon onPress={handleGoAddItem}>
            <Icon color={colors.primaryBlue} name="add-shopping-cart" size={26} />
          </ButtonIcon>
          <ButtonIcon onPress={() => saveList()}>
            <Icon color={colors.primaryBlue} name="save" size={23} />
          </ButtonIcon>
      </ButtonsContainer>
      <List
        data={item.items}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <ItemCard item={item} />
        )}
      />
    </Container>
  );
}

export default ListItems;
