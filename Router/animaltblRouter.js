var router = require('express').Router();
var animaltblController = require('../Controller/animaltblController');

router.get('/',animaltblController.getAllAnimals);
router.get('/:am_id',animaltblController.findAnimal);
router.post('/',animaltblController.addAnimal);
router.put('/:am_id',animaltblController.updateAnimal);
router.delete('/:am_id',animaltblController.deleteAnimal);

module.exports = router 