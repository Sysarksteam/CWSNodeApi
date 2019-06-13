var dc_casesService = require('../Services/dc_casesService');

var dc_casesController = {

    getAlldc_cases : (req,res) => {

        dc_casesService.getAlldc_cases().then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    finddc_cases : (req,res) => {

        dc_casesService.finddc_cases({dcs_meta_id : req.params.dcs_meta_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });

    },

    adddc_cases : (req,res) => {

        dc_casesService.adddc_cases(req.body).then(result => {
            
            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    updatedc_cases : (req,res) => {

        req.body.dcs_meta_id = req.params.dcs_meta_id;

        dc_casesService.updatedc_cases(req.body).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    deletedc_cases : (req,res) => {

        dc_casesService.deletedc_cases({dcs_meta_id : req.params.dcs_meta_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
            
        });

    }


}

module.exports = dc_casesController