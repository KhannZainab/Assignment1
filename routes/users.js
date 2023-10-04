//users.js, Zainab Khan-301306385  Date: Monday, October 2, 2023

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;

