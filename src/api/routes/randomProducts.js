const express = require('express');
const router = express.Router();
const DB = require('../../config/db');

const db = new DB();

router.get('/', (req, res) => {
    db.query('SELECT * FROM `products` ORDER BY RAND() LIMIT 8')
        .then(data => {
            return res.send(data);
        })
        .catch(err => res.status(500).send(JSON.stringify(err)));
});

module.exports = router;