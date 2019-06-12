var router = require('express').Router();

var rangeNameController = require('../Controller/rangeNameController');

router.get('/',rangeNameController.getAllRangeName);
router.get('/:rm_id',rangeNameController.findRangeName);
router.post('/',rangeNameController.addRangeName);
router.put('/:rm_id',rangeNameController.editRangeName);
router.delete('/:rm_id',rangeNameController.deleteRangeName);


module.exports = router