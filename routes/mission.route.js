const express = require('express');
const router = express.Router();
const missionController = require('../controllers/mission.controller');

console.log('✅ mission.route.js loaded');

router.post('/users/:userId/missions/:missionId/challenge', missionController.challengeMission);

module.exports = router;
