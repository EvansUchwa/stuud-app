const mysqlConnexion = require('./index.js');

function mysql_selectAll(table, column, requestEnd) {
    return new Promise((resolve, reject) => {
        mysqlConnexion.query('SELECT ' + column + ' FROM ' + table + ' ' + requestEnd, (error, res) => {
            if (error) {
                reject(error);
            } else {
                resolve(res);
            }
        })
    })
}


function mysql_findOne( table, column, requestEnd) {
    return new Promise((resolve, reject) => {
        mysqlConnexion.query('SELECT * FROM ' + table + ' WHERE ' + column + requestEnd, (err, res) => {
            if (err) {
                reject(err);
            } else {
                res.length > 0 ? resolve(res) : reject({ "message": "Not found" })
            }
        })
    })
}


function mysql_notFound(table, column, requestEnd) {
    return new Promise((resolve, reject) => {
        mysqlConnexion.query('SELECT * FROM ' + table + ' WHERE ' + column + requestEnd, (err, res) => {
            if (err) {
                reject(err);
            } else {
                res.length == 0 ? resolve(res) : reject({ "message": "Found" })
            }
           
        })
    })
}

function mysql_Search_Existance( tableSelected, columnSelected, params){
    return new Promise((resolve, reject) => {
        mysqlConnexion.query('SELECT ' + columnSelected + ' FROM ' + tableSelected + ' ' + params, (error, res) => {
            if (error) {
                reject(error);
            } else {
                resolve(res);
            }
        })
    })

}



function mysql_Insert ( table, columns, values) {
    return new Promise((resolve, reject) => {

        mysqlConnexion.query('INSERT INTO ' + table + '(' + columns + ') VALUES(' + values + ') ', (error, res) => {
            if (error) {
                reject(error)
            } else {
                resolve(res)
            }
        })
    })
}


function mysql_updateOne ( table, columns, columnNewValue, requestEnd) {
    return new Promise((resolve, reject) =>{
        mysqlConnexion.query('UPDATE ' + table + ' SET ' + columns + ' = ' + columnNewValue + ' ' + requestEnd + ' ', (error, res) => {
            if (error) {
                reject(error)
            } else {
                resolve(res)
            }
           
        })
    })
}


function mysql_leftJoinSelect ( table, columns, rightColumn,joinCond, requestEnd) {
    const myquery = 'SELECT ' + columns + ' FROM ' + table + ' LEFT JOIN '+ rightColumn +' ON '+ joinCond+' ' + requestEnd
        
        return new Promise((resolve, reject) =>{
        mysqlConnexion.query(myquery, (error, res) => {
            if (error) {
                reject(error)
            } else {
                if(res.length > 0){
                    resolve(res)
                }else{
                    reject({message: 'Not found'})
                }
            }
           
        })
    })
    

}





// module.exports = { mysql_Simple_Select, mysql_Insert, mysql_Search_Existance, mysql_UpdateOne }
module.exports = { mysql_Insert,mysql_updateOne,mysql_leftJoinSelect,
 mysql_findOne, mysql_notFound,mysql_selectAll };