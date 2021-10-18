const express = require ('express');

const app = express();

const path = require('path');

app.use(express.static("public"))   //El server usa todo lo de Public

app.listen(3030,() => 
console.log('Servidor Funcionando'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.get('/babbage', (req, res) => {
    let babbagePath = path.resolve (__dirname,'views/babbage.html')
    res.sendFile(babbagePath)
});

app.get('/berners-lee', (req, res) => {
    let bernersLeePath = path.resolve (__dirname,'views/berners-lee.html')
    res.sendFile(bernersLeePath)
});

app.get('/clarke', (req, res) => {
    let clarkePath = path.resolve (__dirname,'views/clarke.html')
    res.sendFile(clarkePath)
});

app.get('/hamilton', (req, res) => {
    let hamiltonPath = path.resolve (__dirname,'views/hamilton.html')
    res.sendFile(hamiltonPath)
});

app.get('/hopper', (req, res) => {
    let hopperPath = path.resolve (__dirname,'views/hopper.html')
    res.sendFile(hopperPath)
});

app.get('/lovelace', (req, res) => {
    let lovelacePath = path.resolve (__dirname,'views/lovelace.html')
    res.sendFile(lovelacePath)
});

app.get('/turing', (req, res) => {
    let turingPath = path.resolve (__dirname,'views/turing.html')
    res.sendFile(turingPath)
});