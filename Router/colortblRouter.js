var router = require('express').Router();
var colortblController = require('../Controller/colortblController');

router.get('/',colortblController.getAllColors);
router.get('/:cm_color_id',colortblController.findColorCode);
router.post('/',colortblController.addColor);
router.put('/:cm_color_id',colortblController.updateColor);
router.delete('/:cm_color_id',colortblController.deleteColor);

module.exports = router 