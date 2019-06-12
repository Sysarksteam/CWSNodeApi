var villageNameService = require('../Services/villageNameService');

var villageNameController = {

    getAllVillageName : (req,res) => {

        villageNameService.getAllVillageName().then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    findVillageName : (req,res) => {

        villageNameService.findVillageName({vm_id : req.params.vm_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    addVillageName : (req,res) => {

        villageNameService.addVillageName(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });
        
    },

    editVillageName : (req,res) => {

        req.body.vm_id = req.params.vm_id;

        villageNameService.editVillageName(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    deleteVillageName : (req,res) => {

        villageNameService.deleteVillageName({vm_id : req.params.vm_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    }
}

module.exports = villageNameController