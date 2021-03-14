import Category from './category';

export default class Helper {
  /**
   * Format the string(money) based on the type provided 
   * @number value - ex: 42.32
   * @string type - ex: pt-BR, en-EN
   */
  static formatCurrency(value, type) {
    const roundedValue = parseFloat(value).toFixed(2);
    if (!type) return `R$ ${roundedValue}`
    else return `${type} ${roundedValue}`
  }

  /**
   * Adiciona um 0 caso o qtd seja menor que 10
   *@param - qtd: string | inteiro
   * @return - retorna uma string
   */
  static formatQtd(qtd) {
    if (Number(qtd) < 10 && Number(qtd) !== 0)
      qtd = `0${qtd}`;

    return qtd;
  }

  static translateTitle(title) {
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
