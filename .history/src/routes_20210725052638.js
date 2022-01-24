const routes = require('express').Router();

routes.get('/pos', (req,res) => {

    return res.json({ BackEnd : 'BackEnd '});
});

module.exports = routes;