console.log('✅ mission.repository.js loaded');

let challengeDB = [];

exports.existsByUserIdAndMissionId = async ({ userId, missionId }) => {
  return challengeDB.some(
    (challenge) => challenge.userId === parseInt(userId) && challenge.missionId === parseInt(missionId)
  );
};

exports.saveChallenge = async ({ userId, missionId }) => {
  const newChallenge = {
    challengeId: challengeDB.length + 1,
    userId: parseInt(userId),
    missionId: parseInt(missionId),
    challengedAt: new Date(),
  };
  challengeDB.push(newChallenge);
  return newChallenge;
};
