const httpStatus = require('http-status');
const feedbackService = require('../services/feedback');

const list = async (req, res) => {
  const feedbacks = await feedbackService.list(req.query);
  return res.status(httpStatus.OK).json(feedbacks);
};

const create = async (req, res) => {
  const feedback = await feedbackService.create(req.body);
  return res.status(httpStatus.OK).json(feedback);
};

const update = async (req, res) => {
  const feedback = await feedbackService.update(req.params.id, req.body);
  return res.status(httpStatus.OK).json(feedback);
};

const remove = async (req, res) => {
  const feedback = await feedbackService.remove(req.params.id);
  return res.status(httpStatus.OK).json(feedback);
};

module.exports = {
  list,
  create,
  update,
  remove,
};
