var wildUserService = require('../Services/wildUserService');

var wildUserController = {

    getAllWildUser : (req,res) => {

        wildUserService.getAllWildUser().then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    findWildUser : (req,res) => {

        wildUserService.findWildUser({wls_wsid : req.params.wls_wsid}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    addWildUser : (req,res) => {

        wildUserService.addWildUser(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });
        
    },

    editWildUser : (req,res) => {

        req.body.wls_wsid = req.params.wls_wsid;

        wildUserService.editWildUser(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    deleteWildUser : (req,res) => {

        wildUserService.deleteWildUser({wls_wsid : req.params.wls_wsid}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    }
}

module.exports = wildUserController