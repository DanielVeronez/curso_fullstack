const mongoose = require('mongoose');
const user = mongoose.model('User');

module.exports = {
    //Método Assincrono
    async persistData(req,res){
        //Promessa
        const response = await req.body;
        user.create(response);
        res.json(response)
    },
    async listUsers(req,res){
        const response = await user.find();
        res.json(response);
    }

}