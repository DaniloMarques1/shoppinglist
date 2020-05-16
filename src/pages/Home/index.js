import React from 'react';

import {Container, Title} from './styles';

import Button from '../../components/Button';
import {colors} from '../../utils/colors';

function Home(props) {
  const handleNavihation = () => props.navigation.navigate("ListItems");
  
  return (
    <Container>
      <Title>
        Ola, HOME!
      </Title>
      <Button onPress={handleNavihation} color={colors.primaryBlue} text="Navegar" />
    </Container>
  );
}

export default Home;
