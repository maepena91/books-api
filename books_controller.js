const router = require("express").Router();
const books = require('../models/books')

router.get('/listBooks', (req, res) =>{
    res.render("books")
})

module.exports= router;