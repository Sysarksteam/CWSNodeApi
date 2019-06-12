var hwc_detailsUserService = require('../Services/hwc_detailsUserService');

var hwc_detailsUserController = {

    getAllhwc_detailsUser : (req,res) => {

        hwc_detailsUserService.getAllhwc_detailsUser().then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });

    },

    findhwc_detailsUser : (req,res) => {

        hwc_detailsUserService.findhwc_detailsUser({hwc_metainstance_id:req.params.hwc_metainstance_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    addhwc_detailsUser : (req,res) => {

        hwc_detailsUserService.addhwc_detailsUser(req.body).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    edithwc_detailsUser : (req,res) => {

        req.body.hwc_metainstance_id = req.params.hwc_metainstance_id;
        hwc_detailsUserService.edithwc_detailsUser(req.body).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });


    },

    deletehwc_detailsUser : (req,res) => {

        hwc_detailsUserService.deletehwc_detailsUser({hwc_metainstance_id : req.params.hwc_metainstance_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
            
        });
    }

}

module.exports = hwc_detailsUserController