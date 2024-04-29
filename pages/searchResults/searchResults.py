from flask import render_template, Blueprint, session, request, jsonify, redirect, url_for
from db_connector import *

# About_Us blueprint definition
searchResults = Blueprint(
    'searchResults',
    __name__,
    static_folder='static',
    static_url_path='/searchResults',
    template_folder='templates'
)


@searchResults.route('/searchResults')
def show_results():
    user_city = None
    if "user" in session:
        user = session['user']
        user_city = user["city"]
        
    businesses = session["businesses"]
    cat = request.args.get('cat', 'default_category')

    print("from show results:")    
    print(f"cat: {cat}")
    print(f"befor filters")
    print(f"businesses: {businesses}")

    
    if cat in session:
        businesses = session[cat]
    else:
        if cat != 'default_category':
            # filter bussinesses by category
            businesses = [b for b in businesses if b["proffesion"] == cat]

        if user_city is not None:
            # filter bussinesses by city
            businesses = [b for b in businesses if b["city"] == user_city]

        session[cat] = businesses


    print("from show results:")    
    print(f"user_city: {user_city}")
    print(f"businesses: {businesses}")
    print(f"cat: {cat}")

    if len(businesses) == 0:
        return redirect(url_for('noResults.index'))


    current_index = request.args.get('index', default=0, type=int)
    single_business = businesses[min(current_index, len(businesses) - 1)]

    return render_template('searchResults.html', business=single_business, current_index=current_index, total_count=len(businesses), cat=cat)

