import React from 'react';

import {
  HeaderContainer,
  CategoryText,
  ContainerRow,
  QtdView,
  QtdText,
  TotalText,
  TotalView,
  Button
} from './styles';
import Helper from '../../utils/helper';

function HeaderList({category, qtd, total, onPress}) {
  return (
    <Button onPress={onPress}>
      <HeaderContainer>
        <CategoryText>{category}</CategoryText>
        <ContainerRow>
          <QtdView>
            <QtdText>
              QTD: {qtd}
            </QtdText>
          </QtdView>
          <TotalView>
            <TotalText>
              Total: {Helper.formatCurrency(total)}
            </TotalText>
          </TotalView>
        </ContainerRow>
      </HeaderContainer>
    </Button>
  );
}

export default HeaderList;
