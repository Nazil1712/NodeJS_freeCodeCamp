// Nothing but just making our file cleaner.

const express = require('express')
const router = express.Router()
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('./people_Controller')


// 1) First Approach

/* // GET Request
router.get('/', getPeople)

// POST Request (JavaScript)
router.post('/', createPerson)

// POSTMAN -> POST Request -> JavaScript
router.post('/postman', createPersonPostman)

// POSTMAN -> PUT Request -> For updation
router.put('/postman/:id', updatePerson)

// POSTMAN -> DELETE Request -> For Deletion
router.delete('/postman/:id', deletePerson) */


// 2) Second Approach --> If we have same route path then we can chain like this
// Both have same functoinality We can use any as per our preference
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/postman/:id').put(updatePerson).delete(deletePerson)

module.exports = router;