const firebase = require('firebase');

const path = require('path');



const PostSchema = ner firebase.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
