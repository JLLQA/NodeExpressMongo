const express = require('express');
const app = express();

let names = ['Jordan', 'Kevin', 'George', 'Jhon'];

app.use((req, res, next) => {
    const logEntry =
        `time: ${new Date()}`;
    console.log(logEntry);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, my name is Jordan!');
});


app.get('/getAll', (req, res) => {
    res.send(names)
});

app.listen(3000);