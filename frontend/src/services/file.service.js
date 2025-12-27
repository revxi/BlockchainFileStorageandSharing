import api from './api';

export const fileService = {
  getAllFiles: async () => {
    const { data } = await api.get('/files');
    return data;
  },

  getRecentFiles: async () => {
    const { data } = await api.get('/files/recent');
    return data;
  },

  deleteFile: async (fileId) => {
    const { data } = await api.delete(`/files/${fileId}`);
    return data;
  },

  // Updates the DB after IPFS upload and Blockchain tx is successful
  saveMetadata: async (metadata) => {
    const { data } = await api.post('/files/metadata', metadata);
    return data;
  }
};