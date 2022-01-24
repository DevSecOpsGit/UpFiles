const routes = require('express').Router();
const multer = require('')


routes.post('/posts', (req,res) => {

    return res.json({ BackEnd : 'BackEnd '});
});

module.exports = routes;