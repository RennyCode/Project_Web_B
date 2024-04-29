import os
import pymongo
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://malno:noamal2210@noa.ghwa7bo.mongodb.net/?retryWrites=true&w=majority&appName=noa"

# create cluster
client = MongoClient(uri, server_api=ServerApi('1'))

# get all dbs and collections that needed
DB = client['fixItDB']
customers_col = DB['customers']
business_col = DB['business']

# add here bkababkabk
# add hrewrererfefnjk



def get_business_by_username(username):
    return business_col.find_one({'username': username})

def get_business():
    return list(business_col.find())

def get_business_by_city(city):
    return business_col.find({'city': city})

def create_business(businessName, username, email, password, city ,gender, phone, proffesion, seniority):
    new_business = {
        'businessName': businessName,
        'username': username,
        'email': email,
        'password': password,
        'city': city,
        'phone': phone,
        'proffesion': proffesion,
        'seniority': seniority,
        'numOfClicks': 0
        #'leftClasses':0,
        #'classes': []
    }
    business_col.insert_one(new_business)

##customers collection functions
##customers exists
def check_if_registered(username):
    if get_customer_by_username(username):
        return True
    return False

def get_customer_by_username(username):
    return customers_col.find_one({'username': username})

def get_customers():
    return list(customers_col.find())

# def create_customer(firstName,lastName, username, email, password, city,gender, phone):
#     new_customer = {
#         'firstName': firstName,
#         'lastName' : lastName,
#         'username': username,
#         'email': email,
#         'password': password,
#         'city' : city,
#         'gender' : gender,
#         'phone': phone
#     }
#     customers_col.insert_one(new_customer)


def save_user_to_db(user):
    validate_user = dict()
    validate_user['firstName'] = user.get('firstName', 'no_first_name')
    validate_user['lastName'] = user.get('lastName', 'no_last_name')
    validate_user['age'] = user.get('age', 'no_age')
    validate_user['email'] = user.get('email', 'no_email')
    validate_user['password'] = user.get('password', 'no_password')
    validate_user['phoneNumber'] = user.get('phoneNumber', 'no_phoneNumber')

    res = customers_col.insert_one(validate_user)
    print(res.inserted_id)





    

##################################################

import json

DB = 'fixItDB'
def init_client():
    # disable sll certification
    uri = "mongodb+srv://malno:noamal2210@noa.ghwa7bo.mongodb.net/?retryWrites=true&w=majority&appName=noa"
    client = MongoClient(uri, tlsAllowInvalidCertificates=True, server_api=ServerApi('1'))
    return client


from bson import ObjectId
class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)  # Convert ObjectId to string
        return json.JSONEncoder.default(self, obj)


def check_user_credentials(username, password):
    client = init_client()
    db = client[DB]
    customers_col = db['customers']
    query = {"email": username, "password": password}
    customer = customers_col.find_one(query)
    client.close()
    if customer:
        customer_str = json.dumps(customer, cls=JSONEncoder)
        customer_dict = json.loads(customer_str)
        return customer_dict
    return None


def check_username_existence(username):
    client = init_client()
    db = client[DB]
    customers_col = db['customers']
    query = {"email": username}
    customer = customers_col.find_one(query)
    client.close()
    if customer:
        customer_str = json.dumps(customer, cls=JSONEncoder)
        customer_dict = json.loads(customer_str)
        return customer_dict
    return None


def get_all_businesses():
    client = init_client()
    db = client[DB]
    business_col = db['business']
    all_business = business_col.find()
    dict_list = None
    if all_business:
        json_str = [json.dumps(b, cls=JSONEncoder) for b in list(all_business)]
        dict_list = [json.loads(s) for s in json_str]
    client.close()
    return dict_list



def create_customer(firstName,lastName, username, email, password, city,gender, phone):
    client = init_client()
    db = client[DB]
    customers_col = db['customers']
    new_customer = {
        'firstName': firstName,
        'lastName' : lastName,
        'username': username,
        'email': email,
        'password': password,
        'city' : city,
        'gender' : gender,
        'phone': phone
    }
    customers_col.insert_one(new_customer)