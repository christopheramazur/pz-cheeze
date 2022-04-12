import express = require('express');
import apiRouter from './routes';


const app = express();
// from: https://stackoverflow.com/questions/61334553/req-body-is-undefined-while-post-request-through-fetch-api
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));