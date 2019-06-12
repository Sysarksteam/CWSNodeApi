var parkNameService = require('../Services/parkNameService');

var parkNameController = {

    getAllParkName : (req,res) => {

        parkNameService.getAllParkName().then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    findParkName : (req,res) => {

        parkNameService.findParkName({pm_id : req.params.pm_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    addParkName : (req,res) => {

        parkNameService.addParkName(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });
        
    },

    editParkName : (req,res) => {

        req.body.pm_id = req.params.pm_id;

        parkNameService.editParkName(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    deleteParkName : (req,res) => {

        parkNameService.deleteParkName({pm_id : req.params.pm_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    }
}

module.exports = parkNameController