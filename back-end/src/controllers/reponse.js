const httpStatus = require('http-status');
const reponseService = require('../services/reponse');

const list = async (req, res) => {
  const reponses = await reponseService.list(req.query);
  return res.status(httpStatus.OK).json(reponses);
};

const create = async (req, res) => {
  const reponse = await reponseService.create(req.body);
  return res.status(httpStatus.OK).json(reponse);
};

const update = async (req, res) => {
  const reponse = await reponseService.update(req.params.id, req.body);
  return res.status(httpStatus.OK).json(reponse);
};

const remove = async (req, res) => {
  const reponse = await reponseService.remove(req.params.id);
  return res.status(httpStatus.OK).json(reponse);
};

module.exports = {
  list,
  create,
  update,
  remove,
};
