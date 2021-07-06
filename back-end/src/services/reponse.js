const Reponse = require('../models/reponse');

const list = async (query) => {
  const reponses = await Reponse.find({ ...query });
  return reponses;
};

const create = async (body) => {
  const { idQuestion, contenu, correcte } = body;
  let [reponse] = await Reponse.find({ idQuestion, contenu, correcte });
  if (reponse) {
    throw new Error('Reponse already exist');
  }
  reponse = new Reponse({ idQuestion, contenu, correcte });
  reponse = await reponse.insert();
  return reponse;
};

const update = async (id, body) => {
  const { idQuestion, contenu, correcte } = body;
  const reponse = await Reponse.findByIdAndUpdate(
    id, { idQuestion, contenu, correcte },
  );
  if (!reponse) {
    throw new Error('Reponse with the given ID was not found');
  }
  return reponse;
};

const remove = async (id) => {
  const reponse = await Reponse.findByIdAndDelete(id);

  if (!reponse) {
    throw new Error('Reponse with the given ID was not found');
  }
  return reponse;
};

module.exports = {
  list,
  create,
  update,
  remove,
};
