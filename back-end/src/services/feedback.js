const Feedback = require('../models/feedback');

const list = async (query) => {
  const feedbacks = await Feedback.find({ ...query });
  return feedbacks;
};

const create = async (body) => {
  const { idParticipant, contenu } = body;
  let [feedback] = await Feedback.find({ idParticipant, contenu });
  if (feedback) {
    throw new Error('Feedback already exist');
  }
  feedback = new Feedback({ contenu });
  feedback = await feedback.insert();
  return feedback;
};

const update = async (id, body) => {
  const { idParticipant, contenu } = body;
  const feedback = await Feedback.findByIdAndUpdate(
    id, { idParticipant, contenu },
  );
  if (!feedback) {
    throw new Error('Feedback with the given ID was not found');
  }
  return feedback;
};

const remove = async (id) => {
  const feedback = await Feedback.findByIdAndDelete(id);

  if (!feedback) {
    throw new Error('Feedback with the given ID was not found');
  }
  return feedback;
};

module.exports = {
  list,
  create,
  update,
  remove,
};
