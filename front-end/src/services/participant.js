/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = '127.0.0.1:5000';

const list = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/participant`);
    return data;
  } catch (error) {
    throw new Error('Unable to display participants');
  }
};

const create = async (payload) => {
  try {
    const { data } = await axios.post(`${API_URL}/participant`, payload);
    return data;
  } catch (error) {
    throw new Error('Unable to create participant');
  }
};

const update = async (id, payload) => {
  try {
    const { data } = await axios.put(`${API_URL}'/participant/'${id}`, payload);
    return data;
  } catch (error) {
    throw new Error('Unable to update participant');
  }
};

const remove = async (id) => {
  try {
    const { data } = await axios.delete(`${API_URL}'/participant/'${id}`);
    return data;
  } catch (error) {
    throw new Error('Unable to remove participant');
  }
};

export default {
  list,
  create,
  update,
  remove,
};
