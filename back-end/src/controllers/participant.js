const httpStatus = require('http-status');
const participantService = require('../services/participant');

const list = async (req, res) => {
  const participants = await participantService.list(req.query);
  return res.status(httpStatus.OK).json(participants);
};

const create = async (req, res) => {
  const participant = await participantService.create(req.body);
  return res.status(httpStatus.OK).json(participant);
};

const update = async (req, res) => {
  const participant = await participantService.update(req.params.id, req.body);
  return res.status(httpStatus.OK).json(participant);
};

const remove = async (req, res) => {
  const participant = await participantService.remove(req.params.id);
  return res.status(httpStatus.OK).json(participant);
};

module.exports = {
  list,
  create,
  update,
  remove,
};
