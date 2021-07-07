/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = '127.0.0.1:5000';

const list = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/reponse`);
    return data;
  } catch (error) {
    throw new Error('Unable to display reponses');
  }
};

const create = async (payload) => {
  try {
    const { data } = await axios.post(`${API_URL}/reponse`, payload);
    return data;
  } catch (error) {
    throw new Error('Unable to create reponse');
  }
};

const update = async (id, payload) => {
  try {
    const { data } = await axios.put(`${API_URL}'/reponse/'${id}`, payload);
    return data;
  } catch (error) {
    throw new Error('Unable to update reponse');
  }
};

const remove = async (id) => {
  try {
    const { data } = await axios.delete(`${API_URL}'/reponse/'${id}`);
    return data;
  } catch (error) {
    throw new Error('Unable to remove reponse');
  }
};

export default {
  list,
  create,
  update,
  remove,
};
