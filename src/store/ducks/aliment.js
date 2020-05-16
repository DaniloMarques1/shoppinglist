export const ADD_ALIMENT_ITEM = "ADD_ALIMENT_ITEM";
export const REMOVE_ALIMENT_ITEM = "REMOVE_ALIMENT_ITEM";

const initialState = {items: [], qtd: 0, total: 0}

// usado nos itens
let id = 0;
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_ALIMENT_ITEM: {
      const nTotal = state.total + (item.price * item.qtd)
      item.id = ++id;
      return {items: [...state.items, item], qtd: state.qtd + 1, total: nTotal}
    }
    case REMOVE_ALIMENT_ITEM: {
      const nTotal = state.total - (action.item.price * action.item.qtd);
      const nQtd = state.qtd - action.item.qtd;
      const nItems = state.items.filter(item => item.id !== action.item.id);

      return {...state, items: nItems, qtd: nQtd, total: nTotal}
    }
    default:
      return state;
  }
}

// item: {name, price, qtd}
export function addAlimentItem(item) {
  return {
    type: ADD_ALIMENT_ITEM,
    item 
  }
}

export function removeAlimentItem(item) {
  return {
    type: REMOVE_ALIMENT_ITEM,
    item
  }
}
