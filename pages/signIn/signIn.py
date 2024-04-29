from flask import render_template, Blueprint, session, request, jsonify, redirect, url_for
import db_connector
from db_connector import *

# About_Us blueprint definition
signIn = Blueprint(
    'signIn',
    __name__,
    static_folder='static',
    static_url_path='/signIn',
    template_folder='templates'
)


@signIn.route('/signIn', methods=['GET', 'POST'])
def signInCustomer():

    if request.method == 'POST':
        # submint & passed basic input rules
        username = request.form.get('username')
        if check_username_existence(username):
            # don't allow same username
            message = "Username already exists in the system, please choose another username"
            return render_template('signIn.html', msg1=message)
        else:
            # add to db
            create_customer(request.form.get('firstName'),
                            request.form.get('lastName'),
                            username,
                            request.form.get('email'),
                            request.form.get('password'),
                            request.form.get('city'),
                            request.form.get('gender'),
                            request.form.get('phone')
                            )
            
            # too slow to fetch the new user immediately 
            # session["user"] = check_user_credentials(username, request.form.get('password'))
            # print("created customer:")
            # print(session["user"])

            return redirect(url_for('homePage.index'))
            
    return render_template('signIn.html', msg1='')