var router = require('express').Router();
var dbController = require('../Controller/dbController');

router.get('/',dbController.getAllDBName);
router.get('/:db_id',dbController.findDBName);
router.post('/',dbController.addDBName);
router.put('/:db_id',dbController.updateDBName);
router.delete('/:db_id',dbController.deleteDBName);

module.exports = router 