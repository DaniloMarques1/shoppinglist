export const ADD_DRINK_ITEM = "ADD_DRINK_ITEM";
export const REMOVE_DRINK_ITEM = "REMOVE_DRINK_ITEM";

const initialState = {items: [], qtd: 0, total: 0}

// usado nos itens
let id = 0;
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK_ITEM: {
      const nTotal = state.total + (item.price * item.qtd)
      item.id = ++id;
      return {items: [...state.items, item], qtd: state.qtd + 1, total: nTotal}
    }
    default:
      return state;
  }
}

// item: {name, price, qtd}
export function addDrinkItem(item) {
  return {
    type: ADD_DRINK_ITEM,
    item 
  }
}
