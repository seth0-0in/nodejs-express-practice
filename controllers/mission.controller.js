const missionService = require('../services/mission.service');

exports.challengeMission = async (req, res) => {
  try {
    const { userId, missionId } = req.params;

    const challengeResult = await missionService.challengeMission({ userId, missionId });

    res.status(201).json({
      message: '미션 도전 성공',
      data: challengeResult,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

console.log('✅ mission.controller.js loaded');
