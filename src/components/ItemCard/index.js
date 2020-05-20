import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../utils/colors'
import Helper from '../../utils/helper'
import {
  Container,
  RightView,
  ItemText,
  LeftView,
  IconButton,
  ContainerRow,
  QtdText,
  PriceText,
} from './styles';

function ItemCard({item, onPress}) {
  return (
    <Container purchased={item.purchased}>
      <ContainerRow>
        <RightView>
          <ItemText>{item.name}</ItemText>
        </RightView>
        <LeftView>
          <IconButton onPress={onPress}>
            <Icon name="edit" size={17} color={colors.primaryBlue} />
          </IconButton>
        </LeftView>
      </ContainerRow>
      <ContainerRow>
        <LeftView>
          <PriceText>
            {Helper.formatCurrency(item.price)}
          </PriceText>
        </LeftView>
        <RightView>
          <QtdText>
            {item.qtd}
          </QtdText>
        </RightView>
      </ContainerRow>
    </Container>
  );
}

export default ItemCard;
