const Score = require('../models/score');

const list = async (query) => {
  const scores = await Score.find({ ...query });
  return scores;
};

const create = async (body) => {
  const { idParticipant, valeur, dateParticipation } = body;
  let [score] = await Score.find({ idParticipant, valeur, dateParticipation });
  if (score) {
    throw new Error('Score already exist');
  }
  score = new Score({ idParticipant, valeur, dateParticipation });
  score = await score.insert();
  return score;
};

const update = async (id, body) => {
  const { idParticipant, valeur, dateParticipation } = body;
  const score = await Score.findByIdAndUpdate(
    id, { idParticipant, valeur, dateParticipation },
  );
  if (!score) {
    throw new Error('Score with the given ID was not found');
  }
  return score;
};

const remove = async (id) => {
  const score = await Score.findByIdAndDelete(id);

  if (!score) {
    throw new Error('Score with the given ID was not found');
  }
  return score;
};

module.exports = {
  list,
  create,
  update,
  remove,
};
