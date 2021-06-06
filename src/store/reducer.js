import {
  CREATE_LIST,
  ADD_ITEM,
  REMOVE_ITEM,
  RECOVERY_LIST,
  UPDATE_ITEM 
} from './actions';

import { removeItem } from './removeItem'
import { addItem } from './addItem';

const initialState = {
  listName: "",
  total: 0,
  prevision: 0,
  aliment: {
    items: [],
    qtd: 0,
    total: 0
  },
  beef: {
    items: [],
    qtd: 0,
    total: 0
  },
  frozen: {
    items: [],
    qtd: 0,
    total: 0
  },
  drink: {
    items: [],
    qtd: 0,
    total: 0
  },
  cleaning: {
    items: [],
    qtd: 0,
    total: 0
  },
  dessert: {
    items: [],
    qtd: 0,
    total: 0
  },
  flavoring: {
    items: [],
    qtd: 0,
    total: 0
  },
  others: {
    items: [],
    qtd: 0,
    total: 0
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_LIST: {
      return {...initialState, prevision: action.prevision, listName: action.listName};
    }
    case RECOVERY_LIST: {
      return action.state;
    }
    case ADD_ITEM: {
      return addItem(state, action.category, action.item);
    }
    case REMOVE_ITEM: {
      return removeItem(state, action.category, action.item);
    }
    case UPDATE_ITEM: {
      // precisamos alterar o total da categoria e o total geral
      const {category, updatedItem, item} = action;

      const newItemTotal = updatedItem.price * updatedItem.qtd;
      const itemTotal = item.price * item.qtd;

      const categoryTotal = (state[category].total - itemTotal) + newItemTotal;
      const newTotal = (state.total - itemTotal) + newItemTotal;

      // precisamos alterar a quantidade da categoria
      const categoryQtd = (state[category].qtd - item.qtd) + updatedItem.qtd;
      return {
        ...state,
        total: newTotal,
        [category]: {
          total: categoryTotal,
          qtd: categoryQtd,
          items: state[category].items.map(element => {
            if (element.id !== updatedItem.id) {
              return element;
            }

            return updatedItem
          })
        }
      }
    }
    default:
      return state;
  }
}
