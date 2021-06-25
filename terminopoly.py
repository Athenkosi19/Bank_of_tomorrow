import random

# player1 = input("Please enter your name: ")
# player2 = input("Please enter your name: ")

# print("Hello players!!! \n WELCOME :) to terminopoly")
# print(player1,"your are Player 1 and", player2, "you are player 2")

locations = [
        {
        "begin": {
            "rent": 0,
            "bonus": 200,
            "is_buyable": False,
            "is_owned_by": "N/A",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "python_hotel": {
            "rent": 50,
            "bonus": 0,
            "is_buyable": True,
            "is_owned_by": "",
            "cost_price": 500,
            "is_jail": False,
            }},
        {
        "chance_1": {
            "rent": 0,
            "bonus": 0,
            "is_buyable": False,
            "is_owned_by": "N/A",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "free_parking": {
            "rent": 0,
            "bonus": 0,
            "is_buyable": False,
            "is_owned_by": "N/A",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "oop_b&b": {
            "rent": 80,
            "bonus": 0,
            "is_buyable": True,
            "is_owned_by": "",
            "cost_price": 800,
            "is_jail": False,
            }},
        {
        "css_heights": {
            "rent": 50,
            "bonus": 0,
            "is_buyable": True,
            "is_owned_by": "",
            "cost_price": 500,
            "is_jail": False,
            }},
        {
        "community_chest_1": {
            "rent": 0,
            "bonus": 0,
            "is_buyable": False,
            "is_owned_by": "N/A",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "js_inn": {
            "rent": 20,
            "bonus": 0,
            "is_buyable": True,
            "is_owned_by": "",
            "cost_price": 200,
            "is_jail": False,
            }},
        {
        "go_to_jail": {
            "rent": 0,
            "bonus": 0,
            "is_buyable": False,
            "is_owned_by": "N/A",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "memory_space": {
            "rent": 30,
            "bonus": 0,
            "is_buyable": True,
            "is_owned_by": "",
            "cost_price": 300,
            "is_jail": False,
            }},
        {
        "ram_house": {
            "rent": 70,
            "bonus": 0,
            "is_buyable": True,
            "is_owned_by": "",
            "cost_price": 700,
            "is_jail": False,
            }},
        {
        "community-chest_2": {
            "rent": 0,
            "bonus": 0,
            "is_buyable": False,
            "is_owned_by": "N/A",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "jail": {
            "rent": 0,
            "bonus": 0,
            "is_buyable": False,
            "is_owned_by": "N/a",
            "cost_price": 0,
            "is_jail": True,
            }},
        {
        "chance_2": {
            "rent": 0,
            "bonus": 0,
            "is_buyable": False,
            "is_owned_by": "N/A",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "cache_de_cookie": {
            "rent": 20,
            "bonus": 0,
            "is_buyable": True,
            "is_owned_by": "",
            "cost_price": 200,
            "is_jail": False,
            }},
        {
        "rom-ance_inn": {
            "rent": 90,
            "bonus": 0,
            "is_buyable": True,
            "is_owned_by": "",
            "cost_price": 900,
            "is_jail": False,
            }}
]

pla1_pos = 0
pla2_pos = 0 

users = {
    1: {
        "name": "John",
        "balance": 500,
        "is_jailed": False,
        "properties_owned": [],
        "current_location": locations[pla1_pos],
        "current_dice_roll": 0,
        "is_active": True
    },
    2: {
        "name": "Jane",
        "balance": 500,
        "is_jailed": False,
        "properties_owned": [],
        "current_location":locations[pla2_pos],
        "current_dice_roll": 0,
        "is_active": False
    },
}

def roll():
    global pla1_pos
    location = users[1]["current_location"]
    pla1_activity = users[1]["is_active"]
    die_roll = random.randrange(1,7)
    while pla1_activity == True:
       die_roll
       pla1_pos += die_roll
       if pla1_pos > 15:
           die_remainder = pla1_pos - 15
           pla1_pos = 0
           pla1_pos += die_remainder
       if die_roll:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
           pla1_activity = False
roll()

# while():
    
#     def play_game():
        
        #a = input("User 1, please enter your name: ")
        
        #users.users["user_1"]["name"] = a
        
        #print(f"Welcome {a}, you are player 1")
        
        # roll_count = 0
        
        # roll = dice.roll()
        
        # roll_count_add = roll_count + roll
        
        # print(roll_count_add)
        
        #users.users["user_1"]["current_dice_roll"] = roll
        
        #print(users.users["user_1"]["current_dice_roll"])


    
