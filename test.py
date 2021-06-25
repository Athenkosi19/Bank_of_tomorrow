words = ["bcde", "abcdef", "bcdef", "bcde"]

map = {}

for i in range(len(words)):
    word = words[i]
    if word not in map:
        map[word] = 1
    else:
        map[word] = map[word] + 1

list = map.values()
string = ''

for i in range(len(list)):
    number = list[i]
    string = string + " " + str(number)


def is_palindrome(word):
    for i in range(len(word)):
        letter = word[i]
        rettel = word[len(word) - i -1]
        if letter != rettel:
            return False
    return True


def fibonacci(n):
    sequence = [0,1]
    for i in range(2,n):
        sequence.append(sequence[i-1] + sequence[i-2])  
    print(len(sequence)-1)


class Person:
    name = ""
    height = 0
    weight = 0
    shoe_size = 0

    def __init__(self,name,height,weight,shoe_size):
        self.name = name
        self.height = height
        self.weight = weight
        self.shoe_size = shoe_size

person1 = Person('athi', 105,209,9)
person2 = Person('bob',108,198,10)

class Transaction:
    type = ""
    amount = 0

    def __init__(self, type, amount):
        self.type = type
        self.amount = amount


class Account:
    accountNumber = ""
    balance = 0
    transactions = []
    
    def __init__(self,accountNumber,balance,transactions):
        self.accountNumber = accountNumber
        self.balance = balance
        self.transactions = transactions

    def withdraw(self,amount):
        if amount <= self.balance:
            self.balance = self.balance - amount
            self.transactions.append(Transaction(type,amount * -1))
            return account1.balance    

account1 = Account("12345",200,[])
print(account1.withdraw(190))
print(account1.transactions[0].amount)





