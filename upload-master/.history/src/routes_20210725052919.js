const routes = require('express').Router();
const multer = require('multer');


routes.post('/posts', multer().single,(req,res) => {

    return res.json({ BackEnd : 'BackEnd '});
});

module.exports = routes;