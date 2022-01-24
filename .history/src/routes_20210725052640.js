const routes = require('express').Router();

routes.get('/posts', (req,res) => {

    return res.json({ BackEnd : 'BackEnd '});
});

module.exports = routes;