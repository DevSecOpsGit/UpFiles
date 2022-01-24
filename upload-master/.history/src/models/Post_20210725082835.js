import firebase = require('firebase');

const path = require('path');



const PostSchema = new firebase.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
