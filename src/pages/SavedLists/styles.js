import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const List = styled.FlatList`
  margin-left: 3px;
  margin-right: 3px;
`;

export const Container = styled.View`
  width: 100%;
  background-color: ${colors.primaryWhite}
  border-radius: 6px;
  padding: 9px;
  elevation: 5;
  margin: 10px 0 5px 0;
`;

export const ListName = styled.Text`
  color: ${colors.primaryBlue}
`;

export const IconButton = styled.TouchableOpacity`
 margin-right: 5px;
`;

export const IconView = styled.View`
  margin-left: auto;
  flex-direction: row;
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
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ViewButton = styled.View`
  margin-top: 20px;
`;

export const EmptyListText = styled.Text`
  text-align: center;
  color: ${colors.primaryBlue}
  font-size: 19px;
  margin-top: 10px;
`;
