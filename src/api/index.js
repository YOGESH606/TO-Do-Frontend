import axios from 'axios';

const API = axios.create({ baseURL: 'https://backendprojecttodo.herokuapp.com' });

export const getTasks = () => API.get('/posts/');
export const createTask = (data) => API.post(`/posts`, data);
export const editTask = (id, updatedTask) => API.patch(`/posts/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/posts/${id}`)
