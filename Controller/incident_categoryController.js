var incident_categoryService = require('../Services/incident_categoryService');

var incident_categoryController = {

    getAllic_cat_code : (req,res) => {

        incident_categoryService.getAllic_cat_code().then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    findic_cat_code : (req,res) => {

        incident_categoryService.findic_cat_code({ic_id : req.params.ic_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    addic_cat_code : (req,res) => {

        incident_categoryService.addic_cat_code(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });
        
    },

    editic_cat_code : (req,res) => {

        req.body.ic_id = req.params.ic_id;

        incident_categoryService.editic_cat_code(req.body).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    },

    deleteic_cat_code : (req,res) => {

        incident_categoryService.deleteic_cat_code({ic_id : req.params.ic_id}).then(result => {

            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();
            
        });

    }
}

module.exports = incident_categoryController