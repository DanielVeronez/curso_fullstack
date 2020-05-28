const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async persistData(req,res){
        //Promessa
        const response = req.body;
        User.create(response);
    }

}