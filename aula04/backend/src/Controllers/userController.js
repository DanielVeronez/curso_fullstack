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
    },
    async listaUm(req,res){
        const response = await user.findById(req.params.id);
        res.json(response);
    },
    async findUserByName(req,res){
        const {name} = req.body;
        user.find({name:/daniel/i}, function(err,docs){
            if(!err){
                console.log(docs);
                res.json(docs);
            }else{
                throw err;
            }
        })
    },
    async listBySex(req,res){
        const response = await user.find({"sex":req.params.sex});
        res.json(response);
    },
    async listByAge(req,res){
        const response = await user.find().where('age').gt(req.params.age);
        res.json(response);
    },
    //Sempre que for usar o mongoose, tem que ser assíncrono
    async listManyFields(req,res){
        const response = await user.find() //encontre:
            .where('name').regex(req.query.name) //quando o nome conter
                .where('age').equals(req.query.age); //quando a idade for
        //req.query.name + '-' + req.query.age;
        res.json(response);
    }
}