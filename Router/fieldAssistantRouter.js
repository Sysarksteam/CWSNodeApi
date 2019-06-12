var router = require('express').Router();

var fieldAssistantController = require('../Controller/fieldAssistantController');

router.get('/',fieldAssistantController.getAllFieldAssistant);
router.get('/:fa_id',fieldAssistantController.findFieldAssistant);
router.post('/',fieldAssistantController.addFieldAssistant);
router.put('/:fa_id',fieldAssistantController.editFieldAssistant);
router.delete('/:fa_id',fieldAssistantController.deleteFieldAssistant);


module.exports = router