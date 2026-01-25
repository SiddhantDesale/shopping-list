import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchItems = () => axios.get(API_URL);

export const addItem = (item) => axios.post(API_URL, item);

export const toggleItem = (id) => axios.put(`${API_URL}/${id}/toggle`);

export const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);
