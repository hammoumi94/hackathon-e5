const httpStatus = require('http-status');
const scoreService = require('../services/score');

const list = async (req, res) => {
  const scores = await scoreService.list(req.query);
  return res.status(httpStatus.OK).json(scores);
};

const create = async (req, res) => {
  const score = await scoreService.create(req.body);
  return res.status(httpStatus.OK).json(score);
};

const update = async (req, res) => {
  const score = await scoreService.update(req.params.id, req.body);
  return res.status(httpStatus.OK).json(score);
};

const remove = async (req, res) => {
  const score = await scoreService.remove(req.params.id);
  return res.status(httpStatus.OK).json(score);
};

module.exports = {
  list,
  create,
  update,
  remove,
};
