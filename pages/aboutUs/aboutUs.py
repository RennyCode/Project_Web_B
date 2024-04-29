from flask import render_template, Blueprint, session, request, jsonify, redirect, url_for

# aboutUs blueprint definition
aboutUs = Blueprint(
    'aboutUs',
    __name__,
    static_folder='static',
    static_url_path='/aboutUs',
    template_folder='templates'
)

# Routes
@aboutUs.route('/aboutUs')
def index():
    return render_template('aboutUs.html')
