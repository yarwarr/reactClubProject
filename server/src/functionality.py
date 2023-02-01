from server.api.swen_344_db_utils import *
# from server.api.clubsApi import *
# from server.api import *
def rebuild_tables():
    exec_sql_file('clubs.sql')
    

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

def update_club(name, city, genre, max, min, id):
    command = "UPDATE clubs SET name = '"+name+"', city = '"+city+"', genre = '"+genre+"', max = "+str(max)+", min = "+str(min)+" WHERE id = "+str(id)+";"
    exec_commit(command)
    return exec_get_one("SELECT * from clubs")

