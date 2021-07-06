const httpStatus = require('http-status');
const questionService = require('../services/question');

const list = async (req, res) => {
  const questions = await questionService.list(req.query);
  return res.status(httpStatus.OK).json(questions);
};

const create = async (req, res) => {
  const question = await questionService.create(req.body);
  return res.status(httpStatus.OK).json(question);
};

const update = async (req, res) => {
  const question = await questionService.update(req.params.id, req.body);
  return res.status(httpStatus.OK).json(question);
};

const remove = async (req, res) => {
  const question = await questionService.remove(req.params.id);
  return res.status(httpStatus.OK).json(question);
};

module.exports = {
  list,
  create,
  update,
  remove,
};
