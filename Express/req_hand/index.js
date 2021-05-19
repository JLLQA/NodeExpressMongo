const express = require('express');
const app = express();

let names = ['Jordan', 'Kevin', 'George', 'Jhon'];


app.get('/', (req, res) => res.send('Hello, my name is Jordan!'));

app.get('/getAll', (req, res) => res.send(names));

// localhost:3000/get/1
app.get('/get/:id', (req, res) => {
    console.log("Get ID");
    res.send(names[req.params.id])
});

// localhost:3000/delete/0
app.get('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

app.use(express.json());

app.post('/create', (req, res) => {
    const name = 'Sarah';
    names.push(name);
    res.status(201).send(`${name} added successfully`);
});

// curl -X POST "http://localhost:3000/create"

app.post('/replace/:index', (req, res) => {
    const name = 'Jim';
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
});

// curl -X POST "http://localhost:3000/replace/1"

app.listen(3000);