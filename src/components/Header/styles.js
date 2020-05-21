import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  flex-direction: row;
`;

export const HeaderRightText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.redLeftText ? colors.primaryRed : colors.primaryGray}
`;

export const HeaderLeftText = styled.Text`
  font-size: 16px;
  color: ${colors.primaryGray};
  margin-left: auto;
`;
