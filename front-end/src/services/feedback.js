/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = '127.0.0.1:5000';

const list = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/feedback`);
    return data;
  } catch (error) {
    throw new Error('Unable to display feedbacks');
  }
};

const create = async (payload) => {
  try {
    const { data } = await axios.post(`${API_URL}/feedback`, payload);
    return data;
  } catch (error) {
    throw new Error('Unable to create feedback');
  }
};

const update = async (id, payload) => {
  try {
    const { data } = await axios.put(`${API_URL}'/feedback/'${id}`, payload);
    return data;
  } catch (error) {
    throw new Error('Unable to update feedback');
  }
};

const remove = async (id) => {
  try {
    const { data } = await axios.delete(`${API_URL}'/feedback/'${id}`);
    return data;
  } catch (error) {
    throw new Error('Unable to remove feedback');
  }
};

export default {
  list,
  create,
  update,
  remove,
};
