let user = db.users.findOne({ email: 'mfc2@cin.ufpe.br'})
let investment = db.investments.findOne({ 'code': 'FLMA11'})

let user = db.users.findOne({ email: 'Antonio@hotmail.com'})
let investment = db.investments.findOne({ 'code': 'VALE3'})

let user = db.users.findOne({ email: 'Eike@hotmail.com'})
let investment = db.investments.findOne({ 'code': 'BRDT3'})

let user = db.users.findOne({ email: 'dbl@gmail.com'})
let investment = db.investments.findOne({ 'code': 'BIDI4'})

let user = db.users.findOne({ email: 'maria@gmail.com'})
let investment = db.investments.findOne({ 'code': 'PMAM3'})

db.applications.insert({
	user_id: user._id,
	investment_id: investment._id,
	value: investment.value,
	qtd: 10,
	dividend: [],
})

db.applications.insert({
	user_id: user._id,
	investment_id: investment._id,
	value: investment.value,
	qtd: 25,
	dividend: [],
})

db.applications.insert({
	user_id: user._id,
	investment_id: investment._id,
	value: investment.value,
	qtd: 102,
	dividend: [],
})

db.applications.insert({
	user_id: user._id,
	investment_id: investment._id,
	value: investment.value,
	qtd: 57,
	dividend: [],
})

db.applications.insert({
	user_id: user._id,
	investment_id: investment._id,
	value: investment.value,
	qtd: 14,
	dividend: [],
})