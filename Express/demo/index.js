const express = require('express');
const app = express();

// app.get('/', function(req, res) {
//     res.send("Hello QAC");
// })

app.get('/', (req, res) => {
    res.send("We are awesome");
})

app.listen(3000);