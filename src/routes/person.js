const express = require('express');
const router = express.Router();

router.get('/person', (req, res) => {
  // localhost:3000/person?name=Doug
  if (req.query.name) {
    res.send(`You have requested person ${req.query.name}`)
  } else {
    res.send('You have requested a person')
  }
})

// localhost:3000/person/Doug
router.get('/person/:name', (req, res) => {
  res.send(`You have requested person ${req.params.name}`)
})

router.get('/error', (req, res) => {
  throw new Error('This is a forced error.')
})

module.exports = router;