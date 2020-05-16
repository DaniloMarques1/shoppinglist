import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {ButtonContainer, ButtonText, IconView} from './styles';

/**
 * text - string of the button
 * icon - string icon name
 */
function Button({onPress, text, icon, color}) {
  return (
    <>
      <ButtonContainer onPress={onPress} color={color}>
       {icon && (
          <IconView>
              <Icon size={16} name={icon} color="#fff" />
          </IconView>
       )}
        <ButtonText>
          {text}
        </ButtonText>
      </ButtonContainer>
    </>
  );
}

export default Button;
