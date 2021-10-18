const { Router }  = require('express');
const router = Router();
const controller  = require('../controllers/products.controller')

router.get('/items', controller.search);
router.get('/items/:id', controller.getItemsById);

module.exports = router;