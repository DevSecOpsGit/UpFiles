const routes = require('express').Router();

routes.get('/', (req,res) => {

    return res.json({ BackEnd : 'B'});
});

module.exports = routes;