const mongoose = require('mongoose');


const path = require('path');



const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

PostSchema.pre('save', function(){
    if(!this.url){
        this.url = `${}`
    }

})