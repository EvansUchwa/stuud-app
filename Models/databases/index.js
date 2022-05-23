const mysql = require('mysql');



// const onlineDb = {
//     host: 'remotemysql.com',
//     user: 'v8Eel5U53a',
//     password: "1PBVndMKKl",
//     database: 'v8Eel5U53a',
//      port:3306,
// }

const onlineDb = {
    host: 'stuud.fr',
    user: 'u736848414_stuud_root',
    password: "Univearn1234",
    database: 'u736848414_stuud_db',
     port:3306,
     connectionLimit : 10,
  acquireTimeout  : 10000
}
// umbriel.o2switch.net


//  Abcd1111
// SIxCC0>9|h<O!O}J

const localDb = {
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'stuud-api'
}


const db_config = process.env.NODE_ENV === "production" ? onlineDb : localDb;
// const db_config = onlineDb;

var mysqlConnexion = mysql.createPool(db_config)

mysqlConnexion.getConnection(function (error) {
    if (error) {
        console.log('Vous ne pouvez pas vous connecter a la base de données',error)
        // mysqlConnexion = reconnect(mysqlConnexion)
    } else {
        console.log('Vous êtes connecté a la base de données ')
    }
})

// var mysqlConnexion = mysql.createConnection(db_config)
// mysqlConnexion.connect(function (error) {
//     if (error) {
//         console.log('Vous ne pouvez pas vous connecter a la base de données',error)
//         // mysqlConnexion = reconnect(mysqlConnexion)
//     } else {
//         console.log('Vous êtes connecté a la base de données')
//     }
// });




module.exports = mysqlConnexion;