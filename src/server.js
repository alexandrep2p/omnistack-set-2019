const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');   

const app = express();

//url do cluster no mongodb atlas
//[user]:[senha]... ...mongodb.net/[nome do banco]
mongoose.connect('mongodb+srv://omniuser:omniuser@clusteromnistack-kkz2a.mongodb.net/AirCncDb?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

// req.query = pegar query params (filtros)
// req.params = pegar a string da url = ex.: /:id = req.params.id (put e delete)
// req.body = corpo da requisição (post)

//utilizar json para requests e responses
app.use(express.json());

//arquivo routes.js com as rotas da api
app.use(routes);

//porta de acesso
app.listen(3333);