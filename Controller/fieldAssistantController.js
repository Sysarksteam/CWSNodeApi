var fieldAssistantService = require('../Services/fieldAssistantService');

var fieldAssistantController = {

    getAllFieldAssistant : (req,res) => {

        fieldAssistantService.getAllFieldAssistant().then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    findFieldAssistant : (req,res) => {

        fieldAssistantService.findFieldAssistant({fa_id : req.params.fa_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    addFieldAssistant : (req,res) => {

        fieldAssistantService.addFieldAssistant(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });
        
    },

    editFieldAssistant : (req,res) => {

        req.body.fa_id = req.params.fa_id;

        fieldAssistantService.editFieldAssistant(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    deleteFieldAssistant : (req,res) => {

        fieldAssistantService.deleteFieldAssistant({fa_id : req.params.fa_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    }
}

module.exports = fieldAssistantController