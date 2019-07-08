
//Checklist
db.users.find()                                                                  // Find - Exibir todos os usuarios da base.
db.users.find({},{name:1,_id:0});                                                // Find - Exibir todos os nomes do usuario sem o id.
db.getCollection('applications').find({}).limit(2);                              // Limit - Define a quantidade de registros que aparecerão na tela.
db.getCollection('users').find({},{'name':1,'born_date':1,_id:0}).skip(2);       // skip - pula os registros e só exibimos a partir dos que foi add no skip como parametro.
db.getCollection('investments').find({'name':{$exists:true}}).count();           // Exist - verifica se na coleção existe ou não determinado campo.
db.getCollection('users').find({}).sort({"_id":-1});                             // sort - Ordena do ultimo que foi add ao primeiro
db.users.find().pretty();                                                        // pretty - Exibir todos os usuarios da base de uma forma estruturada.
db.investments.find({type: {$all:['V']}})
db.applications.find({amount: {$gte: 25}})
db.applications.aggregate([{$match: {}}, {$group: {_id: '$value', total_amount:{$max: '$amount'}}}])

db.applications.aggregate([{ $project: {user_id: 'user.id', investment: 'investment.id', total: {$multiply:['$value',
'$amount'] }} }])

db.investments.aggregate([{$project:{code:{$toUpper:'$code'},name:{$toUpper:'$name'},type:{$toUpper: '$type'}}}]).pretty()

db.users.aggregate([{$unwind: '$objectives'}])
db.users.aggregate([{$match: {name: 'Denisson Basto Leal'}}])

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





// Consutas Extras
db.getCollection('users').distinct('email')             // Retornar os emails sem repetir o registro.
