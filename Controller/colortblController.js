var colortblService = require('../Services/colortblService');

var colortblController = {

    getAllColors : (req,res) => {
        
        colortblService.getAllColors().then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
        
        });
    },

    findColorCode : (req,res) => {

        colortblService.findColorCode({cm_color_id:req.params.cm_color_id}).then(result => {
            
            res.send(result).end();

        },err => {

            res.status(err.status).send(err).end();

        });
    },

    addColor : (req,res) => {

        colortblService.addColor(req.body).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    updateColor : (req,res) => {

        req.body.cm_color_id = req.params.cm_color_id;

        colortblService.updateColor(req.body).then(result =>{

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();

        });
    },

    deleteColor : (req,res) => {

        colortblService.deleteColor({cm_color_id:req.params.cm_color_id}).then(result => {

            res.send(result).end();

        }, err => {

            res.status(err.status).send(err).end();
            
        });
    }
}

module.exports = colortblController