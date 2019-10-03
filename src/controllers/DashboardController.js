const Spots = require('../models/Spot');

module.exports = {
    //retorna spots do usuario logado
    async show(req, res) {
        const { user_id } = req.headers;
        const spots = await Spots.find({user:user_id});
        return res.json(spots);
    }
}