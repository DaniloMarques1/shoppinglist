# Shopping List

Criar uma nova lista de compras com uma previsão do total que deseja comprar e um total que será representado por quanto ja foi adicionado ao carrinho. 

* Previsão - O quanto deseja comprar
* Total - do que ja foi colocado no carrinho, o quanto ja gastou

Separação dos itens por categorias, por exemplo quando adicionado um novo produto, será perguntado sua categoria, e então na lista será agrupado pela categoria

#### Categorias

1. Limpeza - Sabão, sabonete, Pasta de dentes
2. Sobremesa - Sorvete, massa de bolo
3. Carne - Frango, Carne... 
4. Bebida - Regrigerante, suco...
5. Alimento - Açucar, Arroz...
6. Congelados - Pizza, Mortadela, queijo...
7. Tempero - curry

## Estruturação do(s) item(s)

Add a new item: {name: "Sabão", price: 2.34, qtd: 10}
Add a new item: {name: "Galinha", price: 8, qtd: 15}
Add a new item: {name: "Hamburguer", price: 2.34, qtd: 15}

const items = {
  cleaning: [{name: "Sabão", price: 2.34, qtd: 10}],
  dessert: [],
  drink: [],
  aliment: [],
  beef: [{name: "Galinha", price: 8, qtd: 15}, {name: "Hamburguer", price: 2.34, qtd: 15}],
  frozen: [],
  flavoring: []
}

const cleaning = {items: [{id: 1, name: "Sabão", price: 2.34, qtd: 10}], qtd: 10, total: 23.4}
const dessert = {items: [], qtd: 0, total: 0}
const drink = {items: [], qtd: 0, total: 0}

