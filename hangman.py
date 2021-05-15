import random

name = input("Please enter your name :")

print("Hi", name, " lets play Hangman!!!")

word = "Kermit the frog"
 
random_number = random.randrange(len(word))

selected_letter = str(word[random_number])

my_replace = str.replace

replaced_letter = str(my_replace(word,selected_letter, "_"))

missing_letter = input(" Enter the missing letter to " + " " + replaced_letter + ":")

if missing_letter == selected_letter:
    print("Good Job!! \n The word was", word )

else: 
    print("wrong answer \n The word was", word)

