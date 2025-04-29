const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');

console.log('✅ review.route.js loaded');

router.post('/', reviewController.createReview);

module.exports = router; 
