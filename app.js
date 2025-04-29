const express = require('express');
const app = express();
const reviewRouter = require('./routes/review.route');
const missionRouter = require('./routes/mission.route');

console.log('✅ app.js loaded');

app.use(express.json());
app.use('/api/reviews', reviewRouter);
app.use('/api', missionRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
