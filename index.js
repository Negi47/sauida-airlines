'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const app = express().use(bodyParser.json()); // creates http server

const token = 'verifyToken1213'; // type your verification token here



// app.listen() part should always be located in the last line of your code

app.listen(3000, () => console.log('[ChatBot] Webhook is listening')); 

app.get('/api/notify/wa/webhook', (req, res) => {
    // check if verification token is correct
    if (req.query.token !== token) {
        return res.sendStatus(401); // if not, return unauthorized error
    }
    // return challenge
    return res.end(req.query.challenge);
});


app.post('/api/pushdata', (req, res) => {
    // check if verification token is correct
    if (req.query.token !== token) {
        return res.sendStatus(401);
    }
    // print request body
    console.log(req.body);
    // return a text response
    const data = {
        responses: [
            {
                type: 'randomText',
                messages: ['Hi', 'Hello']
            }
        ]
    };

    res.json(data);
});