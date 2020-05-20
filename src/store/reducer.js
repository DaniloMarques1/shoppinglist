import {
  CREATE_LIST,
  ADD_ITEM,
  REMOVE_ITEM,
  RECOVERY_LIST,
  UPDATE_ITEM 
} from './actions';

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
      const itemTotal = (action.item.price * action.item.qtd);
      const nCategoryTotal = state[category].total - itemTotal;
      const nTotal = state.total - itemTotal;
      const nQtd = state[category].qtd - action.item.qtd;
      const nItems = state[category].items.filter(item => item.id !== action.item.id);

      return {...state, [category]: { items: nItems, qtd: nQtd, total: nCategoryTotal}, total: nTotal}
    }
    case UPDATE_ITEM: {
      // TODO: Bug na nova qtd, caso antes tivesse 4 e eu atualizar para 3 ele vai soamr 4 + 3
      console.log(action.itemToUpdate);
      console.log(action.item);
      // precisamos alterar o total da categoria e o total geral
      const {category, itemToUpdate, item} = action;
      const newItemTotal = itemToUpdate.price * itemToUpdate.qtd;
      const itemTotal = item.price * item.qtd;
      const categoryTotal = (state[category].total - itemTotal) + newItemTotal;
      const newTotal = (state.total - itemTotal) + newItemTotal;
      console.log({newTotal, categoryTotal, itemTotal});

      // precisamos alterar a quantidade da categoria
      const categoryQtd = (state[category].qtd - item.qtd) + itemToUpdate.qtd;
      console.log(categoryQtd);
      console.log({categoryQtd});
      return {
        ...state,
        total: newTotal,
        [category]: {
          total: categoryTotal,
          qtd: categoryQtd,
          items: state[category].items.map(element => {
            if (element.id !== itemToUpdate.id) {
              return element;
            }

            return itemToUpdate
          })
        }
      }

      //const itemTotal = (action.item.price * action.item.qtd);
      //const nCategoryTotal = state[category].total + itemTotal;
      //const nTotal = state.total + itemTotal;

      //return {
      //  ...state, total: nTotal, 
      //  [category]: {
      //    items: state[category].items.map(item => {
      //      if (item.id !== action.item.id) {
      //        console.log("Item: ", item);
      //        return item;
      //      }
      //      
      //      return action.item;
      //    }),
      //    total: nCategoryTotal,
      //    qtd: state[category].qtd + action.item.qtd
      //  }
      //}
    }
    default:
      return state;
  }
}
