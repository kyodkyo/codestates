import axios, { AxiosRequestConfig } from 'axios';

import { User } from '../types';
import { baseUrl } from './constants';

const config: AxiosRequestConfig = { baseURL: baseUrl };
export const axiosInstance = axios.create(config);
