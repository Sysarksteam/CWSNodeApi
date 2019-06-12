var dailyCountService = require('../Services/dailyCountService');

var dailyCountController = {

    getAllDailyCount : (req,res) => {
        
        dailyCountService.getAllDailyCount().then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
        
        });
    },

    findDailyCount : (req,res) => {

        dailyCountService.findDailyCount({dc_metainstance_id:req.params.dc_metainstance_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    addDailyCount : (req,res) => {

        dailyCountService.addDailyCount(req.body).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    updateDailyCount : (req,res) => {

        req.body.dc_metainstance_id = req.params.dc_metainstance_id;

        dailyCountService.updateDailyCount(req.body).then(result =>{

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    deleteDailyCount : (req,res) => {

        dailyCountService.deleteDailyCount({dc_metainstance_id:req.params.dc_metainstance_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
            
        });
    }
}

module.exports = dailyCountController