const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/productosController');

router.get('/', ctrl.obtener);
router.post('/', ctrl.crear);
router.put('/:id', ctrl.actualizar);


module.exports = router;
