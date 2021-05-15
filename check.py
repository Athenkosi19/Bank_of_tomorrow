import random

die = [1,2,3,4,5,6]

def roll():
    return random.choice(die)


users = {
    "user_1": {
        "name": "John",
        "balance": 500,
        "is_jailed": False,
        "properties_owned": [],
        "current_location":"begin",
        "current_dice_roll": ""
    },
    "user_2": {
        "name": "Jane",
        "balance": 500,
        "is_jailed": False,
        "properties_owned": [],
        "current_location":"begin",
        "current_dice_roll": ""
    },
}



locations = [
        {
        "begin": {
            "rent": 0,
            "bonus": 200,
            "is_sellable": False,
            "is_owned_by": "",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "python_hotel": {
            "rent": 50,
            "bonus": 0,
            "is_sellable": True,
            "is_owned_by": "",
            "cost_price": 500,
            "is_jail": False,
            }},
        {
        "chance_1": {
            "rent": 0,
            "bonus": 0,
            "is_sellable": False,
            "is_owned_by": "",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "free_parking": {
            "rent": 0,
            "bonus": 0,
            "is_sellable": False,
            "is_owned_by": "",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "oop_b&b": {
            "rent": 80,
            "bonus": 0,
            "is_sellable": True,
            "is_owned_by": "",
            "cost_price": 800,
            "is_jail": False,
            }},
        {
        "css_heights": {
            "rent": 50,
            "bonus": 0,
            "is_sellable": True,
            "is_owned_by": "",
            "cost_price": 500,
            "is_jail": False,
            }},
        {
        "community_chest_1": {
            "rent": 0,
            "bonus": 0,
            "is_sellable": False,
            "is_owned_by": "",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "js_inn": {
            "rent": 20,
            "bonus": 0,
            "is_sellable": True,
            "is_owned_by": "",
            "cost_price": 200,
            "is_jail": False,
            }},
        {
        "go_to_jail": {
            "rent": 0,
            "bonus": 0,
            "is_sellable": False,
            "is_owned_by": "",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "memory_space": {
            "rent": 30,
            "bonus": 0,
            "is_sellable": True,
            "is_owned_by": "",
            "cost_price": 300,
            "is_jail": False,
            }},
        {
        "ram_house": {
            "rent": 70,
            "bonus": 0,
            "is_sellable": True,
            "is_owned_by": "",
            "cost_price": 700,
            "is_jail": False,
            }},
        {
        "community-chest_2": {
            "rent": 0,
            "bonus": 0,
            "is_sellable": False,
            "is_owned_by": "",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "jail": {
            "rent": 0,
            "bonus": 0,
            "is_sellable": False,
            "is_owned_by": "",
            "cost_price": 0,
            "is_jail": True,
            }},
        {
        "chance_2": {
            "rent": 0,
            "bonus": 0,
            "is_sellable": False,
            "is_owned_by": "",
            "cost_price": 0,
            "is_jail": False,
            }},
        {
        "cache_de_cookie": {
            "rent": 20,
            "bonus": 0,
            "is_sellable": True,
            "is_owned_by": "",
            "cost_price": 200,
            "is_jail": False,
            }},
        {
        "rom-ance_inn": {
            "rent": 90,
            "bonus": 0,
            "is_sellable": True,
            "is_owned_by": "",
            "cost_price": 900,
            "is_jail": False,
            }}
]

while():
    
    def play_game():
        
        #a = input("User 1, please enter your name: ")
        
        #users.users["user_1"]["name"] = a
        
        #print(f"Welcome {a}, you are player 1")
        
        roll_count = 0
        
        roll = dice.roll()
        
        roll_count_add = roll_count + roll
        
        print(roll_count_add)
        
        #users.users["user_1"]["current_dice_roll"] = roll
        
        #print(users.users["user_1"]["current_dice_roll"])


    i = 0

    print(locations[i])

    i += 1
        
    
