var router = require('express').Router();

var hwc_detailsUserController = require('../Controller/hwc_detailsUserController');

router.get('/',hwc_detailsUserController.getAllhwc_detailsUser);
router.get('/:hwc_metainstance_id', hwc_detailsUserController.findhwc_detailsUser);
router.post('/', hwc_detailsUserController.addhwc_detailsUser);
router.put('/:hwc_metainstance_id',hwc_detailsUserController.edithwc_detailsUser);
router.delete('/:hwc_metainstance_id',hwc_detailsUserController.deletehwc_detailsUser);

module.exports = router