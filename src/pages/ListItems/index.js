import React, {useEffect} from 'react';

import {
  Container,
  ButtonsContainer,
  ButtonIcon,
  HeaderContainer,
  List
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../utils/colors';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import Helper from '../../utils/helper';
import {useSelector} from 'react-redux';

function ListItems({navigation, route}) {
  const category = route.params?.category;
  const item = useSelector(store => store[category]);

  const formatQtd   = `Qtd: ${item.qtd}`;
  const formatTotal = `Total: ${Helper.formatCurrency(item.total)}`;

  function handleGoAddItem() {
    navigation.navigate("AddItem");
  }

  function handleEditItem(item) {
    console.log(item);
    console.log(category);
    navigation.navigate("UpdateItem" , {category, item});
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
      </ButtonsContainer>
      <List
        data={item.items}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <ItemCard item={item} onPress={() => handleEditItem(item)} />
        )}
      />
    </Container>
  );
}

export default ListItems;
