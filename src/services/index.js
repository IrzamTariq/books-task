import axios from 'axios';
const url = 'http://192.168.18.126:3000/api';
axios.defaults.baseURL = url;

class Api {
  async getBooks(payload) {
    const {query = ''} = payload;
    const {data} = await axios.get(`/books${query}`);
    return data;
  }
}

export const api = new Api();
