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
5. Alimento - Açucar, Arroz, macarrao
6. Congelados - Pizza, Mortadela, queijo...
7. Tempero - curry

## Estruturação do(s) item(s)

Add a new item: {name: "Sabão", price: 2.34, qtd: 10, purchased: false}
Add a new item: {name: "Carne", price: 8, qtd: 15, purchased: false}
Add a new item: {name: "Hamburguer", price: 2.34, qtd: 15, purchased: false}

const items = {
  cleaning: [{name: "Sabão", price: 2.34, qtd: 10}],
  dessert: [],
  drink: [],
  aliment: [],
  beef: [{name: "Carne", price: 8, qtd: 15}, {name: "Hamburguer", price: 2.34, qtd: 15}],
  frozen: [],
  flavoring: []
}

### TODO

* [ ] Total de itens
* [ ] Adicionar uma nova categoria "Outros"
* [X] Usar as constantes de categorias na pagina ListCategory 
* [X] Fazer dos itens da lista clicaveis para edicao (ao inves de só ser possivel clicar no icone de edição)

## Demonstração
<img src="demo.gif" width="320" height="500" />
