const routes = require('express').Router();
const multer = require('multer');
const 

routes.post('/posts', multer().single('file'),(req,res) => {

    return res.json({ BackEnd : 'BackEnd '});
});

module.exports = routes;