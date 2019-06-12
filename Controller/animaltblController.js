var animaltblService = require('../Services/animaltblService');

var animaltblController = {

    getAllAnimals : (req,res) => {
        
        animaltblService.getAllAnimals().then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
        
        });
    },

    findAnimal : (req,res) => {

        animaltblService.findAnimal({am_id:req.params.am_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    addAnimal : (req,res) => {

        animaltblService.addAnimal(req.body).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    updateAnimal : (req,res) => {

        req.body.am_id = req.params.am_id;

        animaltblService.updateAnimal(req.body).then(result =>{

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    deleteAnimal : (req,res) => {

        animaltblService.deleteAnimal({am_id:req.params.am_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
            
        });
    }
}

module.exports = animaltblController