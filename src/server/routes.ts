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
// TBD: error handling, async, abstract functionality from route, identification    
router.post('/api/submit_purchase', (req, res, next) => {
    console.log(req.body);
    var data = JSON.stringify(req.body, null, 2);
    var fileName = 'purchase.json';
    // need to learn env setup in js to handle path in future
    var filePath = path.join(__dirname, '..\\src\\server\\data', 'purchases', fileName)
    console.log('Writing data to', filePath);
    console.log('Writing:\n', data);
    fs.writeFile(filePath, data, () => {res.send("Purchase Submitted Successfully")});
    console.log("Write complete.");
});

// receive GET, return JSON file
// TBD: error handling, async, abstract functionality from route, identification
router.get('/api/recent_purchase', (req, res, next) => {
    console.log(req.query);
    var fileName = 'purchase.json';
    // need to learn env setup in js to handle path in future
    var filePath = path.join(__dirname, '..\\src\\server\\data', 'purchases', fileName)
    console.log('Reading data from', filePath);
    var data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
    res.set('Content-Type', 'application/json')
    res.send(data);
});

export default router;