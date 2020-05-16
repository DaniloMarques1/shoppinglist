import React from 'react';

import {Container, HeaderRightText, HeaderLeftText} from './styles';

function ItemHeader({rightText, leftText}) {
  return (
    <Container>
      <HeaderRightText>{rightText}</HeaderRightText>
      <HeaderLeftText>{leftText}</HeaderLeftText>
    </Container>
  );
}

export default ItemHeader;
