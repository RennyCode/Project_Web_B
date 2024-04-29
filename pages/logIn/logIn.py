from flask import render_template, Blueprint, session, request, jsonify, redirect, url_for
from db_connector import *

# About_Us blueprint definition
logIn = Blueprint(
    'logIn',
    __name__,
    static_folder='static',
    static_url_path='/logIn',
    template_folder='templates'
)

@logIn.route('/logIn', methods=['GET', 'POST'])
def logIn_user():
    if request.method == 'POST':
        username = request.form.get('e-mail')
        password = request.form.get('password')
        user_details = check_user_credentials(username, password)

        print(user_details)

        if user_details:
            session['user'] = user_details
            return redirect(url_for('homePage.index'))
        else:
            msg1 = 'Incorrect Username / Password'
            return render_template("logIn.html", msg1=msg1)
        
    
    if "user" in session:
            # already logged in
            return redirect(url_for('homePage.index'))

    return render_template("logIn.html", msg1="")




# ##############

# @logIn.route('/logIn', methods=['GET', 'POST'])
# def index():
#     if request.method == 'POST':
#             username = request.form.get('e-mail')
#             password = request.form.get('password')
#             user_details = check_user_credentials(username, password)

#             print("user_details")
#             print(user_details)

#             if user_details:
#                 session['user'] = user_details
#                 return redirect(url_for('homePage.index'))
#             return render_template('logIn.html')
#     else:
#         return render_template('logIn.html')