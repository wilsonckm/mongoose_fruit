var express = require('express');
var router = express.Router();
const fruitCtrl = require('../controllers/fruits')

/* GET users listing. */
router.get('/', fruitCtrl.index);

//Get form
router.get('/new', fruitCtrl.new);

router.get('/:id', fruitCtrl.show);

router.post('/', fruitCtrl.create);

// router.delete('/:id', fruitCtrl.delete);

router.get('/:id/edit', fruitCtrl.edit);

router.put('/:id', fruitCtrl.update);

router.delete("/:id", fruitCtrl.deleteFruit);

module.exports = router;
