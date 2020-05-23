import React from 'react';

import {Container, HeaderRightText, HeaderLeftText} from './styles';

function Header({rightText, leftText, totalRedText}) {
  return (
    <Container>
      <HeaderLeftText>{rightText}</HeaderLeftText>
      <HeaderRightText totalRedText={totalRedText}>{leftText}</HeaderRightText>
    </Container>
  );
}

export default Header;
