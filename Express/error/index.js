const EXPRESS = require('express');
const APP = EXPRESS();

// const ERR = new Error

APP.get('/error', (req, res, next) => {
    const ERR = new Error("Useful error message");
    next(ERR);
})

const ERRORLOGGER = (err, req, res, next) => {
    console.log(err.stack);
    next(err);
}

APP.use(ERRORLOGGER);

const SENDERROR = (err, req, res) => {
    res.status(500).send(err.message);
}

APP.use(SENDERROR);

APP.listen(4000);