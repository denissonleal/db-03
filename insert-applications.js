let user = db.users.findOne({ email: 'mfc2@cin.ufpe.br'})
let investment = db.investment.findOne({ 'code': 'FLMA11'})

db.applications.insert({
	user_id: user._id,
	investment_id: investment._id,
	value: investment.value,
	qtd: 10,
	dividend: [],
})