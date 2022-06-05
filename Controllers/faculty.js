const {mysql_selectAll} = require('./databases/query.js');

async function getAll(req, res) {
    let facultys = await mysql_selectAll('facultys','*','ORDER BY id')

    res.send(facultys)
}


module.exports = { getAll }