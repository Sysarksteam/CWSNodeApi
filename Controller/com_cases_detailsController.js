var com_cases_detailsService = require('../Services/com_cases_detailsService');

var com_cases_detailsController = {

    getAllcom_cases_details : (req,res) => {

        com_cases_detailsService.getAllcom_cases_details().then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    findcom_cases_details : (req,res) => {

        com_cases_detailsService.findcom_cases_details({com_meta_id: req.params.com_meta_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    addcom_cases_details : (req,res) => {

        com_cases_detailsService.addcom_cases_details(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    updatecom_cases_details : (req,res) => {

        req.body.com_meta_id = req.params.com_meta_id;
        
        com_cases_detailsService.updatecom_cases_details(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    deletecom_cases_details : (req,res) => {

        com_cases_detailsService.deletecom_cases_details({com_meta_id : req.params.com_meta_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });

    }

}

module.exports = com_cases_detailsController