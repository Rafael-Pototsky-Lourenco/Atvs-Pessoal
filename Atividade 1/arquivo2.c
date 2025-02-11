#include <stdio.h>
#include <string.h>
#include <math.h>

#define fort 3

/* Crie uma função em qualquer linguagem que realize a filtragem de uma lista de produtos com base em uma faixa de preço definida pelo usuário. 
Cada produto em nossa lista é caracterizado por três atributos essenciais: id, nome e valor.
A função deverá receber como entrada uma lista de produtos e dois parâmetros de range, valor mínimo e valor máximo.
A função deverá retornar uma nova lista de produtos que estejam dentro da faixa especificada. */

void Filtragem()
{
     int i, quantia, identidade = 0, listagem = 0;
     double valorMin, valorMax;
     char nome[50];

     for(i = 0; i < fort; i++)
     {
          identidade++;

          printf("Escreva o nome do produto: ");
          fgets(nome, 50, stdin);
          nome[strcspn(nome, "\n")] = '\0';

          printf("Escreva o valor do produto: ");
          scanf("%lf", & quantia);
          getchar();
          
          printf("\n");
     }
     listagem = identidade;

     printf("Escreva o valor minimo para filtragem: ");
     scanf("%lf", & valorMin);
     
     printf("Escreva o valor maximo para filtragem: ");
     scanf("%lf", & valorMax);
     
     printf("\n");

     printf("\nListagem de %i produtos:\n\n", identidade);
     for(i = 0; i < fort; i++)
     {
          if(quantia >= valorMin || quantia <= valorMax)
          {
               printf("ID = %i\t Produto: %s\t Valor: %.2lf\n", identidade, nome, quantia);
          }
     }
}

void main()
{
     Filtragem();
}