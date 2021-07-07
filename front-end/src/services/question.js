/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = '127.0.0.1:5000';

const list = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/question`);
    return data;
  } catch (error) {
    throw new Error('Unable to display questions');
  }
};

const create = async (payload) => {
  try {
    const { data } = await axios.post(`${API_URL}/question`, payload);
    return data;
  } catch (error) {
    throw new Error('Unable to create question');
  }
};

const update = async (id, payload) => {
  try {
    const { data } = await axios.put(`${API_URL}'/question/'${id}`, payload);
    return data;
  } catch (error) {
    throw new Error('Unable to update question');
  }
};

const remove = async (id) => {
  try {
    const { data } = await axios.delete(`${API_URL}'/question/'${id}`);
    return data;
  } catch (error) {
    throw new Error('Unable to remove question');
  }
};

export default {
  list,
  create,
  update,
  remove,
};
