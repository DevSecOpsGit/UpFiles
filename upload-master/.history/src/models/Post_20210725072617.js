const mongoose = require('mongoose');



const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt
})