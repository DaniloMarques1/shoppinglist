import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  margin: 100px 20px;
`;

export const TextDescription = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${colors.primaryBlue}
  margin-bottom: 50px;
`;

export const ButtonContainer = styled.View`
  margin: 10px 0;
`;

export const ModalContainer = styled.View`
  justify-content: center;
  background-color: ${colors.primaryWhite};
  width: 350px;
  height: 250px;
  border-radius: 10px;
  padding: 10px;
`;

export const Label = styled.Text`
  font-size: 17px;
  color: ${colors.primaryBlue};
  text-align: center;
  margin-bottom: 10px;
`;

export const ViewButton = styled.View`
  margin-top: 20px;
`;

export const ErrorText = styled.Text`
  color: ${colors.primaryRed}; 
  font-size: 15px;
  margin-bottom: 5px;
`;
