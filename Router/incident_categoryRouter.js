var router = require('express').Router();

var incident_categoryController = require('../Controller/incident_categoryController');

router.get('/',incident_categoryController.getAllic_cat_code);
router.get('/:ic_id',incident_categoryController.findic_cat_code);
router.post('/',incident_categoryController.addic_cat_code);
router.put('/:ic_id',incident_categoryController.editic_cat_code);
router.delete('/:ic_id',incident_categoryController.deleteic_cat_code);


module.exports = router
