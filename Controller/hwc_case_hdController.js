var hwc_case_hdService = require('../Services/hwc_case_hdService');

var hwc_case_hdController = {

    getAllhwc_case_hd : (req,res) => {

        hwc_case_hdService.getAllhwc_case_hd().then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
        });
    },

    findhwc_case_hd : (req,res) => {

        hwc_case_hdService.findhwc_case_hd({hwc_meta_id : req.params.hwc_meta_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    addhwc_case_hd : (req,res) => {

        hwc_case_hdService.addhwc_case_hd(req.body).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
            
        });
    },

    updatehwc_case_hd : (req,res) => {

        hwc_case_hdService.updatehwc_case_hd(req.body).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    deletehwc_case_hd : (req,res) => {

        hwc_case_hdService.deletehwc_case_hd({hwc_meta_id : req.body.hwc_meta_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).send();
            
        });
    }
}

module.exports = hwc_case_hdController