# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

def square(n):
    asterisk = '*'
    for number in range(n):
        print(asterisk * n)
