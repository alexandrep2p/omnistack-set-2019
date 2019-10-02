//index = retorna lista de sessoes (select *)
//show = retorna uma unica sessao (select where)
//store = criar uma sessao (insert)
//update = atualizar uma sessao (update)
//destroy = destuir uma sessao (delete)

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const {email} = req.body;
        //buscando email dentro do req.body | desestruturação 
        //const {email} = req.body; é igual ao de baixo
        //const email = req.body.email;
        const user = await User.create({ email });

        return res.json(user);
    }
};