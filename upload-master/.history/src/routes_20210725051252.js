const routes = require('express').Router();

routes.get('/', (req,res) => {

    return res.json({ B });
});

module.exports = routes;