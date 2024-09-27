from exercise01 import fizz_buzz


def test_fizz_buzz_should_return_list_of_numbers():
    assert fizz_buzz(2) == [1, 2]


def test_fizz_buzz_divisible_by_three_should_be_fizz():
    assert fizz_buzz(3) == [1, 2, "Fizz"]


def test_fizz_buzz_divisible_by_five_should_be_fizz():
    assert fizz_buzz(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_fizz_buzz_divisible_by_five_and_three_should_be_fizzbuzz():
    assert fizz_buzz(15)[-1] == "FizzBuzz"
