const mongoose = require('mongoose');

//model do usuário, objeto JSON
const UserSchema = new mongoose.Schema({
    email:String
});

//exportando o model User, usando o schema UserSchema
module.exports = mongoose.model('User', UserSchema);