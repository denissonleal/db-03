let user = db.users.findOne({ email: "mfc2@cin.ufpe.br" })
let investiment = db.investings.findOne({ "code" : "FLMA11" })

db.applications.insert({
	user_id: user._id,
	investment_id: investiment._id,
	value: investiment.value,
	qtd: 10,
	dividend: [],
})

