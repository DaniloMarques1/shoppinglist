import {
  CREATE_LIST,
  ADD_ITEM,
  REMOVE_ITEM,
  RECOVERY_LIST,
  UPDATE_ITEM 
} from './actions';

import { removeItem } from './removeItem'
import { addItem } from './addItem';
import { updateItem } from './updateItem';

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
      return updateItem(state, action.category, action.oldItem, action.updatedItem);
    }
    default:
      return state;
  }
}
