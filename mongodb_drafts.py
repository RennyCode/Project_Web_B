from db_connector import *

# print all documents in the users collection
def print_users():
    print("Users collection:")
    for doc in DB.users.find():
        print(doc)
