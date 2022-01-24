const firebase = require('firebase');

const path = require('path');



const PostSchema = fi({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
