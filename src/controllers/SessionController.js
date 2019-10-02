//index = retorna lista de sessoes (select *)
//show = retorna uma unica sessao (select where)
//store = criar uma sessao (insert)
//update = atualizar uma sessao (update)
//destroy = destuir uma sessao (delete)

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        //buscando email dentro do req.body | desestruturação 
        const { email } = req.body;

        //verifica se existe o email cadastrado
        let user = await User.findOne({ email });

        if (!user) {
            //const {email} = req.body; é igual ao de baixo
            //const email = req.body.email;
            user = await User.create({ email });
        }

        //retorna o novo usuario se o email nao estiver cadastrado,
        //caso contrario retorna o que está cadastrado

        return res.json(user);
    }
};