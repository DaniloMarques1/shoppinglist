import React from 'react';

import {Container, HeaderRightText, HeaderLeftText} from './styles';

function Header({rightText, leftText}) {
  return (
    <Container>
      <HeaderRightText>{rightText}</HeaderRightText>
      <HeaderLeftText>{leftText}</HeaderLeftText>
    </Container>
  );
}

export default Header;
