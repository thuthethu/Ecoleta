const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db

/*
db.serialize(() => {

    module.exports = db

    
    // Criar uma tabela 

    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2     TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    // Inserir dados em uma tabela
    const query = 
    `
     INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
     ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        "https://i.pinimg.com/236x/36/48/50/3648508502d2bebe2814ecf7024d43f1.jpg",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Residuos Eletrônicos, Lâmpadas"
    ]


    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)
    
    
    
    // Consultar os dados da tabela 
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        
        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })
    

   //Deletar um dado d tabela
   db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
       if(err) {
           return console.log(err)
       }
       
       console.log("Registro deletado com sucesso!")
   })
})
*/