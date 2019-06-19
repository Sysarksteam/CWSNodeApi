var hwc_case_hiService = require('../Services/hwc_case_hiService');

var hwc_case_hiController = {

    getAllhwc_case_hi : (req,res) => {

        hwc_case_hiService.getAllhwc_case_hi().then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    findhwc_case_hi : (req,res) => {

        hwc_case_hiService.findhwc_case_hi({hwc_meta_id: req.params.hwc_meta_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    addhwc_case_hi : (req,res) => {

        hwc_case_hiService.addhwc_case_hi(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    updatehwc_case_hi : (req,res) => {

        req.body.hwc_meta_id = req.params.hwc_meta_id;
        
        hwc_case_hiService.updatehwc_case_hi(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    deletehwc_case_hi : (req,res) => {

        hwc_case_hiService.deletehwc_case_hi({hwc_meta_id : req.params.hwc_meta_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });

    }

}

module.exports = hwc_case_hiController