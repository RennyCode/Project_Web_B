from flask import Flask, redirect, url_for, render_template, request, session, Blueprint, jsonify
#from utilities.mongo_connector import user_col, contact_us_col, meeting_col

#from pymongo.mongo_client import MongoClient
#from pymongo.server_api import ServerApi
#uri = "mongodb+srv://malno:noamal2210@noa.ghwa7bo.mongodb.net/?retryWrites=true&w=majority&appName=noa"
#client = MongoClient(uri, server_api=ServerApi('1'))


# HERE
app: Flask = Flask(__name__)
app.config.from_pyfile('settings.py')
app.secret_key = '123'

## AboutUs
from pages.aboutUs.aboutUs import aboutUs
app.register_blueprint(aboutUs)

## homePage
from pages.homePage.homePage import homePage
app.register_blueprint(homePage)

## logIn
from pages.logIn.logIn import logIn
app.register_blueprint(logIn)

## searchResults
from pages.searchResults.searchResults import searchResults
app.register_blueprint(searchResults)

## signIn
from pages.signIn.signIn import signIn
app.register_blueprint(signIn)

## noResults
from pages.noResults.noResults import noResults
app.register_blueprint(noResults)


