var router = require('express').Router();

var hwc_case_hiController = require('../Controller/hwc_case_hiController');

router.get('/',hwc_case_hiController.getAllhwc_case_hi);
router.get('/:hwc_meta_id',hwc_case_hiController.findhwc_case_hi);
router.post('/',hwc_case_hiController.addhwc_case_hi);
router.put('/:hwc_meta_id',hwc_case_hiController.updatehwc_case_hi);
router.delete('/:hwc_meta_id',hwc_case_hiController.deletehwc_case_hi);

module.exports = router