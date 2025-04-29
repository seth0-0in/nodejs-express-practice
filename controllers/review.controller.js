console.log('✅ review.controller.js loaded');

const reviewService = require('../services/review.service');

exports.createReview = async (req, res) => {
  try {
    const { userId, storeId, rating, reviewText } = req.body;
    const newReview = await reviewService.createReview({ userId, storeId, rating, reviewText });
    res.status(201).json({ message: '리뷰 등록 성공', data: newReview });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
