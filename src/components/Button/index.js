import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {ButtonContainer, ButtonText, IconView} from './styles';

/**
 * text - string of the button
 * icon - string icon name
 */
function Button({text, icon, color}) {
  console.log(color);
  return (
    <>
      <ButtonContainer color={color}>
        <IconView>
          {icon && (
            <Icon size={16} name={icon} color="#fff" />
          )}
        </IconView>
        <ButtonText>
          {text}
        </ButtonText>
      </ButtonContainer>
    </>
  );
}

export default Button;
