console.log('✅ mission.service.js loaded');

const missionRepository = require('../repositories/mission.repository');

exports.challengeMission = async ({ userId, missionId }) => {
  const alreadyChallenged = await missionRepository.existsByUserIdAndMissionId({ userId, missionId });

  if (alreadyChallenged) {
    throw new Error('이미 도전 중인 미션입니다.');
  }

  const newChallenge = await missionRepository.saveChallenge({ userId, missionId });

  return newChallenge;
};
