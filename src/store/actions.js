export const CREATE_LIST = "CREATE_LIST";
export const RECOVERY_LIST = "RECOVERY_LIST";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

export function createList(prevision) {
  return {
    type: CREATE_LIST,
    prevision
  }
}

export function recoveryList(state) {
  return {
    type: RECOVERY_LIST,
    state
  }
}

export function addItem(item, category) {
  return {
    type: ADD_ITEM,
    item,
    category
  }
}

export function removeItem(item, category) {
  return {
    type: REMOVE_ITEM,
    item,
    category
  }
}

export function updateItem(itemToUpdate, category, item) {
  return {
    type: UPDATE_ITEM,
    category,
    item,
    itemToUpdate
  }
}
