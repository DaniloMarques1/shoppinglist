export function updateItem(state, category, oldItem, updatedItem) {
  const updatedItemTotal = updatedItem.price * updatedItem.qtd;
  const oldItemTotal = oldItem.price * oldItem.qtd;

  const newCategoryTotal = getNewCategoryTotal(state[category].total, oldItemTotal, updatedItemTotal);
  const newStateTotal = getNewStateTotal(state.total, oldItemTotal, updatedItemTotal);
  const newCategoryQtd = getNewCategoryQtd(state[category].qtd, oldItem.qtd, updatedItem.qtd);
  const newItems = getUpdatedItems(state[category].items, updatedItem);

  return {...state, [category]: {items: newItems, qtd: newCategoryQtd, total: newCategoryTotal}, total: newStateTotal };
}

function getNewCategoryTotal(categoryTotal, oldItemTotal, updatedItemTotal) {
  return (categoryTotal - oldItemTotal) + updatedItemTotal;
}

function getNewStateTotal(stateTotal, oldItemTotal, updatedItemTotal) {
  return (stateTotal - oldItemTotal) + updatedItemTotal;
}

function getNewCategoryQtd(categoryQtd, oldItemQtd, updatedItemQtd) {
  return (categoryQtd - oldItemQtd) + updatedItemQtd;
}

function getUpdatedItems(items, updatedItem) {
  const newItems = items.map(item => {
    if (item.id !== updatedItem.id) return item;
    return updatedItem;
  });

  return newItems;
}
