const express = require('express');
const app = express();
const Data = require('./data.json');
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) =>{
res.send(Data)
})

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/new', (req, res) => {
    res.send(categories);
})

app.listen(8080, () => {
    console.log("listening on port 8080");
})