const express = require('express');
const methodOverride = require("method-override")
const mongoose = require("mongoose");

//configuration
require('dotenv').config();
const app = express()

//variables 
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//Database 
mongoose.connect(MONGO_URI, { userNewParser: true, useUnifiedTopology: true}, () =>{
    console.log("connected to mongo: ", MONGO_URI);
});

//MIDDLEWARE
app.set('views', __dirname + "/views");
app.set('veiw engine', 'jsx');
app.engine("jsx", require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//Routes
app.get('/', (req, res) => {
    res.send("Welcome to Books API")
})

//controllers & Routes
app.use("/books", require("./controller/books"))