var rangeNameService = require('../Services/rangeNameService');

var rangeNameController = {

    getAllRangeName : (req,res) => {

        rangeNameService.getAllRangeName().then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    findRangeName : (req,res) => {

        rangeNameService.findRangeName({rm_id : req.params.rm_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    addRangeName : (req,res) => {

        rangeNameService.addRangeName(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });
        
    },

    editRangeName : (req,res) => {

        req.body.rm_id = req.params.rm_id;

        rangeNameService.editRangeName(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    deleteRangeName : (req,res) => {

        rangeNameService.deleteRangeName({rm_id : req.params.rm_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    }
}

module.exports = rangeNameController