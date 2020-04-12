const axios = require('axios');

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://desk-jockey-scoobylarson.herokuapp.com/' : 'http://localhost:3000'
});

// ====================================
// ============= Auth =================
// ====================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// ====================================
// ============= Samples =================
// ====================================

export const createSample = async (item, user_id) => {
  const resp = await api.post(`/users/${user_id}/samples`, { sample: item })
  return resp.data
}
export const updateSample = async (id, user_id, item) => {
  const resp = await api.put(`users/${user_id}/samples/${id}`, { sample: item })
  return resp.data
}

export const getUserSamples = async (user_id) => {
  const resp = await api.get(`users/${user_id}/samples`)
  return resp.data
}

export const getSample = async (id, user_id) => {
  const resp = await api.get(`users/${user_id}/samples/${id}`)
  return resp.data
}

// ====================================
// ============= Samples =================
// ====================================
export const getFreeSample = async (id) => {
  const resp = await api.get(`free_samples/${id}`)
  return resp.data
}
export const getFreeSamples = async () => {
  const resp = await api.get(`free_samples`)
  return resp.data
}


