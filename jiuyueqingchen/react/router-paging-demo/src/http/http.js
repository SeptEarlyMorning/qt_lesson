import axios from 'axios';

const http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
});

async function getData(tab, page) {
  return await http.get(`/topics?tab=${tab}&page=${page}&limit=20`);
}

export default getData;