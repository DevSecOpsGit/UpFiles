const routes = require('express').Router();


routes.post('/posts', (req,res) => {

    return res.json({ BackEnd : 'BackEnd '});
});

module.exports = routes;