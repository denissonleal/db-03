
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
