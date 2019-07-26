import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID d9e2102e2ad6e37545ab59624948e5dd3dbfbf627612262dee094334fc9536aa'
  }
});