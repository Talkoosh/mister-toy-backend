const express = require('express');
const router = express.Router()
const {getToys, getToyById, addToy, updateToy, removeToy} = require('./toy.controller.js')

router.get('/', getToys)
router.get('/:toyId', getToyById)
router.post('/', addToy)
router.put('/', updateToy)
router.delete('/:toyId', removeToy)

module.exports = router;