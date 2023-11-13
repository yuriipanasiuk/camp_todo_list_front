import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://todo-list-wheat-nine.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
