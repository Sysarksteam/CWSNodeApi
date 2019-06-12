var router = require('express').Router();

var villageNameController = require('../Controller/villageNameController');

router.get('/',villageNameController.getAllVillageName);
router.get('/:vm_id',villageNameController.findVillageName);
router.post('/',villageNameController.addVillageName);
router.put('/:vm_id',villageNameController.editVillageName);
router.delete('/:vm_id',villageNameController.deleteVillageName);


module.exports = router