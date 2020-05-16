export const ADD_DESSERT_ITEM = "ADD_DESSERT_ITEM";
export const REMOVE_DESSERT_ITEM = "REMOVE_DESSERT_ITEM";

const initialState = {items: [], qtd: 0, total: 0}

// usado nos itens
let id = 0;
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DESSERT_ITEM: {
      const nTotal = state.total + (item.price * item.qtd)
      item.id = ++id;
      return {items: [...state.items, item], qtd: state.qtd + 1, total: nTotal}
    }
    default:
      return state;
  }
}

// item: {name, price, qtd}
export function addDessertItem(item) {
  return {
    type: ADD_DESSERT_ITEM,
    item 
  }
}
