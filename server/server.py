from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

from api.swen_344_db_utils import *
from api.clubsApi import * 

app = Flask(__name__) #create Flask instance
CORS(app) #Enable CORS on Flask server to work with Nodejs pages
api = Api(app) #api router

api.add_resource(ClubApi,'/clubs')
api.add_resource(IncrementApi,'/increment')
api.add_resource(DecrementApi,'/decrement')

if __name__ == '__main__':
    print("Loading db");
    exec_sql_file('clubs.sql');
    print("Starting flask");
    app.run(debug=True, port=4999), #starts Flask
