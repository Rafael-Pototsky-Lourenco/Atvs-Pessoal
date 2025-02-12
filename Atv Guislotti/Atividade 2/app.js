/*Dado um array de inteiros nums e um inteiro target, retorne os índices dos dois números de modo que a soma deles seja target.

Você pode assumir que cada entrada teria exatamente uma solução e não pode usar o mesmo elemento duas vezes.

Você pode retornar a resposta em qualquer ordem.

Exemplo 1:

Entrada: nums = [2,7,11,15], alvo = 9
Saída: [0,1]
Explicação: Como nums[0] + nums[1] == 9, retornamos [0, 1].
Exemplo 2:

Entrada: nums = [3,2,4], alvo = 6
Saída: [1,2]
Exemplo 3:

Entrada: nums = [3,3], alvo = 6
Saída: [0,1]


Restrições:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Existe apenas uma resposta válida.*/

var nums = [], target, quantia, soma = 0, posicao = [];

target = prompt("Digite o valor alvo: ");
quantia = prompt("Digite a quantia a ser somada: ");

target = parseInt(target);
quantia = parseInt(quantia);

document.write("Nums = [");
for(i = 0; i < quantia; i++)
{
     nums[i] = prompt("Digite os valores a serem somados: ");
     nums[i] = parseInt(nums[i]);
     while(nums[i] == numsIguais)
     {
          nums[i] = prompt("Esse valor já foi usado! Digite um valor diferente: ");
     }
     var numsIguais = nums[i];

     document.write(nums[i]);
     if(i != quantia - 1)
     {
          document.write(" + ");
     }
}
document.write("] <br> Alvo = " + target + "<br><br>");

document.write("Saída: [");
for(i = 0; i < quantia; i++)
{
     if(soma < target)
     {
          soma += nums[i];
          posicao[i] = i;
     }
     if(soma > target)
     {
          soma -= nums[i];
          posicao[i] = null;
     }

     if(posicao[i] == null)
     {
          continue;
     }

     document.write(posicao[i]);

     if(soma != target)
     {
          document.write(", ");
     }

     if(soma == target)
     {
          break;
     }
}
document.write("]");