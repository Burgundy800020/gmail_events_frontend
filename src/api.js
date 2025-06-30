import axios from 'axios';

const BACKEND_BASE_URL = 'http://localhost:8000';

// axios instance for backend calls
const backend = axios.create({
    baseURL: BACKEND_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Generic GET
export const apiGet = async (path, params = {}) => {
    return await backend.get(path, { params });
};

// Generic POST
export const apiPost = async (path, data) => {
    return await backend.post(path, data);
};

// Generic PUT
export const apiPut = async (path, data) => {
    return await backend.put(path, data);
};

// Generic DELETE
export const apiDelete = async (path) => {
    return await backend.delete(path);
};


