const express = require('express');

const app = express();

app.use(express.json());
app.use(express)

app.use(require('./routes'));

app.listen(3000);