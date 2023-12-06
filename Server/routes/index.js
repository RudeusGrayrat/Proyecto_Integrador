const express = require('express');
const router = express.Router();

const getCharById = require('../controllers/getCharById');
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const postUser = require("../controllers/postUser");

router.get('/character/:id', getCharById);
router.post('/login', postUser);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router