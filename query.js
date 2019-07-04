db.createCollection('users')
db.createCollection('investments')
db.createCollection('applications')

// -------------------------------------------------------------------------------------

db.users.find().pretty()                    //Exibir os resultados de uma forma estruturada.
db.users.find({},{nome:1,_id:0})            // Exibir todos os nomes do usuario sem o id



