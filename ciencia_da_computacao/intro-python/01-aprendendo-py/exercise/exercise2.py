# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def main(list_numbers):
    total = 0
    for number in list_numbers:
        total += number
    return total / len(list_numbers)
