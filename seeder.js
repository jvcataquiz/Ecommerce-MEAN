const mongoose = require('mongoose');
const Product = require('./product');

mongoose.connect('mongodb://localhost:27017/Ecommerce')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

const seedProducts = [
    {
        fullname: 'Jv Cataquiz',
        productName: "Korean-Tshirt",
        price: 20.00,
        description: "Modern shirt and Popular among teenage boys",
        category: 'Clothes',
        address: 'Manila City',
        date: Date.now(),
        productimage: "picture1.png"
        
    },
    {
        fullname: 'John Tamad',
        productName: "Cellphone",
        price: 120.00,
        description: "Operated Cellphone fot kids",
        category: 'Gadget',
        address: 'Divisoria',
        date: Date.now(),
        productimage: "picture1.png"
        
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })