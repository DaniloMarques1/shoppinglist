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

### TODO

* [x] Botão de adicionar deve ficar na tela de categorias
* [x] Funcionalidade de remover (esta bugada)
* [ ] Lidar com inputs inválidos ao adicionar um item, atualizar ou quando estiver criando a previsão
* [ ] Funcionalidade de atualiazar (esta bugada)
* [ ] Atualizar os formularios para usar o react-hook-form para validação
