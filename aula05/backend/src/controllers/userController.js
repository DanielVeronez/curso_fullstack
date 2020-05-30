const mongoose  = require('mongoose');
const axios     = require('axios');
const User      = mongoose.model('User');

module.exports = {
    async persisteUser(req,res){
        const payload = await req.body;
        User.create(payload);
        res.json(payload);
    },
    async listUser(req,res){
        const response = await User.find()
        res.json(response);
    },
    async getUserGit(req,res){
        const response = await axios.get('https://api.github.com/users/leonardogandrade')
        res.json(response.data);
    }
}