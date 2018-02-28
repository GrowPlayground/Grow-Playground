from flask import Flask, render_template, url_for, request, session, redirect
from flask_pymongo import PyMongo
import bcrypt

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'connect-to-mongodb'
app.config['MONGO_URI'] = 'mongodb://grow-prototype:growing@ds125288.mlab.com:25288/connect-to-mongodb'

mongo = PyMongo(app);


@app.route('/')
def index():
    if 'username' in session:
        return render_template('Main.html')

    return render_template('home.html')

@app.route('/connect', methods=['POST', 'GET'])
def connect():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    users = mongo.db.users
    login_user = users.find_one({'name' : request.form['username']})
    
    if login_user:
        if hash(request.form['pass']) == login_user['password']:
            session['username'] = request.form['username']
            return redirect(url_for('index'))

    return 'Invalid username/password combination'



@app.route('/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find_one({'name' : request.form['username']})
        existing_email = users.find_one({'email' : request.form['Email']})

        if existing_email is None :
            if  existing_user is None :
                    users.insert({'name' : request.form['username'], 'password' : hash(request.form['pass']), 'email': request.form['Email']})
                    return redirect(url_for('connect'))
            
            return 'That username already exists!'

        return 'that Email already exists ! '

    return render_template('register.html')


@app.route('/logout', methods=['GET'])
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.secret_key = 'mysecret'
    app.run(debug=True)

