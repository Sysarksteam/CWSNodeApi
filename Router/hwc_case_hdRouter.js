var router = require('express').Router();

var hwc_case_hdController = require('../Controller/hwc_case_hdController');

router.get('/', hwc_case_hdController.getAllhwc_case_hd);
router.get('/:hwc_meta_id', hwc_case_hdController.findhwc_case_hd);
router.post('/', hwc_case_hdController.addhwc_case_hd);
router.put('/:hwc_meta_id', hwc_case_hdController.updatehwc_case_hd);
router.delete('/:hwc_meta_id', hwc_case_hdController.deletehwc_case_hd);

module.exports = router