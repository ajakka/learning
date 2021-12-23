# Python Resume

---

### `print("Hello world")`

### [Original learning source \(python.land)](python.land)

---

## Read-Evaluate-Print-Loop (REPL)

REPL is an interactive shell that allows you to enter Python code and directly see the results.

To access it you just open the Terminal and type `python` for version 2 or `python3` for version 3.

## Variables

```python
## Accepted characters in variable names
## Alpabets (a-z && A-Z)
## Numbers (0-9) after an alphabet character
## Underscore _

# Declaring variables
myvar = 3 * 5

# Calling variables
myvar
15

# Checking variable type
type(myvar)
'<class 'int'>'
```

### Integers

| Operation | Description    | Example        |
| --------- | -------------- | -------------- |
| +         | Addition       | 2 + 2 => 4     |
| -         | Subtraction    | 3 – 1 => 2     |
| \*        | Multiplication | 5 \* 3 => 15   |
| /         | Division       | 5 / 2 => 2.5   |
| %         | Modulus        | 5 % 2 => 1     |
| //        | Floor division | 5 // 2 => 2    |
| \*\*      | Exponential    | 2 \*\* 4 => 16 |

```python
# Operator precedence
2 + 3 * 3
11

(2 + 3) * 3
15

1 + 2 ** 2
5

2 / 2 * 8
8.0
```

### Strings [docs](https://docs.python.org/3/library/stdtypes.html#textseq)

| Operation | Description   | Example           |
| --------- | ------------- | ----------------- |
| +         | Concatination | 'a' + 'b' => 'ab' |
| \*        | Duplication   | 'a' \* 3=> 'aaa'  |

```python
# Declaring variables
myvar = 3 * 5

# Calling variables
myvar
15

# Checking variable type
type(myvar)
'<class 'int'>'

# String calling
mystr1 = 'It\'s agood day!'
mystr2 = "It's agood day!"
mystr3 = """
It\'s agood day!
In multi lines!!
"""

# Checking string length
len(mystr1)
15

# Output the methods inside str class
dir(mystr1)

# Show refrence of the variable
id(mystr1)

# String multiplication
multi_str = 3 * "cool"
multi_str
'coolcoolcool'

# String reversal
revesed_str = "reversethis"
revesed_str[::-1]
'sihtesrever'

# Formated strings
my_age = 40
print(f'My age is {my_age}')
My age is 40

# All string fuctions (see docs above)
multi_str.capitalize(    multi_str.index(         multi_str.isspace(       multi_str.removesuffix(  multi_str.startswith(
multi_str.casefold(      multi_str.isalnum(       multi_str.istitle(       multi_str.replace(       multi_str.strip(
multi_str.center(        multi_str.isalpha(       multi_str.isupper(       multi_str.rfind(         multi_str.swapcase(
multi_str.count(         multi_str.isascii(       multi_str.join(          multi_str.rindex(        multi_str.title(
multi_str.encode(        multi_str.isdecimal(     multi_str.ljust(         multi_str.rjust(         multi_str.translate(
multi_str.endswith(      multi_str.isdigit(       multi_str.lower(         multi_str.rpartition(    multi_str.upper(
multi_str.expandtabs(    multi_str.isidentifier(  multi_str.lstrip(        multi_str.rsplit(        multi_str.zfill(
multi_str.find(          multi_str.islower(       multi_str.maketrans(     multi_str.rstrip(
multi_str.format(        multi_str.isnumeric(     multi_str.partition(     multi_str.split(
multi_str.format_map(    multi_str.isprintable(   multi_str.removeprefix(  multi_str.splitlines(
```

### Booleans

| Operation | Description           | Example |
| --------- | --------------------- | ------- |
| ==        | Equal                 |         |
| !=        | Not equal             |         |
| >         | Biger than            |         |
| <         | Smaller than          |         |
| >=        | Biger than or equal   |         |
| <=        | Smaller than or equal |         |
|           |                       |         |
|           |                       |         |
|           |                       |         |

```python
# Boolean declaration

door_is_locked = True
door_is_locked = False

# Examples of boolean operations

2 > 1 # True

2 < 1 # False

2 < 3 < 4 < 5 < 6 # True

2 < 3 > 2 # True

3 <= 3 # True

3 >= 2 # True

2 == 2 # True

4 != 5 # True

'a' == 'a' # True

'a' > 'b' # False

## Some oddties

True == 1 # True

False == 0 # True

True + True # 2

False + False # 0

False + True # 1

True + 3 # 4

```

## Functions

```python
# Creating a function
def say_hi_to(name="No One"):
	print(f'Hello {name}')

# Invoking a function
say_hi_to("Ali")
Hello Ali

say_hi_to()
Hello No One

# Creating a function with return
def sum_of(x, y):
	return x + y

sum_of(4, 6)

# Creating a function with multiple returns
def sum_and_mult_of(x, y):
	return x + y, x * y

add, mult = sum_and_mult_of(4, 6)
print(add, mult)
```

## Conditionals

```python

if door_is_locked:
	print("Open the door")
else:
  print("Close the door")

```

## Iterations

```python
# For-loops and lists

# General syntax
#	for <variable> in <iterable>:
#		do something with variable

todos = ["Wake", "Eat", "Read", "Work", "Sleep", ]
for todo in todos:
    print(todo)


# While-loop

# General syntax
#	while <expression is True>:
#		do something
i = 1
while i <= 4:
	print(i)
	i = i + 1
```

# Classes

```python
class Car:
    speed = 0
    started = False

    def start(self):
        self.started = True
        print("Car started, let's ride!")

    def increase_speed(self, delta):
        if self.started:
            self.speed = self.speed + delta
            print('Vrooooom!')
        else:
            print("You need to start the car first")

    def stop(self):
        self.speed = 0
        print('Halting')


car = Car() # Creating an instance of the class
car.increase_speed(10) # You need to start the car first
car.start() # Car started, let's ride!
car.increase_speed(40) # Vrooooom!

```

# Data classes

```python
from dataclasses import dataclass
@dataclass
class Card:
    rank: str
    suit: str

card1 = Card("Q", "hearts")
card2 = Card("Q", "hearts")

# dunder method __eq__
print(card1 == card2) # True

# dunder method __repr__
print(card1) #Card(rank='Q', suit='hearts')

print(card1.rank) # 'Q'
```
