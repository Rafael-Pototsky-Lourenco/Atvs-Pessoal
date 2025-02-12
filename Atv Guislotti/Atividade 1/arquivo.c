#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define fort 3

/* Crie uma função em qualquer linguagem que realize a filtragem de uma lista de produtos com base em uma faixa de preço definida pelo usuário. 
Cada produto em nossa lista é caracterizado por três atributos essenciais: id, nome e valor.
A função deverá receber como entrada uma lista de produtos e dois parâmetros de range, valor mínimo e valor máximo.
A função deverá retornar uma nova lista de produtos que estejam dentro da faixa especificada. */

typedef struct 
{
     int id;
     char nome[50];
     double valor;
} Atributos;

void Filtragem(Atributos *a)
{
     int i, quantia = 0, identidade = 0;
     double valorMin, valorMax;

     for(i = 0; i < fort; i++)
     {
          a[i].id = identidade++;

          printf("Digite o nome do produto: ");
          fgets(a[i].nome, sizeof(a[i].nome), stdin);
          strtok(a[i].nome, "\n");

          printf("Digite o valor do produto: ");
          scanf("%lf", & a[i].valor);
          getchar();

          printf("\n");
     }

     printf("Escreva o valor minimo para filtragem: ");
     scanf("%lf", & valorMin);
     
     printf("Escreva o valor maximo para filtragem: ");
     scanf("%lf", & valorMax);
     getchar();

     printf("\nListagem de %i produtos:\n\n", quantia);
     for(i = 0; i < fort; i++)
     {
          if(a[i].valor >= valorMin || a[i].valor <= valorMax)
          {
               printf("ID = %i\t Produto: %s\t Valor: %.2lf\n", a[i].id, a[i].nome, a[i].valor);
          }
     }
}

void main()
{
     Atributos *a = (Atributos*) malloc(sizeof(Atributos) * fort);
     if(a == NULL)
     {
          fprintf(stderr, "Nao foi possivel alocar memoria\n");
     }

     Filtragem(a);

     free(a);
}