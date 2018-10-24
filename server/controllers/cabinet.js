const connection = require('../models/db');
// const verifyToken = require('../models/user');

const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.json());

// Login App
router.post('/cabinet', (req, res) => {
    let userData = req.body;
    connection.query(`SELECT * FROM cabinet WHERE code_cabinet = "${userData.codeCabinet}"`, (err, cabinet) => {
        if (err) {
            console.log(err);
        } else {
            res.json(cabinet);
        }
    });
});

module.exports = router;