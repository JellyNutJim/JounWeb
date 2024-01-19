// src/routes/dataRoutes.js

const express = require('express');

// Routes
const getWords = require('../controllers/getWords');
const setWords = require('../controllers/setWords');

const getUsers = require('../controllers/getUsers');
const setUser = require('../controllers/setUser');

const router = express.Router();

router.get('/api/getWords', getWords.GetWords); // getWords.func
router.get('/api/getUsers', getUsers.GetUsers); 

module.exports = router;