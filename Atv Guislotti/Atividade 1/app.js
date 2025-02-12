/* Crie uma função em qualquer linguagem que realize a filtragem de uma lista de produtos com base em uma faixa de preço definida pelo usuário. 
Cada produto em nossa lista é caracterizado por três atributos essenciais: id, nome e valor.
A função deverá receber como entrada uma lista de produtos e dois parâmetros de range, valor mínimo e valor máximo.
A função deverá retornar uma nova lista de produtos que estejam dentro da faixa especificada. */

function filtragem()
{
     var id = [], produto = [], valor = [], quantia;

     quantia = prompt("Digite a quantidade de produtos: ");
     quantia = parseInt(quantia);
     
     for(i = 0; i < quantia; i++)
     {
          id[i] = i + 1;
          document.write("ID = " + id[i] + " | ");
          produto[i] = prompt("Digite o nome do produto: ");
          valor[i] = prompt("Digite o valor do produto: ");

          valor[i] = parseInt(valor[i]);

          document.write("Produto = " + produto[i] + " | Valor = R$ " + valor[i] + "<br>");
     }
     document.write("<br><br>");

     var valorMin = prompt("Digite o valor mínimo a ser filtrado: ");
     var valorMax = prompt("Digite o valor máximo a ser filtrado: ");

     valorMin = parseInt(valorMin);
     valorMax = parseInt(valorMax);

     document.write("Filtragem: <br> Valor Mínimo: R$ " + valorMin + "<br>Valor Máximo: R$ " + valorMax + "<br>");
     for(i = 0; i < quantia; i++)
     {
          id[i] = i + 1;
          if(valor[i] >= valorMin && valor[i] <= valorMax)
          {
               document.write('ID = ' + id[i] + ' | Produto: ' + produto[i] + ' | Valor: ' + valor[i] + '<br>');
               console.log('passou por aqui');
          }
          console.log('não passou por aqui');
     }
}

filtragem();