var dbService = require('../Services/dbService');

var dbController = {

    getAllDBName : (req,res) => {
        
        dbService.getAllDBName().then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
        
        });
    },

    findDBName : (req,res) => {

        dbService.findDBName({db_id:req.params.db_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    addDBName : (req,res) => {

        dbService.addDBName(req.body).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    updateDBName : (req,res) => {

        req.body.db_id = req.params.db_id;

        dbService.updateDBName(req.body).then(result =>{

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    deleteDBName : (req,res) => {

        dbService.deleteDBName({db_id:req.params.db_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
            
        });
    }
}

module.exports = dbController