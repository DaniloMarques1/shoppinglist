import Helper from './helper';

export default class Receipt {
  /**
   *@param data - object with the list items
   */
  static generateHtml(data) {
    const dt = new Date();
    let day = dt.getDate();
    let month = dt.getMonth() + 1;
    const year = dt.getFullYear();
    if (Number(day) < 10) day = `0${day}`;
    if (Number(month) < 10) month = `0${month}`;

    let html = `<html lang="pt-br">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">

          <title>Receipt</title>

          <style>
            *{
              padding: 0;
              margin: 0;
            } 

            .container {
              display: flex;
              flex-direction: column;
            }

            .header {
              align-self: center;
              margin-bottom: 20px;
            }

            .header p{
              text-align: center;
            }

            table {
              border-collapse: collapse;
              width: 100%;
            }

           table, th, td {
             border: 1px solid black;
              padding: 3px;
           }

           tbody td {
            text-align: right;
           }

           tbody td:first-child {
            text-align: left;
           }
        
          tfoot td {
            text-align: right;
         }

         tfoot td:first-child {
          text-align: left;
         }

            .list h3 {
              margin: 10px 0;
            }
           
          </style>

        </head>
        <body>
          <div class="container">

            <header class="header">
              <h2>Lista de compras</h2>
              <p>${day}/${month}/${year}</p>
            </header>
          </div>

          <section class="list">
            <p>Previsão: ${Helper.formatCurrency(data.prevision)}</p>
            <p>Total: ${Helper.formatCurrency(data.total)}</p>
            `
      const categories = ["aliment", "beef", "cleaning", "dessert", "drink", "flavoring", "frozen", "others"];
      categories.forEach(category => {
        let items = data[category];
        const categoryTranslated = Helper.translteTitle(category);
        if (items.items.length > 0) {
          html += `
            <h3>${categoryTranslated}</h3>
              <table>
                <thead>
                  <tr>
                    <th>Nome do produto</th>
                    <th>Quantidade</th>
                    <th>Preço (unidade)</th>
                  </tr>
                </thead>
              <tbody>
          `;
          items.items.forEach(item => {
            html += `
              <tr>
                <td>${item.name}</td>
                <td>${Helper.formatQtd(item.qtd)}</td>
                <td>${Helper.formatCurrency(item.price)}</td>
              </tr>
          `;
          });
          html += `
            </tbody>
            <tfoot>
              <tr>
                <td>Total de ${categoryTranslated}</td>
                <td colspan="2">${Helper.formatCurrency(items.total)}</td>
              </tr>
            </tfoot>
            </table>`
        }
      });

    html += "</section></div></html>"
    return html;
  }

}
