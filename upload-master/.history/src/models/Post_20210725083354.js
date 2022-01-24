const firebase = require('firebase');
require('firebase/auth');
require('firebase/firestore');

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
