const express = require('express');
const morgan = require('morgan');
c

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3000);