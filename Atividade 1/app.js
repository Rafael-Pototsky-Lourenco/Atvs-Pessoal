/* Crie uma função em qualquer linguagem que realize a filtragem de uma lista de produtos com base em uma faixa de preço definida pelo usuário. 
Cada produto em nossa lista é caracterizado por três atributos essenciais: id, nome e valor.
A função deverá receber como entrada uma lista de produtos e dois parâmetros de range, valor mínimo e valor máximo.
A função deverá retornar uma nova lista de produtos que estejam dentro da faixa especificada. */

function filtragem()
{
     var id = [1, 2, 3], produto = [], valor = [];
     
     for(i = 0; i < 3; i++)
     {
          produto[i] = prompt("Digite o nome do produto: ");
          valor[i] = prompt("Digite o valor do produto: ");
     }

     var valorMin = prompt("Digite o valor mínimo a ser filtrado: ");
     var valorMax = prompt("Digite o valor máximo a ser filtrado: ");

     for(i = 0; i < 3; i++)
     {
          if(valor[i] >= valorMin && valor[i] <= valorMax)
          {
               document.write('ID = ' + id[i] + ' | Produto: ' + produto[i] + ' | Valor: ' + valor[i] + '<br>');
               console.log('passou por aqui');
          }
          console.log('não passou por aqui');
     }
}

filtragem();