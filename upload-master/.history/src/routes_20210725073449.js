const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

routes.post('/posts', multer(multerConfig).single('file'),(req,res) => {
    const post = await Post.create({
        name,
        size,
        
    })

    return res.json({ BackEnd : 'BackEnd '});
});

module.exports = routes;