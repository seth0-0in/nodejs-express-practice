console.log('✅ review.service.js loaded');

const reviewRepository = require('../repositories/review.repository');

exports.createReview = async ({ userId, storeId, rating, reviewText }) => {
  const newReview = await reviewRepository.saveReview({ userId, storeId, rating, reviewText });
  return newReview;
};
