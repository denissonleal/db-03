
//Checklist
db.users.find()
db.users.find({},{name:1,_id:0});
db.getCollection('applications').find({}).limit(2);
db.getCollection('users').find({},{'name':1,'born_date':1,_id:0}).skip(2);
db.getCollection('investments').find({'name':{$exists:true}}).count();
db.getCollection('users').find({}).sort({"_id":-1});
db.users.find().pretty();
db.investments.find({type: {$all:['V']}})
db.applications.find({amount: {$gte: 25}})
db.applications.aggregate([{$match: {}}, {$group: {_id: '$value', total_amount:{$max: '$amount'}}}])
db.applications.aggregate([{ $project: {user_id: 'user.id', investment: 'investment.id', total: {$multiply:['$value','$amount'] }} }])
db.investments.aggregate([{$project:{code:{$toUpper:'$code'},name:{$toUpper:'$name'},type:{$toUpper: '$type'}}}]).pretty()
db.users.aggregate([{$unwind: '$objectives'}])
db.users.aggregate([{$match: {name: 'Denisson Basto Leal'}}])
db.users.aggregate([{$project: {Name_cpf: {$concat: ['$name','-','$cpf']}}}])
db.investments.aggregate([{$project:{ name: 'Unitas DTVM S.A.', testeString: {$substr: ['$code',0,3]}}}])
db.users.aggregate([{ $sample: {size: 2}}])

db.applications.mapReduce(
	function() {
		emit(this.user_id, this.value*this.amount)
	},
	function(key, value) {
		return value.reduce((acc, val) => acc+val);
	},
	{ out: 'total_invested' }
);

db.total_invested.renameCollection('total_investeds')

let investment = db.investments.findOne({ 'code': 'VALE3'});

db.users.save({
	name: 'João Giberto da Silva',
	email: 'joao@gmail.com',
	cpf: '333.444.555-66',
	born_date: '1987-20-03',
	objectives: {
		cache_back: 40000.00,
		reservation: 23500.0*6,
	},
	notifications: [],
})

db.applications.update(
	{
		investment_id: investment._id,
	},
	{
		$push: {
			dividends: {
				date: '2019-07-06',
				value: 17.50
			}
		},
	}
)

db.users.update({
	cpf: '555.555.555-55'
}, {
	$set: {
		name: "Denisson Augusto Bastos Leal",
		email: "dabl@gmail.com",
	}
})

db.users.find({
	$text: { $search: "denisson leal" }
});


let user = db.users.findOne({ cpf: '555.555.555-55' });

db.applications.aggregate([{
	$match: { user_id: user._id },
}, {
	$project: {
		investment_id: 1,
		dividend_amount: {
			$cond: {
				if: { $isArray: "$dividends" },
				then: { $size: "$dividends" },
				else: 0,
			},
		},
	},
}])

// verifica quais subiram mais de 30% nos 6 meses de historico
db.investments.find({
	type: 'V',
	$where: function() {
		return this.value / this.prices[0].value > 1.3;
	}
}, {
	code: 1,
	_id: 0,
})

// qual pagou mais dividendos, em quantidade
let user = db.users.findOne({ cpf: '321.321.321-32' });

db.applications.aggregate([{
	$match: { user_id: user._id },
}, {
	$unwind: "$dividends"
}, {
	$sortByCount: "$dividends"
}])


let user = db.users.findOne({ cpf: '321.321.321-32' });

db.applications.aggregate([
{
	$match: { user_id: user._id },
}, {
	$lookup: {
		from: 'investments',
		localField: 'investment_id',
		foreignField: '_id',
		as: 'investments'
	}
}, {
	$project: {
		'investments.value': 1,
		'investments.code': 1,
		'value' : 1,
		'amount' : 1,
	}
}
])


db.investments.aggregate({
	$match: { type: 'V' },
}, {
	$project: {
		code: 1,
		prices: {
			$filter: {
				input: "$prices",
				as: "price",
				cond: { $gte: [ "$$price.date", '2019-07-01' ] }
			}
		}
	}
})


db.users.aggregate([
	{
		$project: {
			$strcasecmp: [ '$name', 'Denisson Augusto Bastos Leal' ]
		}
	}
])

db.investments.aggregate([
	{
		$project: {
			_id: -1,
			code: 1,
			union_prices: { 
				$setUnion: [ 
					"$prices.date", 
					['2019-07-01'] 
				] 
			},
		}
	}
	])
	

// Consutas Extras
db.getCollection('users').distinct('email')             // Retornar os emails sem repetir o registro.
