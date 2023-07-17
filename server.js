// IMPORTS 
const express = require('express');
const app = express();
const path = require('path');
// const expressLayouts = require('express-ejs-layouts');

// STATIC FILES
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/javascript', express.static(__dirname + 'public/javascript'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/audio', express.static(__dirname + 'public/audio'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));
app.use('/static', express.static('public'));

// VIEW ENGINE 
// app.use(expressLayouts);
app.set('view engine', 'ejs');

// ROUTES 
app.get('', (req, res) => {
    res.render('index')
})
app.get('/index', (req, res) => {
    res.render('index')
})
app.get('*', (req, res)=> {   
    res.send("404, Page not found");
})
    

// PORT 
app.listen(3000, function() {
    console.log("Server is up at port 3000");
})