var router = require('express').Router();

var hwc_case_cropController = require('../Controller/hwc_case_cropController');

router.get('/',hwc_case_cropController.getAllhwc_case_crop);
router.get('/:hwc_meta_id',hwc_case_cropController.findhwc_case_crop);
router.post('/',hwc_case_cropController.addhwc_case_crop);
router.put('/:hwc_meta_id',hwc_case_cropController.updatehwc_case_crop);
router.delete('/:hwc_meta_id',hwc_case_cropController.deletehwc_case_crop);

module.exports = router