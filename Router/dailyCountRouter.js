var router = require('express').Router();
var dailyCountController = require('../Controller/dailyCountController');

router.get('/',dailyCountController.getAllDailyCount);
router.get('/:dc_metainstance_id',dailyCountController.findDailyCount);
router.post('/',dailyCountController.addDailyCount);
router.put('/:dc_metainstance_id',dailyCountController.updateDailyCount);
router.delete('/:dc_metainstance_id',dailyCountController.deleteDailyCount);

module.exports = router 