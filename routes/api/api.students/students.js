const express = require('express');
const db = require("../../../db");

const api_students_router = express.Router();

api_students_router.get('/', async(req, res)=>{
    try {
        const result = await db.query('SELECT * FROM students');
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
})

module.exports = api_students_router;