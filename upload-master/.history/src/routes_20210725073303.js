const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

con

routes.post('/posts', multer(multerConfig).single('file'),(req,res) => {

    console.log(req.file);

    return res.json({ BackEnd : 'BackEnd '});
});

module.exports = routes;