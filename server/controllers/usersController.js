// Import database
const knex = require('../db/db')

// Retrieve all users
exports.usersAll = async (req, res) => {
  // Get all userss from database
  knex
    .select('*') // select all records
    .from('users') // from 'users' table
    .then(userData => {
      // Send users extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving users: ${err}` })
    })
}

// Create new user
exports.usersCreate = async (req, res) => {
  // Add new user to database
  knex('users')
    .insert({ // insert new record, a book
      'firstName': req.body.firstName,
      'lastName': req.body.lastName,
      'email': req.body.email,
      'gender': req.body.gender,
      'ipAdress': req.body.ipAdress
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `User '${req.body.firstName}' by ${req.body.lastName} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.firstName} user: ${err}` })
    })
}

// Remove specific user
exports.usersDelete = async (req, res) => {
  // Find specific user in the database and remove it
  knex('users')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `User ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} user: ${err}` })
    })
}

// Remove all userss on the list
exports.usersReset = async (req, res) => {
  // Remove all users from database
  knex
    .select('*') // select all records
    .from('users') // from 'books' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'User list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting user list: ${err}.` })
    })
}