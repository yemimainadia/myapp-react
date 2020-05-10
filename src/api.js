import axios from 'axios';

export default axios.create({
    baseURL: `https://cookey-8f6f.restdb.io/rest/`,
    headers: { 'x-apikey': '5ea52d621851f96a8ea167a0' } //karena pake norest db, maka perlu buat konek pake headers
});
