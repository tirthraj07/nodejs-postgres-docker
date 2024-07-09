const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const xss = require('xss-clean');
const db = require('./db');

require('dotenv').config();


app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());
app.use(xss());

// routes
const api_router = require("./routes/api/api");

app.use('/api', api_router);

app.get('/', (req, res)=>{
    res.setHeader("Content-Type","text/html");
    res.status(200);
    res.send('<h1 style="text-align: center;"> Hello From Docker 🐋</h1>');
})

module.exports = app;