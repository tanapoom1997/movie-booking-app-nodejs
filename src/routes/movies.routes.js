const express = require("express");
const router = express.Router();
const db = require("../../db-conection");
const { QueryTypes } = require('sequelize');

const { Movies } = require("../models/index");

router.get('/get-movie', async (req, res) => {
    const listMovies = await Movies.findAll();
    console.log(listMovies)
    res.send('get list movies...')
})

module.exports = router;