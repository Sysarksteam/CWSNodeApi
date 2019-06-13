var hwc_case_cropService = require('../Services/hwc_case_cropService');

var hwc_case_cropController = {

    getAllhwc_case_crop : (req,res) => {

        hwc_case_cropService.getAllhwc_case_crop().then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    findhwc_case_crop : (req,res) => {

        hwc_case_cropService.findhwc_case_crop({hwc_meta_id : req.params.hwc_meta_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });

    },

    addhwc_case_crop : (req,res) => {

        hwc_case_cropService.addhwc_case_crop(req.body).then(result => {
            
            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    updatehwc_case_crop : (req,res) => {

        req.body.hwc_meta_id = req.params.hwc_meta_id;

        hwc_case_cropService.updatehwc_case_crop(req.body).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    deletehwc_case_crop : (req,res) => {

        hwc_case_cropService.deletehwc_case_crop({hwc_meta_id : req.params.hwc_meta_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
            
        });

    }


}

module.exports = hwc_case_cropController