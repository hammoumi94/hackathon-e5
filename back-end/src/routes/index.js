const express = require('express');

const participant = require('./participant');
const score = require('./score');
const question = require('./question');
const reponse = require('./reponse');
const feedback = require('./feedback');

const router = express.Router();
// Public routes
router.use('/participant', participant);
router.use('/score', score);
router.use('/question', question);
router.use('/reponse', reponse);
router.use('/feedback', feedback);

module.exports = router;
