import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  margin-bottom: 15px;
  background-color: ${(props) => props.purchased ? colors.primaryGreen : colors.primaryWhite};
  padding: 10px 12px;
  border-radius: 8px;
  elevation: 5;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const RightView = styled.View`
  width: 80%;
`;

export const ItemText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.primaryBlue};
  font-weight: bold;
`;

export const LeftView = styled.View`
  width: 20%;
`;

export const IconButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const QtdText = styled.Text`
  margin-left: auto;
  color: ${colors.primaryBlue};
  font-size: 15px;
`;

export const PriceText = styled.Text`
  color: ${colors.primaryBlue};
  font-size: 15px;
`;
