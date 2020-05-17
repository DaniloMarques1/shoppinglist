import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const HeaderContainer = styled.View`
  width: 100%;
  padding: 2px;
  background-color: ${colors.primaryBlue}
  border-radius: 10px;
  padding: 9px;
  elevation: 5;
  margin-bottom: 10px;
`;

export const CategoryText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: ${colors.primaryWhite};
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const QtdView = styled.View`
  width: 40%;
`;

export const QtdText = styled.Text`
  color: ${colors.primaryWhite};
  font-weight: bold;
`;

export const TotalView = styled.View`
  width: 60%;
`;

export const TotalText = styled.Text`
  margin-left: auto;
  color: ${colors.primaryWhite};
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;

