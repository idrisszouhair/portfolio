// IMPORTS 
const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3000;
require('dotenv').config();


// MIDDLEWARE
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/javascript', express.static(__dirname + 'public/javascript'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/audio', express.static(__dirname + 'public/audio'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));
app.use('/static', express.static('public'));
app.use(express.json());


// VIEW ENGINE 
app.set('view engine', 'ejs');


// ROUTES 
app.get('', (req, res) => {
    res.render('index');
})
app.get('/index', (req, res) => {
    res.render('index');
})
app.get('*', (req, res)=> {   
    res.send("404, Page not found");
})
    

// POST
app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'idriss.zouhair.dev@gmail.com',
            pass: process.env.NODEMAILER_PASSWORD,
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'idriss.zouhair.dev@gmail.com',
        message : `Message from ${req.body.email}: ${req.body.message}`,
        text: req.body.message
    } 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})


// PORT 
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
})