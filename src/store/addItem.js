export function addItem(state, category, item) {
  const itemTotal = item.price * item.qtd;
  const newCategoryTotal = getNewCategoryTotal(state[category].total, itemTotal);
  const newStateTotal = getNewStateTotal(state.total, itemTotal);
  const newCategoryQtd = getNewCategoryQtd(state[category].qtd, item.qtd);
  item.id = getItemId(state, category);

  return {...state, [category]: {
    items: [...state[category].items, item],
    total: newCategoryTotal,
    qtd: newCategoryQtd
  }, total: newStateTotal};
}

function getNewCategoryTotal(categoryTotal, itemTotal) {
  return categoryTotal + itemTotal;
}

function getNewStateTotal(stateTotal, itemTotal) {
  return stateTotal + itemTotal;
}

function getItemId(state, category) {
  const categoryItems = state[category].items;
  if (!categoryItems.length) return 1;

  const lastItem = categoryItems[categoryItems.length -1];
  return lastItem.id + 1;
}

function getNewCategoryQtd(categoryQtd, itemQtd) {
  return categoryQtd, itemQtd;
}
