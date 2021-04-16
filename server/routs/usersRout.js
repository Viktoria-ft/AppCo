// Import express
const express = require('express')

// Import usersController
const usersRoutes = require('../controllers/usersController.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all users
router.get('/all', usersRoutes.usersAll)

// Add route for POST request to create new user
router.post('/create', usersRoutes.usersCreate)

// Add route for PUT request to delete specific user
router.put('/delete', usersRoutes.usersDelete)

// Add route for PUT request to reset users list
router.put('/reset', usersRoutes.usersReset)

// Export router
module.exports = router