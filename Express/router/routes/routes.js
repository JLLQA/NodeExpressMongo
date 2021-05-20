const ROUTER = require('express').Router();

const names = ['Jordan', 'Kevin', 'George', 'Jhon'];

ROUTER.get('/', (req, res) => res.send('Hello, my name is Jordan!'));

ROUTER.get('/getAll', (req, res) => res.send(names));

// localhost:3000/get/1
ROUTER.get('/get/:id', (req, res) => {
    console.log("Get ID");
    res.send(names[req.params.id])
});

// localhost:3000/delete/0
ROUTER.get('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

ROUTER.post('/create', (req, res) => {
    const name = 'Sarah';
    names.push(name);
    res.status(201).send(`${name} added successfully`);
});

// curl -X POST "http://localhost:3000/create"

ROUTER.post('/replace/:index', (req, res) => {
    const name = 'Jim';
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
});

// curl -X POST "http://localhost:3000/replace/1"

module.exports = ROUTER;