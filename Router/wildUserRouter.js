var router = require('express').Router();

var wildUserController = require('../Controller/wildUserController');

router.get('/',wildUserController.getAllWildUser);
router.get('/:wls_wsid',wildUserController.findWildUser);
router.post('/',wildUserController.addWildUser);
router.put('/:wls_wsid',wildUserController.editWildUser);
router.delete('/:wls_wsid',wildUserController.deleteWildUser);


module.exports = router
