from flask_restful import Resource, reqparse

# from server.src.functionality import *
from .swen_344_db_utils import *

# server/src/functionality.py
class ClubApi(Resource):
    """Provide a POST method to create a new club, and a DELETE method to remove a club. Update the DB accordingly."""
    def get(self):
    # NOTE: No need to replicate code; use the util function!
       result = exec_get_all("SELECT * FROM clubs")
       return result

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str)
        parser.add_argument('city', type=str)
        parser.add_argument('genre', type=str)
        parser.add_argument('max', type=int)
        parser.add_argument('min', type=int)
        args = parser.parse_args()
        name = args['name']
        city = args['city']
        genre = args['genre']
        max = args['max']
        min = args['min']
        return create_club(name, city, genre, max, min)
        

    def delete(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str)
        args = parser.parse_args()
        name = args['name']
        return delete_club(name)

    def put(self):
        parser = reqparse.RequestParser()
        parser.add_argument('prevName', type=str)
        parser.add_argument('name', type=str)
        parser.add_argument('city', type=str)
        parser.add_argument('genre', type=str)
        parser.add_argument('max', type=int)
        parser.add_argument('min', type=int)
        args = parser.parse_args()
        prevName = args['prevName']
        name = args['name']
        city = args['city']
        genre = args['genre']
        max = args['max']
        min = args['min']
        return update_club(name, city, genre, max, min, prevName)


class IncrementApi(Resource):
    """Provide a POST method to increment the count of a club."""
    def put(self):
        parser = reqparse.RequestParser()
        parser.add_argument('club', type=str)
        args = parser.parse_args()
        club = args['club']
        return increment_count(club)

class DecrementApi(Resource):
    """Provide a POST method to decrement the count of a club."""
    def put(self):
        parser = reqparse.RequestParser()
        parser.add_argument('club', type=str)
        args = parser.parse_args()
        club = args['club']
        return decrement_count(club)


def increment_count(club):
    command = "UPDATE clubs SET current = current + 1 WHERE name = '"+club+"';"
    exec_commit(command)
    return exec_get_one("SELECT * from clubs")

def decrement_count(club):
    command = "UPDATE clubs SET current = current - 1 WHERE name = '"+club+"';"
    exec_commit(command)
    return exec_get_one("SELECT * from clubs")

def create_club(name, city, genre, max, min):
    command = "INSERT INTO clubs (name, city, genre, max, min) VALUES ('"+name+"', '"+city+"', '"+genre+"', "+str(max)+", "+str(min)+");"
    exec_commit(command)
    return exec_get_one("SELECT * from clubs")

def delete_club(name):
    command = "DELETE FROM clubs WHERE name = '"+name+"';"
    exec_commit(command)
    return exec_get_one("SELECT * from clubs")

def update_club(name, city, genre, max, min, prevName):
    command = "UPDATE clubs SET name = '"+name+"', city = '"+city+"', genre = '"+genre+"', max = "+str(max)+", min = "+str(min)+" WHERE name = '"+prevName+"';"
    exec_commit(command)
    return exec_get_one("SELECT * from clubs")

        


