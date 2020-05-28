module.exports = {
    listNF(req,res){
        const response = req.params.nf;
        res.send(response);
    }
}