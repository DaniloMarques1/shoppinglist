import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export  const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color || colors.primaryBlue};
  border-radius: 20px;
  height: 40px;
`;

export const ButtonText = styled.Text`
  color: ${colors.primaryWhite};
  text-align: center;
  font-size: 16px;
`;

export const IconView = styled.View`
  margin-top: 3px;
  margin-right: 7px;
`;

