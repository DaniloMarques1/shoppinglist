import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../utils/colors'
import {Container, ItemView, ItemText, IconView, IconButton} from './styles';

function ItemCard({itemName, onPress}) {
  return (
    <Container>
      <ItemView>
        <ItemText>{itemName}</ItemText>
      </ItemView>
      <IconView>
        <IconButton onPress={onPress}>
          <Icon name="edit" size={17} color={colors.primaryBlue} />
        </IconButton>
      </IconView>
    </Container>
  );
}

export default ItemCard;
