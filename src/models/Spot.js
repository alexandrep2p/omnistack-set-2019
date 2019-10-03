const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail:String,
    company:String,
    price:Number,
    techs:[String],
    user:{
        //referencia do usuario q criou o spot, como se fosse uma FK
        type:mongoose.Schema.Types.ObjectId,
        //qual o model que tem a referência
        ref:'User'
    }
});

module.exports = mongoose.model('Spot', SpotSchema);