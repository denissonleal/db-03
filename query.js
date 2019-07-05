db.createCollection('users')
db.createCollection('investments')
db.createCollection('applications')

// -------------------------------------------------------------------------------------

db.users.find().pretty()                                //Exibir os resultados de uma forma estruturada.
db.users.find({},{name:1,_id:0})                        // Exibir todos os nomes do usuario sem o id.
db.users.find({cpf: '123.123.123-12'}).pretty()         // Exibir os dados da pessoa cujo cpf é igual a '123.123.123-12'

