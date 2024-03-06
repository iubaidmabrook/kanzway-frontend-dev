import axios, { CreateAxiosDefaults } from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const config: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const instance = axios.create(config);

const http = setupCache(instance);

export default http;
