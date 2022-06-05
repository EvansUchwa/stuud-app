const {mysql_selectAll,mysql_selectOne} = require('./databases/query.js');

async function getAll(req, res) {
    let school_subjects = await mysql_selectAll('school_subjects','*','ORDER BY id')

    res.send(school_subjects)
}


async function alreadyExist(school_subject) {
    let exist = await mysql_selectOne("school_subjects", "name", " = '"+school_subject+"' LIMIT 1 ")

    if(exist.length > 0){
        return exist;
    }
    return false;
}

module.exports = { getAll,alreadyExist }