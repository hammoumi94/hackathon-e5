const Participant = require('../models/participant');

const list = async (query) => {
  const participants = await Participant.find({ ...query });
  return participants;
};

const create = async (body) => {
  const { nom, prenom } = body;
  let [participant] = await Participant.find({ nom, prenom });
  if (participant) {
    throw new Error('Participant already exist');
  }
  participant = new Participant({ nom, prenom });
  participant = await participant.insert();
  return participant;
};

const update = async (id, body) => {
  const { nom, prenom } = body;
  const participant = await Participant.findByIdAndUpdate(id, { nom, prenom });
  if (!participant) {
    throw new Error('Participant with the given ID was not found');
  }
  return participant;
};

const remove = async (id) => {
  const participant = await Participant.findByIdAndDelete(id);

  if (!participant) {
    throw new Error('Participant with the given ID was not found');
  }
  return participant;
};

module.exports = {
  list,
  create,
  update,
  remove,
};
