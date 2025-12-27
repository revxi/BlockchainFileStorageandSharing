import api from './api';

export const authService = {
  login: async (credentials) => {
    const { data } = await api.post('/auth/login', credentials);
    if (data.token) localStorage.setItem('token', data.token);
    return data;
  },

  register: async (userData) => {
    const { data } = await api.post('/auth/register', userData);
    return data;
  },

  verifyWallet: async (address, signature) => {
    const { data } = await api.post('/auth/verify-wallet', { address, signature });
    if (data.token) localStorage.setItem('token', data.token);
    return data;
  },

  logout: () => {
    localStorage.removeItem('token');
  }
};