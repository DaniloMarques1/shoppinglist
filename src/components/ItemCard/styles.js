import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.primaryBlue};
  margin-bottom: 15px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
`;

export const RightView = styled.View`
  width: 80%;
`;

export const ItemText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const LeftView = styled.View`
  width: 20%;
`;

export const IconButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const QtdText = styled.Text`
  margin-left: auto;
  color: ${colors.primaryGray};
  font-size: 15px;
`;

export const PriceText = styled.Text`
  color: ${colors.primaryGray};
  font-size: 15px;
`;
