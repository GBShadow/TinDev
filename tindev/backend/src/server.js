const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect("mongodb+srv://gbshadow:gbs123@cluster0-gpjn6.mongodb.net/omnistack8?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});


server.use(express.json());
server.use(routes);

server.listen(3333, () => {
    console.log('Servidor Rodando');
});