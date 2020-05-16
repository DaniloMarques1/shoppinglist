export const ADD_BEEF_ITEM = "ADD_BEEF_ITEM";
export const REMOVE_BEEF_ITEM = "REMOVE_BEEF_ITEM";

const initialState = {items: [], qtd: 0, total: 0}

// usado nos itens
let id = 0;
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_BEEF_ITEM: {
      const nTotal = state.total + (item.price * item.qtd)
      item.id = ++id;
      return {items: [...state.items, item], qtd: state.qtd + 1, total: nTotal}
    }
    default:
      return state;
  }
}

// item: {name, price, qtd}
export function addBeefItem(item) {
  return {
    type: ADD_BEEF_ITEM,
    item 
  }
}
