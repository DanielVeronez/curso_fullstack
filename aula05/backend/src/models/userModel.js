const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login : String,
    name : String,
    biografia : String,
    avatar_url : String,
    company : String,
    public_repos : Number,
    followers : Number
},{
    timestamps : true
});

module.exports = mongoose.model('User',userSchema);