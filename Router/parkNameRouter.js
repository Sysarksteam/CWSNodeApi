var router = require('express').Router();

var parkNameController = require('../Controller/parkNameController');

router.get('/',parkNameController.getAllParkName);
router.get('/:pm_id',parkNameController.findParkName);
router.post('/',parkNameController.addParkName);
router.put('/:pm_id',parkNameController.editParkName);
router.delete('/:pm_id',parkNameController.deleteParkName);


module.exports = router