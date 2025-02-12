/*Crie uma função que,
Dado um inteiro x, retorne true se x for um palíndromo, e false se não for.

Exemplo 1:
Entrada: x = 121
Saída: verdadeiro
Explicação: 121 é lido como 121 da esquerda para a direita e da direita para a esquerda.

Exemplo 2:
Entrada: x = -121
Saída: false
Explicação: Da esquerda para a direita, lê-se -121. Da direita para a esquerda, torna-se 121-. Portanto, não é um palíndromo.
Exemplo 3:

Entrada: x = 10
Saída: false
Explicação: Lê 01 da direita para a esquerda. Portanto, não é um palíndromo.

Restrições:
-231 <= x <= 231 - 1*/

function palindromo()
{
     var x, palin;

     x = prompt("Digite o valor de X para ver se é um palíndromo: ");
     

     document.write("Entrada: x = " + x + "<br>");

     palin = x.split('').reverse().join('');
     palin = parseInt(palin);
     x = parseInt(x);
     
     if(x == palin)
     {
          document.write("Saída: true <br>");
          document.write("Explicação: " + palin + " é lido como " + palin + " da esquerda para a direita e da direita para a esquerda. <br>");
          return true;
     }
     else
     {
          document.write("Saída: false <br>");
          if(x < 0)
          {
               document.write("Explicação: Da esquerda para a direita, lê-se " + x + ". Da direita para a esquerda, torna-se " + palin + "-. Portanto, não é um palíndromo. <br>");     
          }
          else
          {
               document.write("Explicação: Da esquerda para a direita, lê-se " + x + ". Da direita para a esquerda, torna-se " + palin + ". Portanto, não é um palíndromo. <br>");
          }
          return false;
     }
}

palindromo();