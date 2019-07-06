let user = db.users.findOne({ email: 'mfc2@cin.ufpe.br'});
let investment = db.investments.findOne({ 'code': 'FLMA11'});

db.applications.insert({
	user_id: user._id,
	investment_id: investment._id,
	value: investment.value,
	amount: 10,
	dividend: [],
});

user = db.users.findOne({ email: 'Antonio@hotmail.com'});
investment = db.investments.findOne({ 'code': 'VALE3'});

db.applications.insert({
	user_id: user._id,
	investment_id: investment._id,
	value: investment.value,
	amount: 25,
	dividend: [],
})

user = db.users.findOne({ email: 'Eike@hotmail.com'});
investment = db.investments.findOne({ 'code': 'BRDT3'});

db.applications.insert({
	user_id: user._id,
	investment_id: investment._id,
	value: investment.value,
	amount: 102,
	dividend: [],
})

user = db.users.findOne({ email: 'dbl@gmail.com'});
investment = db.investments.findOne({ 'code': 'BIDI4'});

db.applications.insert({
	user_id: user._id,
	investment_id: investment._id,
	value: investment.value,
	amount: 57,
	dividend: [],
});

user = db.users.findOne({ email: 'maria@gmail.com'});
investment = db.investments.findOne({ 'code': 'PMAM3'});

db.applications.insert({
	user_id: user._id,
	investment_id: investment._id,
	value: investment.value,
	amount: 14,
	dividend: [],
});
