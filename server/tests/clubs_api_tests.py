import unittest
from server.src.functionality import *
from server.api.clubsApi import *
from server.tests.tests_utils import *

class ClubsApiTests(unittest.TestCase):
    base_url = 'http://localhost:4999'
    def setUp(self):
        rebuild_tables()
        

    def test_get_clubs(self):
        
        response = get_rest_call(self, f'{self.base_url}/clubs')
        self.assertEqual(4, len(response))

    # def test_post_club(self):
    #     params = {'name': 'test', 'city': 'test', 'genre': 'test', 'max': 3, 'min': 1}
    #     response = post_rest_call(self, f'{self.base_url}/clubs', params)
    #     self.assertEqual(5, len(response))

    # def test_put_club(self):
    #     params = {'id':1,'name': 'test', 'city': 'test', 'genre': 'test', 'max': 3, 'min': 1}
    #     response = put_rest_call(self, f'{self.base_url}/clubs', params)
    #     self.assertEqual(5, response[0])

    def test_delete_club(self):
        params = {'name': 'Club Soda'}
        response = delete_rest_call(self, f'{self.base_url}/clubs', params)
        self.assertEqual(4, len(response))
