import axiosDefault from 'axios';

export const axios = axiosDefault.create({
    baseURL: `http://localhost:3333`,
})