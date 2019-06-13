var router = require('express').Router();

var dc_casesController = require('../Controller/dc_casesController');

router.get('/',dc_casesController.getAlldc_cases);
router.get('/:dcs_meta_id',dc_casesController.finddc_cases);
router.post('/',dc_casesController.adddc_cases);
router.put('/:dcs_meta_id',dc_casesController.updatedc_cases);
router.delete('/:dcs_meta_id',dc_casesController.deletedc_cases);

module.exports = router