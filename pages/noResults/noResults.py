from flask import render_template, Blueprint, session, request, jsonify, redirect
from db_connector import *

# About_Us blueprint definition
noResults = Blueprint(
    'noResults',
    __name__,
    static_folder='static',
    static_url_path='/noResults',
    template_folder='templates'
)


@noResults.route('/noResults')
def index():
    return render_template('noResults.html')
