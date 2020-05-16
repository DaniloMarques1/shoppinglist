export const ADD_CLEANING_ITEM = "ADD_CLEANING_ITEM";
export const REMOVE_CLEANING_ITEM = "REMOVE_CLEANING_ITEM";

const initialState = {items: [], qtd: 0, total: 0}

// usado nos itens
let id = 0;
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CLEANING_ITEM: {
      const nTotal = state.total + (item.price * item.qtd)
      item.id = ++id;
      return {items: [...state.items, item], qtd: state.qtd + 1, total: nTotal}
    }
    default:
      return state;
  }
}

// item: {name, price, qtd}
export function addCleaningItem(item) {
  return {
    type: ADD_CLEANING_ITEM,
    item 
  }
}
