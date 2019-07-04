from pymongo import MongoClient
from bson.objectid import ObjectId
import pprint
import pandas as pd

cliente = MongoClient('localhost', 27017)

db = cliente.db_03


investments = db.investments.find()
for investment in investments:
	print(investment['code'])

	df_data = pd.read_csv(
		'data/' + investment['code'] + '.SA.csv',
		sep=',',
	)

	df_data = df_data[['Close', 'Date']].rename(index=str, columns={'Close': 'value', 'Date': 'date'})

	print(df_data.head())

	investment['prices'] = df_data.to_dict(orient='records')

	atual_price = df_data[df_data['date'] == df_data['date'].max()]

	investment['value'] = atual_price['value'].max()

	db.investments.update_one({ '_id': ObjectId(investment['_id']) }, {"$set": investment}, upsert=False)

