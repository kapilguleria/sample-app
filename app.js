require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const port = process.env.SERVER_PORT;

var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes(express));

app.use((err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        // we had a joi error, let's return a custom 400 json response
        res.status(400).json(failAction(err.error.message.toString().replace(/[\""]+/g, "")));
    } else {
        // pass on to another error handler
        next(err);
    }
});

app.listen(port, () => {
    console.log(`App listening at Port: ${port}`);
});