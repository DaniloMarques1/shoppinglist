import Category from './category';

export default class Helper {
  /**
   * Format the string(money) based on the type provided 
   * @number value - ex: 42.32
   * @string type - ex: pt-BR, en-EN
   */
  static formatCurrency(value, type) {
    //TODO: lazy solution because javascript sucks
    const roundedValue = parseFloat(value).toFixed(2);
    return `R$ ${roundedValue}`;
  }

  static translteTitle(title) {
    switch(title) {
      case "frozen":
        return Category.FROZEN;
      case "beef":
        return Category.BEEF;
      case "aliment":
        return Category.ALIMENT;
      case "drink":
        return Category.DRINK;
      case "dessert":
        return Category.DESSERT;
      case "cleaning":
        return Category.CLEANING;
      case "flavoring":
        return Category.FLAVORING;
      case "beef":
        return Category.BEEf;
      case "others":
        return Category.OTHERS;
      default:
        return title;
    }
  }
}
