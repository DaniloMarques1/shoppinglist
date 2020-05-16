export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

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
