import React from 'react';

import {Container, HeaderRightText, HeaderLeftText} from './styles';

function Header({rightText, leftText, redLeftText}) {
  return (
    <Container>
      <HeaderRightText redLeftText={redLeftText}>{rightText}</HeaderRightText>
      <HeaderLeftText>{leftText}</HeaderLeftText>
    </Container>
  );
}

export default Header;
