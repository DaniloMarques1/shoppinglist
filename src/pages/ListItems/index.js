import React from 'react';

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
import {useSelector, useDispatch} from 'react-redux';
import {Alert, ToastAndroid} from 'react-native';

import {updateItem} from '../../store/actions';

function ListItems({navigation, route}) {
  const category = route.params?.category;
  const item = useSelector(store => store[category]);
  const formatQtd   = `Qtd: ${Helper.formatQtd(item.qtd)}`;
  const formatTotal = `Total: ${Helper.formatCurrency(item.total)}`;
  const dispatch = useDispatch();

  function handleGoAddItem() {
    navigation.navigate("AddItem", {category, fromListItem: true, item: Helper.translteTitle(category)});
  }

  function handleEditItem(item) {
    navigation.navigate("UpdateItem" , {category, item, title: item.name});
  }

  function handleResetItemsPrice() {
    for (const itemElement of item.items) {
      const updatedItem = {
        ...itemElement,
        price: 0,
      }
      dispatch(updateItem(updatedItem, category, itemElement));

      ToastAndroid.show(`Preços resetados com sucesso`, ToastAndroid.LONG);
    }
  }

  function openAlert() {
    Alert.alert("", "Deseja mesmo resetar os preços da categoria?", [
      {
        text: "Sim",
        onPress: () => handleResetItemsPrice()
      },
      {
        text: "Não",
        onPress: () => null
      }
    ])
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
        {item.total > 0 && (
            <ButtonIcon onPress={openAlert}>
              <Icon color={colors.primaryWarning} name="autorenew" size={26} />
            </ButtonIcon>
          )
        }
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
