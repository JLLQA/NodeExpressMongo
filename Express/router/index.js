const EXPRESS = require('express');
const APP = EXPRESS();

const ROUTES = require('./routes/routes');

APP.use(EXPRESS.json());
APP.use(ROUTES);

APP.listen(3000);