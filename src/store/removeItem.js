export function removeItem(state, category, itemToBeRemoved) {
  const itemTotal = itemToBeRemoved.price * itemToBeRemoved.qtd;
  const newCategoryTotal = getNewCategoryTotal(state[category].total, itemTotal);
  const newCategoryQtd = getNewCategoryQtd(state[category].qtd, itemToBeRemoved.qtd);
  const newStateTotal = getNewStateTotal(state.total, itemTotal);
  const newCategoryItems = getNewCategoryItems(state[category].items, itemToBeRemoved);
  
  return {...state, [category]: {items: newCategoryItems, qtd: newCategoryQtd, total: newCategoryTotal}, total: newStateTotal};
}

function getNewStateTotal(stateTotal, itemToBeRemovedTotal) {
  return stateTotal - itemToBeRemovedTotal;
}

function getNewCategoryTotal(categoryTotal, itemToBeRemovedTotal) {
  return categoryTotal - itemToBeRemovedTotal;
}

function getNewCategoryQtd(categoryQtd, itemToBeRemovedQtd) {
  return categoryQtd - itemToBeRemovedQtd;
}

function getNewCategoryItems(items, itemToBeRemoved) {
  return items.filter(item => item.id !== itemToBeRemoved.id);
}
