const express = require('express');

const app = express();

// req.query = pegar query params (filtros)
// req.params = pegar a string da url = ex.: /:id = req.params.id (put e delete)
// req.body = corpo da requisição (post)

//utilizar json para requests e responses
app.use(express.json());

app.post('/', (req, res) => {
    return res.json(req.body);
});

app.listen(3333);