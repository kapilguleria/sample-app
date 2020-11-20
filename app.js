const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

require('./api/config/db');

var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`App listening at Port: ${port}`);
});

app.use('/api/', require('./api/routes/index')(express));

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;