#!/usr/bin/python3
from flask import Flask
# from flask_restful import Api
# from flask_cors import CORS


app = Flask(__name__)
app.url_map.strict_slashes = False
# api = Api(app)
# CORS(app, origins="http:localhost:3000")


@app.route("/")
def resources():
    """Front end routes"""
    return {
        'Title': "The Foundations of a CHristian Home",
        'Speaker': "Pastor S. P. Ayodeji",
        'Transcript': "God give us CHristian homes, Homes where the Mother in Queenly quest, shows others thy way is best",
        'Audio': 'Available for Download',
        'Video': 'Available for Watching',
        'Date': 'Date_Created',
        }

    # Most recent 13 messages from the db
    # 1 in the spotlight and 21 in the list
    # next button returns the list of next 20
    # Alternative implementation
    # recreate file.josn after each new post in admin dashboard
    # to hold all latest db entries to serve statically to frontend
    # returns this as a jSON Object


@app.route("/<id>")
def display_one():
    return 'Good'
    # return  Display the information about the message with <:id>
    # if there is any of pdf, audio, video or article
    # returns this as a JSON Object.


@app.route("/admin")
def login():
    """Admin Backend routes"""
    # return   Authenticates admin user and password
    return "login page"


@app.route("/dashboard")
def list_display():
    """Read latest entries to the database"""
    # Authenticate users
    # return Most recent 25 posts from the db
    # select button for bulk action
    # returns this as a JSON Object.
    # delete, edit action on each message.
    # back/next button returns list of next 25


@app.route("/post")
def create_post():
    """Create Post route"""
    # Authenticated users can perform this
    # return Creates a new post and saves to the db
    # new post appears on top of the list in the dashboard


@app.route("/edit")
def update_post():
    """Update existing Post route"""
    # Authenticated users can perform this
    # return Updates an existing post and saves to the db
    # retains position on the list in the dashboard


@app.route('/delete')
def delete_post():
    """Delete existing Post route"""
    # Authenticated users can perform this
    # return Delete an existing post and removes it from the db
    # adjust position on the list in the dashboard


if __name__ == '__main__':
    app.run(debug=True)
    app.run(host='0.0.0.0', port='5000')