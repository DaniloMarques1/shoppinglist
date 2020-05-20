import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  margin: 50px 20px 0 20px;
`;

export const Title = styled.Text`
  font-size: 17px;
  text-align: center;
  margin-bottom: 20px;
`;

export const InputLine = styled.View`
  flex-direction: row;
`;

export const InputPrice = styled.View`
  width: 70%;
  flex-direction: column;
`;

export const InputQtd = styled.View`
  width: 30%;
  flex-direction: column;
  margin-left: 5px;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
`;
