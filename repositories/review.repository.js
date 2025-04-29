console.log('✅ review.repository.js loaded');

let reviewDB = [];
let reviewId = 1;

exports.saveReview = async ({ userId, storeId, rating, reviewText }) => {
  const newReview = {
    reviewId: reviewId++,
    userId,
    storeId,
    rating,
    reviewText,
    createdAt: new Date()
  };
  reviewDB.push(newReview);
  return newReview;
};
