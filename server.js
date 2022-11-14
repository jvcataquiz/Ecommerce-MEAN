const express = require('express');
const app = express();
const Product = require('./product');
// const Data = require('./data.json');
const path = require('path');
const mongoose = require('mongoose');


//allowing clientside to fetch all the data
const cors = require('cors');
app.use(cors());

//connecting in mongodb
mongoose.connect('mongodb://localhost:27017/Ecommerce')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("error");
        console.log(err);
    });


    //route
app.get('/', async (req, res) =>{
    const result = await Product.find({});
    res.send(result )
})



app.listen(8080, () => {
    console.log("listening on port 8080");
})