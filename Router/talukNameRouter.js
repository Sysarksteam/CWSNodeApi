var router = require('express').Router();

var talukNameController = require('../Controller/talukNameController');

router.get('/',talukNameController.getAllTalukName);
router.get('/:tm_id',talukNameController.findTalukName);
router.post('/',talukNameController.addTalukName);
router.put('/:tm_id',talukNameController.editTalukName);
router.delete('/:tm_id',talukNameController.deleteTalukName);


module.exports = router