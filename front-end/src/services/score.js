/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = '127.0.0.1:5000';

const list = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/score`);
    return data;
  } catch (error) {
    throw new Error('Unable to display scores');
  }
};

const create = async (payload) => {
  try {
    const { data } = await axios.post(`${API_URL}/score`, payload);
    return data;
  } catch (error) {
    throw new Error('Unable to create score');
  }
};

const update = async (id, payload) => {
  try {
    const { data } = await axios.put(`${API_URL}'/score/'${id}`, payload);
    return data;
  } catch (error) {
    throw new Error('Unable to update score');
  }
};

const remove = async (id) => {
  try {
    const { data } = await axios.delete(`${API_URL}'/score/'${id}`);
    return data;
  } catch (error) {
    throw new Error('Unable to remove score');
  }
};

export default {
  list,
  create,
  update,
  remove,
};
