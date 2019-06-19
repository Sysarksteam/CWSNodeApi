var router = require('express').Router();

var com_cases_detailsController = require('../Controller/com_cases_detailsController');

router.get('/',com_cases_detailsController.getAllcom_cases_details);
router.get('/:com_meta_id',com_cases_detailsController.findcom_cases_details);
router.post('/',com_cases_detailsController.addcom_cases_details);
router.put('/:com_meta_id',com_cases_detailsController.updatecom_cases_details);
router.delete('/:com_meta_id',com_cases_detailsController.deletecom_cases_details);

module.exports = router