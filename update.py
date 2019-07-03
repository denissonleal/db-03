from pymongo import MongoClient
from bson.objectid import ObjectId
import pprint

cliente = MongoClient('172.18.0.1', 27017)

db = cliente.db_03

# pprint.pprint(db.investings.find())
pprint.pprint(db.investings.find_one({ '_id': ObjectId('5d1cbe1d7e233bb6ef52616f') }))
