import axios from 'axios';

export const baseApi = axios.create({
  baseURL:
    'https://desarrollo-staffing.pichincha.com/ipf-msa-productosfinancieros',
});
