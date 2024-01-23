// controllers/getUsers.js
const fs = require('fs');
const j = require('../data/users.json');
//j = JSON.stringify(j);


exports.GetUsers = async(req, res) => {
    const origin = req.headers.origin;
    if (origin != undefined)
    {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.json(JSON.stringify(j));
}