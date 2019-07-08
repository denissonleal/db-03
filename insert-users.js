db.users.createIndex({ name: 'text' });

db.users.insert({
	name: 'Mailton Fernandes de Carvallho',
	email: 'mfc2@cin.ufpe.br',
	cpf: '111.111.111-11',
	born_date: '1983-02-24',
	objectives: {
		cache_back: 3000.00,
		reservation: 3000.0*6,
	},
	notifications: [],
})

db.users.insert({
	name: 'Maria Joaquina de Araujo',
	email: 'maria@gmail.com',
	cpf: '444.444.444-44',
	born_date: '1991-09-12',
	objectives: {
		cache_back: 1500.00,
		reservation: 2000.0*6,
	},
	notifications: [],
})

db.users.insert({
	name: 'Antonio Pedro Filho',
	email: 'Antonio@hotmail.com',
	cpf: '321.321.321-32',
	born_date: '1995-10-22',
	objectives: {
		cache_back: 4200.00,
		reservation: 3200.0*6,
	},
	notifications: [],
})

db.users.insert({
	name: 'Eike Batista Junior',
	email: 'Eike@hotmail.com',
	cpf: '999.999.999-99',
	born_date: '1980-01-16',
	objectives: {
		cache_back: 10700.00,
		reservation: 33200.0*6,
	},
	notifications: [],
})

db.users.insert({
	name: 'Denisson Basto Leal',
	email: 'dbl@gmail.com',
	cpf: '555.555.555-55',
	born_date: '1992-10-05',
	objectives: {
		cache_back: 70000.00,
		reservation: 27800.0*6,
	},
	notifications: [],
})

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

