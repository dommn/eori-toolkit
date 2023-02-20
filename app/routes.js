const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Start folder specific routes

// current sprint, remember to add older sprint when adding a new folder!
router.use('/01', require('./views/01/_routes'));
router.use('/02', require('./views/02/_routes'));
router.use('/03', require('./views/03/_routes'));
router.use('/04', require('./views/04/_routes'));
router.use('/ur', require('./views/ur/_routes'));
router.use('/ur-2', require('./views/ur-2/_routes'));
router.use('/05', require('./views/05/_routes'));

module.exports = router
