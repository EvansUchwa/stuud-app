function getAll(req, res, axios) {
    axios.get('http://universities.hipolabs.com/search?country=France')
        .then(apiRes => res.send(apiRes.data))
        .catch(err => res.send({ message: "Une erreur s'est produite" }))
}


module.exports = { getAll }