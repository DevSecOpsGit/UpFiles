const express = require('express');
const morgan = require('morgan');
/*const mongoose = require('mongoose');*/
const firebase = require('firebase');
require('firebase/auth')

const app = express();

/**
 * Database Setup
 */

/**mongoose.connect('mongodb+srv://rootdb:Nses100@cluster0.6fokl.mongodb.net/upload?retryWrites=true&w=majority', {
 
useNewUrlParser: true, 
useUnifiedTopology: true

});*/
const firebaseConfig = {
    apiKey: "AIzaSyBDP7iYVLAV4ZXCSXey1pBvsVWQ-_bprc4",
    authDomain: "cyberstormti.firebaseapp.com",
    projectId: "cyberstormti",
    storageBucket: "cyberstormti.appspot.com",
    messagingSenderId: "1059372440563",
    appId: "1:1059372440563:web:b2e86900bb82026f2f5086",
    measurementId: "G-CCFLV557XE"
  };

 firebase.initializeApp(firebaseConfig); 


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3000);