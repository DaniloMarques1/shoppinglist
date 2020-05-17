import {CREATE_LIST, ADD_ITEM, REMOVE_ITEM, RECOVERY_LIST} from './actions';

const initialState = {
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
  }
}

// usado nos itens
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_LIST: {
      return {...state, prevision: action.prevision};
    }
    case RECOVERY_LIST: {
      return action.state;
    }
    case ADD_ITEM: {
      const {category} = action;
      const itemTotal = (action.item.price * action.item.qtd);
      const nCategoryTotal = state[category].total + itemTotal;
      const nTotal = state.total + itemTotal;
      action.item.id = state[category].items.length + 1;
      return {...state, total: nTotal, [category]: {
          items: [...state[category].items, action.item],
          total: nCategoryTotal,
          qtd: state[category].qtd + action.item.qtd
        }
      };
    }
    case REMOVE_ITEM: {
      const {category} = action;
      const nTotal = state[category].total - (action.item.price * action.item.qtd);
      const nQtd = state[category].qtd - action.item.qtd;
      const nItems = state[category].items.filter(item => item.id !== action.item.id);

      return {...state, [category]: { items: nItems, qtd: nQtd, total: nTotal}}
    }
    default:
      return state;
  }
}
