import axiosDefault from 'axios';

import { apiSettings } from '../config/api';

export const axios = axiosDefault.create({
    baseURL: apiSettings.baseUrl,
})