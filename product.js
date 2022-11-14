const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }, 
    productimage:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;