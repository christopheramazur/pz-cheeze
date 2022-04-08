// https://www.codegrepper.com/code-examples/javascript/node+write+a+json+file+in+specific+folder
import * as express from 'express';
import { fstatSync } from 'fs';
const cheeses = require('./data/cheeses.json');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});

// receive POST with JSON body, save as file
router.post('/api/submitpurchase', (req, res, next) => {
    var data = JSON.stringify(req.body, null, 2);
    var fileName = 'purchase.json';
    // need to learn env setup in js to handle path in future
    var filePath = path.join(__dirname, '..', 'data', 'purchases', fileName)
    fs.writeFile()

})

export default router;