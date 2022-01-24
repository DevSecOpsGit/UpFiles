const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

/**
 * Database Setup
 */

mongoose.connect('mongodb+srv://NomeDoBD:<Password>@cluster0.6fokl.mongodb.net/upload?retryWrites=true&w=majority', {
 
useNewU rlParser: true, 
useUnifiedTopology: true

});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3000);