var talukNameService = require('../Services/talukNameService');

var talukNameController = {

    getAllTalukName : (req,res) => {

        talukNameService.getAllTalukName().then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    findTalukName : (req,res) => {

        talukNameService.findTalukName({tm_id : req.params.tm_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    addTalukName : (req,res) => {

        talukNameService.addTalukName(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });
        
    },

    editTalukName : (req,res) => {

        req.body.tm_id = req.params.tm_id;

        talukNameService.editTalukName(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    deleteTalukName : (req,res) => {

        talukNameService.deleteTalukName({tm_id : req.params.tm_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    }
}

module.exports = talukNameController