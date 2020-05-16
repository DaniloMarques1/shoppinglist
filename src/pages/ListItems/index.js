import React from 'react';

import {HeaderContainer} from './styles';
import HeaderList from '../../components/HeaderList';
import Helper from '../../utils/helper';
import {useSelector} from 'react-redux';

function ListItems() {
  const {
    aliment,
    beef,
    frozen,
    drink,
    flavoring,
    cleaning,
    dessert,
    total,
    prevision
  } = useSelector(store => store);
  
  const formatPrevision = `Previsão: ${Helper.formatCurrency(prevision)}`;
  const formatTotal = `Total: ${Helper.formatCurrency(total)}`;

  return (
    <>
      <HeaderContainer>
        <HeaderList
          rightText={formatPrevision}
          leftText={formatTotal}
        />
      </HeaderContainer>
    </>
  );
}

export default ListItems;
