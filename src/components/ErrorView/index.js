import React from 'react';

import {Container, ErrorText} from './styles';

export default function ErrorView({error}) {
  return (
    <Container>
      {error && (
        <ErrorText>{error}</ErrorText>
      )}
    </Container>
  );
}
