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
}
