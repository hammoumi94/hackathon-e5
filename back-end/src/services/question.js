const Question = require('../models/question');

const list = async (query) => {
  const questions = await Question.find({ ...query });
  return questions;
};

const create = async (body) => {
  const { contenu } = body;
  let [question] = await Question.find({ contenu });
  if (question) {
    throw new Error('Question already exist');
  }
  question = new Question({ contenu });
  question = await question.insert();
  return question;
};

const update = async (id, body) => {
  const { contenu } = body;
  const question = await Question.findByIdAndUpdate(
    id, { contenu },
  );
  if (!question) {
    throw new Error('Question with the given ID was not found');
  }
  return question;
};

const remove = async (id) => {
  const question = await Question.findByIdAndDelete(id);

  if (!question) {
    throw new Error('Question with the given ID was not found');
  }
  return question;
};

module.exports = {
  list,
  create,
  update,
  remove,
};
